import {Component} from 'react'
import NxtWatchContext from '../../context/NxtWatchContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import SavedVideosItem from '../SavedVideosItem'
import {
  HomeContainer,
  Container,
  NoSearchResultContainer,
  NoSearchResultImg,
  NoSearchParaHead,
  HomeSearchResultContainer,
  TrendingLogoContainer,
  IconContainer,
  AiFillFireIcon,
  TrendingPara,
  UnOrderVideoContainer,
} from './styledComponents'

class SavedVideosRoute extends Component {
  rendersuccessview = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideos} = value
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const color = isDarkTheme ? '#ffffff' : '#1e293b'
        const color1 = isDarkTheme ? '#616e7c' : '#00306e'
        const trendingBgColor = isDarkTheme ? '#181818' : '#ebebeb'
        const iconColor = isDarkTheme ? '#ff0000' : '#ff0b37'

        if (savedVideos.length === 0) {
          return (
            <HomeSearchResultContainer bgColor={bgColor}>
              <NoSearchResultContainer>
                <NoSearchResultImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSearchParaHead color={color}>
                  No saved videos found
                </NoSearchParaHead>
                <NoSearchParaHead as="p" color={color1}>
                  You can save your videos while watching them
                </NoSearchParaHead>
              </NoSearchResultContainer>
            </HomeSearchResultContainer>
          )
        }
        return (
          <HomeSearchResultContainer bgColor={bgColor}>
            <TrendingLogoContainer trendingBgColor={trendingBgColor}>
              <IconContainer bgColor={bgColor}>
                <AiFillFireIcon iconcolor={iconColor} />
              </IconContainer>
              <TrendingPara as="h1" color={color}>
                Saved Videos
              </TrendingPara>
            </TrendingLogoContainer>
            <UnOrderVideoContainer>
              {savedVideos.map(eachTrendingVideo => (
                <SavedVideosItem
                  trendingVideoDetails={eachTrendingVideo}
                  key={eachTrendingVideo.id}
                />
              ))}
            </UnOrderVideoContainer>
          </HomeSearchResultContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const bgColor1 = isDarkTheme ? '#0f0f0f' : '#f4f4f4'
          return (
            <Container bgColor={bgColor} data-testid="savedVideos">
              <Navbar />
              <HomeContainer bgColor1={bgColor1} bgColor={bgColor}>
                <Sidebar />
                {this.rendersuccessview()}
              </HomeContainer>
            </Container>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideosRoute
