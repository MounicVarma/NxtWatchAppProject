import {withRouter} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SidebarCard,
  UnorderedLaptopMenuContainer,
  LaptopMenuListItems,
  AiFillHomeIcon,
  LaptopMenuPara,
  ControlLaptopContainer,
  AiFillFireIcon,
  SiYoutubegamingIcon,
  MdPlaylistAddIcon,
  NavLink,
  ContactUsContainer,
  ContactUsHeading,
  ContactUsPara,
  ContactUsIconsContainer,
  ContactUsImg,
} from './styledComponents'

const Sidebar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, changeActiveTab} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f4f4f4'
      const listColor = isDarkTheme ? '#313131' : '#f4f4f4'
      const iconColor = isDarkTheme ? '#ff0000' : '#ff0b37'
      const color = isDarkTheme ? '#ffffff' : '#1e293b'
      const onClickChangeHomeTab = () => {
        changeActiveTab('HOME')
      }
      const onClickChangeTrendingTab = () => {
        changeActiveTab('TRENDING')
      }
      const onClickChangeGamingTab = () => {
        changeActiveTab('GAMING')
      }
      const onClickChangeSavedVideosTab = () => {
        changeActiveTab('SAVED VIDEOS')
      }
      return (
        <SidebarCard bgColor={bgColor}>
          <UnorderedLaptopMenuContainer>
            <NavLink to="/">
              <LaptopMenuListItems
                isActive={activeTab === 'HOME' ? {listColor} : 'transparent'}
                onClick={onClickChangeHomeTab}
              >
                <ControlLaptopContainer>
                  <AiFillHomeIcon
                    isactive={
                      activeTab === 'HOME'
                        ? {iconColor}
                        : {iconColor: '#909090'}
                    }
                  />
                  <LaptopMenuPara
                    isActive={
                      activeTab === 'HOME' ? {color} : {color: '#909090'}
                    }
                  >
                    Home
                  </LaptopMenuPara>
                </ControlLaptopContainer>
              </LaptopMenuListItems>
            </NavLink>
            <NavLink to="/trending">
              <LaptopMenuListItems
                isActive={
                  activeTab === 'TRENDING' ? {listColor} : 'transparent'
                }
                onClick={onClickChangeTrendingTab}
              >
                <ControlLaptopContainer>
                  <AiFillFireIcon
                    isactive={
                      activeTab === 'TRENDING'
                        ? {iconColor}
                        : {iconColor: '#909090'}
                    }
                  />
                  <LaptopMenuPara
                    isActive={
                      activeTab === 'TRENDING' ? {color} : {color: '#909090'}
                    }
                  >
                    Trending
                  </LaptopMenuPara>
                </ControlLaptopContainer>
              </LaptopMenuListItems>
            </NavLink>
            <NavLink to="/gaming">
              <LaptopMenuListItems
                isActive={activeTab === 'GAMING' ? {listColor} : 'transparent'}
                onClick={onClickChangeGamingTab}
              >
                <ControlLaptopContainer>
                  <SiYoutubegamingIcon
                    isactive={
                      activeTab === 'GAMING'
                        ? {iconColor}
                        : {iconColor: '#909090'}
                    }
                  />
                  <LaptopMenuPara
                    isActive={
                      activeTab === 'GAMING' ? {color} : {color: '#909090'}
                    }
                  >
                    Gaming
                  </LaptopMenuPara>
                </ControlLaptopContainer>
              </LaptopMenuListItems>
            </NavLink>
            <NavLink to="/saved-videos">
              <LaptopMenuListItems
                isActive={
                  activeTab === 'SAVED VIDEOS' ? {listColor} : 'transparent'
                }
                onClick={onClickChangeSavedVideosTab}
              >
                <ControlLaptopContainer>
                  <MdPlaylistAddIcon
                    isactive={
                      activeTab === 'SAVED VIDEOS'
                        ? {iconColor}
                        : {iconColor: '#909090'}
                    }
                  />
                  <LaptopMenuPara
                    isActive={
                      activeTab === 'SAVED VIDEOS'
                        ? {color}
                        : {color: '#909090'}
                    }
                  >
                    Saved videos
                  </LaptopMenuPara>
                </ControlLaptopContainer>
              </LaptopMenuListItems>
            </NavLink>
          </UnorderedLaptopMenuContainer>
          <ContactUsContainer>
            <ContactUsHeading as="p" color={color}>
              CONTACT US
            </ContactUsHeading>
            <ContactUsIconsContainer>
              <ContactUsImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <ContactUsImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ContactUsImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactUsIconsContainer>
            <ContactUsPara as="p" color={color}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsPara>
          </ContactUsContainer>
        </SidebarCard>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Sidebar)
