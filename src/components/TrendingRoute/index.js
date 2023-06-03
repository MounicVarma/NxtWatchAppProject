import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import TrendingVideoItem from '../TrendingVideoItem'
import NxtWatchContext from '../../context/NxtWatchContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import {
  HomeContainer,
  HomeSearchResultContainer,
  TrendingLogoContainer,
  AiFillFireIcon,
  IconContainer,
  TrendingPara,
  LoaderContainer,
  NoSearchResultContainer,
  NoSearchResultImg,
  NoSearchParaHead,
  NoSearchButton,
  UnOrderVideoContainer,
  Container,
} from './styledComponents'

const videoStatusConstant = {
  initial: 'INITIAL',
  inProgess: 'IN PROGESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingRoute extends Component {
  state = {
    apiStatus: videoStatusConstant.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: videoStatusConstant.inProgess,
    })
    const jwtToken = Cookies.get('jwt_token')
    const trendingUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        AUthorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingUrl, options)
    if (response.ok === true) {
      const trendingData = await response.json()
      const updatedTrendingData = trendingData.videos.map(eachData => ({
        id: eachData.id,
        title: eachData.title,
        thumbnailUrl: eachData.thumbnail_url,
        viewCount: eachData.view_count,
        publishedAt: eachData.published_at,
        channel: {
          name: eachData.channel.name,
          profileImageUrl: eachData.channel.profile_image_url,
        },
      }))
      this.setState({
        trendingVideosList: updatedTrendingData,
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
    this.getTrendingVideos()
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

  renderSuccessView = () => {
    const {trendingVideosList} = this.state
    return (
      <UnOrderVideoContainer>
        {trendingVideosList.map(eachTrendingVideo => (
          <TrendingVideoItem
            trendingVideoDetails={eachTrendingVideo}
            key={eachTrendingVideo.id}
          />
        ))}
      </UnOrderVideoContainer>
    )
  }

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
          const color = isDarkTheme ? '#ffffff' : '#1e293b'
          const trendingBgColor = isDarkTheme ? '#181818' : '#ebebeb'
          const iconColor = isDarkTheme ? '#ff0000' : '#ff0b37'
          return (
            <Container bgColor={bgColor} data-testid="trending">
              <Navbar />
              <HomeContainer bgColor1={bgColor1} bgColor={bgColor}>
                <Sidebar />
                <HomeSearchResultContainer bgColor={bgColor}>
                  <TrendingLogoContainer trendingBgColor={trendingBgColor}>
                    <IconContainer bgColor={bgColor}>
                      <AiFillFireIcon iconcolor={iconColor} />
                    </IconContainer>
                    <TrendingPara color={color}>Trending</TrendingPara>
                  </TrendingLogoContainer>
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

export default TrendingRoute
