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

const Sidebar = props => {
  const {match} = props
  const {path} = match
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeActiveTab} = value
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f4f4f4'
        const listColor = isDarkTheme ? '#313131' : '#f4f4f4'
        const iconColor = isDarkTheme ? '#ff0000' : '#ff0b37'
        const color = isDarkTheme ? '#ffffff' : '#1e293b'
        return (
          <SidebarCard bgColor={bgColor}>
            <UnorderedLaptopMenuContainer>
              <NavLink to="/">
                <LaptopMenuListItems
                  isActive={path === '/' ? {listColor} : 'transparent'}
                >
                  <ControlLaptopContainer>
                    <AiFillHomeIcon
                      isactive={
                        path === '/' ? {iconColor} : {iconColor: '#909090'}
                      }
                    />
                    <LaptopMenuPara
                      isActive={path === '/' ? {color} : {color: '#909090'}}
                    >
                      Home
                    </LaptopMenuPara>
                  </ControlLaptopContainer>
                </LaptopMenuListItems>
              </NavLink>
              <NavLink to="/trending">
                <LaptopMenuListItems
                  isActive={path === '/trending' ? {listColor} : 'transparent'}
                >
                  <ControlLaptopContainer>
                    <AiFillFireIcon
                      isactive={
                        path === '/trending'
                          ? {iconColor}
                          : {iconColor: '#909090'}
                      }
                    />
                    <LaptopMenuPara
                      isActive={
                        path === '/trending' ? {color} : {color: '#909090'}
                      }
                    >
                      Trending
                    </LaptopMenuPara>
                  </ControlLaptopContainer>
                </LaptopMenuListItems>
              </NavLink>
              <NavLink to="/gaming">
                <LaptopMenuListItems
                  isActive={path === '/gaming' ? {listColor} : 'transparent'}
                >
                  <ControlLaptopContainer>
                    <SiYoutubegamingIcon
                      isactive={
                        path === '/gaming'
                          ? {iconColor}
                          : {iconColor: '#909090'}
                      }
                    />
                    <LaptopMenuPara
                      isActive={
                        path === '/gaming' ? {color} : {color: '#909090'}
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
                    path === '/saved-videos' ? {listColor} : 'transparent'
                  }
                >
                  <ControlLaptopContainer>
                    <MdPlaylistAddIcon
                      isactive={
                        path === '/saved-videos'
                          ? {iconColor}
                          : {iconColor: '#909090'}
                      }
                    />
                    <LaptopMenuPara
                      isActive={
                        path === '/saved-videos' ? {color} : {color: '#909090'}
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
}

export default withRouter(Sidebar)
