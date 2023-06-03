import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NotFoundVideosImage,
  NotFoundVideosHeading,
  NotFoundVideosNote,
  Container,
  HomeContainer,
  HomeSearchResultContainer,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const bgColor1 = isDarkTheme ? '#0f0f0f' : '#f4f4f4'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      const notFoundImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <Container bgColor={bgColor}>
          <Navbar />
          <HomeContainer bgColor1={bgColor1} bgColor={bgColor}>
            <Sidebar />
            <HomeSearchResultContainer>
              <NotFoundVideosImage src={notFoundImageUrl} alt="not found" />
              <NotFoundVideosHeading headingColor={headingColor}>
                Page Not Found
              </NotFoundVideosHeading>
              <NotFoundVideosNote noteColor={noteColor}>
                We are sorry, the page you requested could not be found.
              </NotFoundVideosNote>
            </HomeSearchResultContainer>
          </HomeContainer>
        </Container>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
