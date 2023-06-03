import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../context/NxtWatchContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'

import {
  HomeContainer,
  HomeSearchResultContainer,
  LoaderContainer,
  NoSearchResultContainer,
  NoSearchResultImg,
  NoSearchParaHead,
  NoSearchButton,
  VideoContainer,
  DescriptionContainer,
  VideoDescription,
  DescriptionCard,
  VideoPara,
  ButtonContainer,
  Button,
  IconPara,
  Separator,
  ChannelLogoContainer,
  ChannelLogo,
  ChannelContainer,
  SubHead,
  SubPara,
  SubDescription,
  Container,
} from './styledComponents'

const videoStatusConstant = {
  initial: 'INITIAL',
  inProgess: 'IN PROGESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingRoute extends Component {
  state = {
    apiStatus: videoStatusConstant.initial,
    specificVideo: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getSpecificVideos()
  }

  getSpecificVideos = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({
      apiStatus: videoStatusConstant.inProgess,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        AUthorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }
      this.setState({
        specificVideo: updatedData,
        apiStatus: videoStatusConstant.success,
      })
    }
    if (response.ok !== true) {
      this.setState({
        apiStatus: videoStatusConstant.failure,
      })
    }
  }

  onRetry = () => {
    this.getSpecificVideos()
  }

  onClickLikeButton = () => {
    this.setState(pervState => ({
      isLiked: !pervState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislikeButton = () => {
    this.setState(pervState => ({
      isLiked: false,
      isDisliked: !pervState.isDisliked,
    }))
  }

  renderLoaderView = isDarkTheme => (
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkTheme ? '#ffffff' : '#3b82f6'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideos, addSavedVideo} = value
        const {specificVideo, isLiked, isDisliked} = this.state
        const {
          title,
          videoUrl,
          viewCount,
          publishedAt,
          description,
          channel,
        } = specificVideo
        let isSaved

        const index = savedVideos.findIndex(
          eachList => eachList.id === specificVideo.id,
        )

        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const color = isDarkTheme ? '#ffffff' : '#1e293b'
        const color1 = isDarkTheme ? '#616e7c' : '#00306e'
        const separatorColor = isDarkTheme ? '#616e7c' : '#64748b'
        const likecolor = isLiked ? '#2563eb' : '#64748b'
        const dislikecolor = isDisliked ? '#2563eb' : '#64748b'
        const savedcolor = isSaved ? '#2563eb' : '#64748b'
        const saveText = isSaved ? 'Saved' : 'Save'
        const publishedDate = formatDistanceToNow(new Date(publishedAt))

        const onClickSaveButton = () => {
          addSavedVideo(specificVideo)
        }

        return (
          <>
            <VideoContainer>
              <ReactPlayer width="100%" height="100%" url={videoUrl} controls />
            </VideoContainer>
            <DescriptionContainer>
              <VideoDescription color={color}>{title}</VideoDescription>
              <DescriptionCard>
                <VideoPara color={color1}>
                  {viewCount} * {publishedAt}
                </VideoPara>
                <ButtonContainer>
                  <Button type="button" onClick={this.onClickLikeButton}>
                    <AiOutlineLike
                      size={20}
                      color={isLiked ? '#2563eb' : '#64748b'}
                    />
                    <IconPara color={likecolor}>Like</IconPara>
                  </Button>
                  <Button type="button" onClick={this.onClickDislikeButton}>
                    <AiOutlineDislike
                      size={20}
                      color={isDisliked ? '#2563eb' : '#64748b'}
                    />
                    <IconPara color={dislikecolor}>Dislike</IconPara>
                  </Button>
                  <Button type="button" onClick={onClickSaveButton}>
                    <MdPlaylistAdd
                      size={20}
                      color={isSaved ? '#2563eb' : '#64748b'}
                    />
                    <IconPara color={savedcolor}>{saveText}</IconPara>
                  </Button>
                </ButtonContainer>
              </DescriptionCard>
              <Separator color={separatorColor} />
              <ChannelLogoContainer>
                <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
                <ChannelContainer>
                  <SubHead color={color1}>{channel.name}</SubHead>
                  <SubPara color={dislikecolor}>
                    {channel.subscriberCount} subscribers
                  </SubPara>
                </ChannelContainer>
              </ChannelLogoContainer>
              <SubDescription color={color}>{description}</SubDescription>
            </DescriptionContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderStatusView = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case videoStatusConstant.inProgess:
        return this.renderLoaderView(isDarkTheme)
      case videoStatusConstant.success:
        return this.renderSuccessView()
      case videoStatusConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const bgColor1 = isDarkTheme ? '#0f0f0f' : '#f4f4f4'

          return (
            <Container bgColor={bgColor} data-testid="videoItemDetails">
              <Navbar />
              <HomeContainer bgColor1={bgColor1} bgColor={bgColor}>
                <Sidebar />
                <HomeSearchResultContainer>
                  {this.renderStatusView(isDarkTheme)}
                </HomeSearchResultContainer>
              </HomeContainer>
            </Container>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default GamingRoute
