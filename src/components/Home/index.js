import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch} from 'react-icons/ai'
import NxtWatchContext from '../../context/NxtWatchContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import SearchVideoItem from '../SearchVideoItem'

import {
  HomeContainer,
  HomeSearchResultContainer,
  PremiumBannerContainer,
  NxtWatchLightLogo1,
  PremiumBannerCard,
  PremiumBannerPara,
  PremiumBannerGetItNowButton,
  PremiumBannerCloseButton,
  RiCloseLineIcon,
  HomeSearchResultCard,
  SearchContainer,
  SearchInput,
  SearchIconButton,
  UnOrderVideoContainer,
  LoaderContainer,
  NoSearchResultContainer,
  NoSearchResultImg,
  NoSearchParaHead,
  NoSearchButton,
  Container,
} from './styledComponents'

const videoStatusConstant = {
  initial: 'INITIAL',
  inProgess: 'IN PROGESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    showBanner: 'flex',
    searchValue: '',
    apiStatus: videoStatusConstant.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getAllVideosResult()
  }

  getAllVideosResult = async () => {
    this.setState({
      apiStatus: videoStatusConstant.inProgess,
    })
    const {searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    console.log(url)
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: videoStatusConstant.success,
      })
    } else {
      this.setState({
        apiStatus: videoStatusConstant.failure,
      })
    }
  }

  closePremiumBanner = () => {
    this.setState({
      showBanner: 'none',
    })
  }

  getSearchValue = event => {
    this.setState({
      searchValue: event.target.value,
    })
  }

  updateUrlSearchQueryValue = event => {
    if (event.key === 'Enter') {
      this.getAllVideosResult()
    }
  }

  onClickUpdateSearchValue = () => {
    this.getAllVideosResult()
  }

  onRetry = () => {
    this.setState(
      {
        searchValue: '',
      },
      this.getAllVideosResult,
    )
  }

  renderPremiumBanner = () => {
    const {showBanner} = this.state
    const display = showBanner === 'flex' ? 'flex' : 'none'
    return (
      <PremiumBannerContainer display={display} data-testid="banner">
        <PremiumBannerCard>
          <NxtWatchLightLogo1
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <PremiumBannerPara as="p">
            Buy Nxt Watch Premium prepaid plans with UPI
          </PremiumBannerPara>
          <PremiumBannerGetItNowButton type="button">
            GET IT NOW
          </PremiumBannerGetItNowButton>
        </PremiumBannerCard>
        <PremiumBannerCloseButton
          type="button"
          onClick={this.closePremiumBanner}
          data-testid="close"
        >
          <RiCloseLineIcon />
        </PremiumBannerCloseButton>
      </PremiumBannerContainer>
    )
  }

  renderSuccessView = isDarkTheme => {
    const {videosList} = this.state
    console.log(videosList)
    const color = isDarkTheme ? '#ffffff' : '#1e293b'
    const color1 = isDarkTheme ? '#616e7c' : '#00306e'
    if (videosList.length === 0) {
      return (
        <NoSearchResultContainer>
          <NoSearchResultImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <NoSearchParaHead color={color}>
            No Search results found
          </NoSearchParaHead>
          <NoSearchParaHead as="p" color={color1}>
            Try different key words or remove search filter
          </NoSearchParaHead>
          <NoSearchButton type="button" onClick={this.onRetry}>
            Retry
          </NoSearchButton>
        </NoSearchResultContainer>
      )
    }
    return (
      <UnOrderVideoContainer>
        {videosList.map(eachVideo => (
          <SearchVideoItem videoDetails={eachVideo} key={eachVideo.id} />
        ))}
      </UnOrderVideoContainer>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

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

  renderStatusView = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case videoStatusConstant.inProgess:
        return this.renderLoaderView(isDarkTheme)
      case videoStatusConstant.success:
        return this.renderSuccessView(isDarkTheme)
      case videoStatusConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchValue} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const bgColor1 = isDarkTheme ? '#0f0f0f' : '#f4f4f4'
          const searchColor = isDarkTheme ? '#231f20' : '#f9f9f9'
          const color = isDarkTheme ? '#ffffff' : '#1e293b'
          return (
            <Container data-testid="home" bgColor={bgColor}>
              <Navbar />
              <HomeContainer bgColor1={bgColor1} bgColor={bgColor}>
                <Sidebar />
                <HomeSearchResultContainer bgColor={bgColor}>
                  {this.renderPremiumBanner()}
                  <HomeSearchResultCard>
                    <SearchContainer>
                      <SearchInput
                        type="search"
                        color={color}
                        placeholder="Search"
                        value={searchValue}
                        onChange={this.getSearchValue}
                        onKeyDown={this.updateUrlSearchQueryValue}
                      />
                      <SearchIconButton
                        type="button"
                        data-testid="searchButton"
                        onClick={this.onClickUpdateSearchValue}
                        bgColor={searchColor}
                      >
                        <AiOutlineSearch color="#909090" size={20} />
                      </SearchIconButton>
                    </SearchContainer>
                    {this.renderStatusView(isDarkTheme)}
                  </HomeSearchResultCard>
                </HomeSearchResultContainer>
              </HomeContainer>
            </Container>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
