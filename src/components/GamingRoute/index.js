import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../context/NxtWatchContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import GameVideoItem from '../GameVideoItem'
import {
  Container,
  HomeContainer,
  HomeSearchResultContainer,
  TrendingLogoContainer,
  SiYoutubegamingIcon,
  IconContainer,
  TrendingPara,
  LoaderContainer,
  NoSearchResultContainer,
  NoSearchResultImg,
  NoSearchParaHead,
  NoSearchButton,
  UnOrderVideoContainer,
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
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({
      apiStatus: videoStatusConstant.inProgess,
    })
    const jwtToken = Cookies.get('jwt_token')
    const gamingUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        AUthorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingUrl, options)
    if (response.ok === true) {
      const gamingData = await response.json()
      const updatedGamingData = gamingData.videos.map(eachGamingVideo => ({
        id: eachGamingVideo.id,
        title: eachGamingVideo.title,
        thumbnailUrl: eachGamingVideo.thumbnail_url,
        viewCount: eachGamingVideo.view_count,
      }))
      this.setState({
        apiStatus: videoStatusConstant.success,
        gamingVideosList: updatedGamingData,
      })
    }
    if (response.ok !== true) {
      this.setState({
        apiStatus: videoStatusConstant.failure,
      })
    }
  }

  onRetry = () => {
    this.getGamingVideos()
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
    const {gamingVideosList} = this.state
    return (
      <UnOrderVideoContainer>
        {gamingVideosList.map(eachGame => (
          <GameVideoItem gameDetails={eachGame} key={eachGame.id} />
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
            <Container bgColor={bgColor} data-testid="gaming">
              <Navbar />
              <HomeContainer bgColor1={bgColor1} bgColor={bgColor}>
                <Sidebar />
                <HomeSearchResultContainer bgColor={bgColor}>
                  <TrendingLogoContainer trendingBgColor={trendingBgColor}>
                    <IconContainer bgColor={bgColor}>
                      <SiYoutubegamingIcon iconcolor={iconColor} />
                    </IconContainer>
                    <TrendingPara color={color}>Gaming</TrendingPara>
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

export default GamingRoute
