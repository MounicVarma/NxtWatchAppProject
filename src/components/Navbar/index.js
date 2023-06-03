import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NavbarBgContainer,
  NavbarNxtWatchLogo,
  NavbarUnOrderedListMobileContainer,
  NavbarUnOrderedListLaptopContainer,
  NavbarListItem,
  NavbarListButton,
  FiSunIcon,
  FaMoonIcon,
  GiHamburgerMenuIcon,
  FiLogOutIcon,
  ModalContainer,
  ModalPara,
  CancelButton,
  PopupButtonContainer,
  ConfirmButton,
  LogoutButton,
  ProfileImg,
  ModalMenuContainer,
  ModalCloseButtonContainer,
  RiCloseLineIcon,
  UnorderedMobileMenuContainer,
  MobileMenuListItems,
  AiFillHomeIcon,
  MobileMenuPara,
  ControlContainer,
  AiFillFireIcon,
  SiYoutubegamingIcon,
  MdPlaylistAddIcon,
  NavLink,
} from './styledComponents'

const Navbar = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTheme, changeActiveTab} = value
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f4f4f4'
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
        const websiteLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const listColor = isDarkTheme ? '#313131' : '#f9f9f9'
        const iconColor = isDarkTheme ? '#ff0000' : '#ff0b37'
        const color = isDarkTheme ? '#ffffff' : '#1e293b'

        const onClickChangeTheme = () => {
          changeTheme()
        }
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
          <NavbarBgContainer bgColor={bgColor}>
            <NavLink to="/">
              <NavbarNxtWatchLogo
                onClick={onClickChangeHomeTab}
                src={websiteLogo}
                alt="website logo"
              />
            </NavLink>
            <NavbarUnOrderedListMobileContainer>
              <NavbarListItem>
                <NavbarListButton
                  type="button"
                  onClick={onClickChangeTheme}
                  data-testid="theme"
                >
                  {isDarkTheme ? (
                    <FiSunIcon textcolor={textColor} />
                  ) : (
                    <FaMoonIcon textcolor={textColor} />
                  )}
                </NavbarListButton>
              </NavbarListItem>
              <NavbarListItem>
                <Popup
                  modal
                  trigger={
                    <NavbarListButton type="button">
                      <GiHamburgerMenuIcon textcolor={textColor} />
                    </NavbarListButton>
                  }
                >
                  {close => (
                    <ModalMenuContainer bgColor={bgColor}>
                      <ModalCloseButtonContainer>
                        <NavbarListButton
                          type="button"
                          data-testid="closeButton"
                          onClick={() => close()}
                        >
                          <RiCloseLineIcon textcolor={textColor} />
                        </NavbarListButton>
                      </ModalCloseButtonContainer>
                      <UnorderedMobileMenuContainer>
                        <NavLink to="/" onClick={() => close()}>
                          <MobileMenuListItems
                            isActive={
                              activeTab === 'HOME' ? {listColor} : 'transparent'
                            }
                            onClick={onClickChangeHomeTab}
                          >
                            <ControlContainer>
                              <AiFillHomeIcon
                                isactive={
                                  activeTab === 'HOME'
                                    ? {iconColor}
                                    : {iconColor: '#909090'}
                                }
                              />
                              <MobileMenuPara
                                isActive={
                                  activeTab === 'HOME'
                                    ? {color}
                                    : {color: '#909090'}
                                }
                              >
                                Home
                              </MobileMenuPara>
                            </ControlContainer>
                          </MobileMenuListItems>
                        </NavLink>
                        <NavLink to="/trending" onClick={() => close()}>
                          <MobileMenuListItems
                            isActive={
                              activeTab === 'TRENDING'
                                ? {listColor}
                                : 'transparent'
                            }
                            onClick={onClickChangeTrendingTab}
                          >
                            <ControlContainer>
                              <AiFillFireIcon
                                isactive={
                                  activeTab === 'TRENDING'
                                    ? {iconColor}
                                    : {iconColor: '#909090'}
                                }
                              />
                              <MobileMenuPara
                                isActive={
                                  activeTab === 'TRENDING'
                                    ? {color}
                                    : {color: '#909090'}
                                }
                              >
                                Trending
                              </MobileMenuPara>
                            </ControlContainer>
                          </MobileMenuListItems>
                        </NavLink>
                        <NavLink to="/gaming" onClick={() => close()}>
                          <MobileMenuListItems
                            isActive={
                              activeTab === 'GAMING'
                                ? {listColor}
                                : 'transparent'
                            }
                            onClick={onClickChangeGamingTab}
                          >
                            <ControlContainer>
                              <SiYoutubegamingIcon
                                isactive={
                                  activeTab === 'GAMING'
                                    ? {iconColor}
                                    : {iconColor: '#909090'}
                                }
                              />
                              <MobileMenuPara
                                isActive={
                                  activeTab === 'GAMING'
                                    ? {color}
                                    : {color: '#909090'}
                                }
                              >
                                Gaming
                              </MobileMenuPara>
                            </ControlContainer>
                          </MobileMenuListItems>
                        </NavLink>
                        <NavLink to="/saved-videos" onClick={() => close()}>
                          <MobileMenuListItems
                            isActive={
                              activeTab === 'SAVED VIDEOS'
                                ? {listColor}
                                : 'transparent'
                            }
                            onClick={onClickChangeSavedVideosTab}
                          >
                            <ControlContainer>
                              <MdPlaylistAddIcon
                                isactive={
                                  activeTab === 'SAVED VIDEOS'
                                    ? {iconColor}
                                    : {iconColor: '#909090'}
                                }
                              />
                              <MobileMenuPara
                                isActive={
                                  activeTab === 'SAVED VIDEOS'
                                    ? {color}
                                    : {color: '#909090'}
                                }
                              >
                                Saved videos
                              </MobileMenuPara>
                            </ControlContainer>
                          </MobileMenuListItems>
                        </NavLink>
                      </UnorderedMobileMenuContainer>
                    </ModalMenuContainer>
                  )}
                </Popup>
              </NavbarListItem>
              <NavbarListItem>
                <Popup
                  modal
                  trigger={
                    <NavbarListButton type="button" data-testid="iconButton">
                      <FiLogOutIcon textcolor={textColor} />
                    </NavbarListButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <ModalContainer bgColor={bgColor}>
                      <ModalPara as="p" textColor={textColor}>
                        Are you sure, you want to logout
                      </ModalPara>
                      <PopupButtonContainer>
                        <CancelButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmButton>
                      </PopupButtonContainer>
                    </ModalContainer>
                  )}
                </Popup>
              </NavbarListItem>
            </NavbarUnOrderedListMobileContainer>
            <NavbarUnOrderedListLaptopContainer>
              <NavbarListItem>
                <NavbarListButton
                  type="button"
                  onClick={onClickChangeTheme}
                  data-testid="theme"
                >
                  {isDarkTheme ? (
                    <FiSunIcon textcolor={textColor} />
                  ) : (
                    <FaMoonIcon textcolor={textColor} />
                  )}
                </NavbarListButton>
              </NavbarListItem>
              <NavbarListItem>
                <NavbarListButton type="button">
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavbarListButton>
              </NavbarListItem>
              <NavbarListItem>
                <Popup
                  modal
                  trigger={
                    <LogoutButton
                      isDarkTheme={isDarkTheme}
                      type="button"
                      data-testid="iconButton"
                    >
                      Logout
                    </LogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <ModalContainer bgColor={bgColor}>
                      <ModalPara as="p" textColor={textColor}>
                        Are you sure, you want to logout
                      </ModalPara>
                      <PopupButtonContainer>
                        <CancelButton
                          type="button"
                          data-testid="closeButton"
                          onClick={() => close()}
                        >
                          Cancel
                        </CancelButton>
                        <ConfirmButton type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmButton>
                      </PopupButtonContainer>
                    </ModalContainer>
                  )}
                </Popup>
              </NavbarListItem>
            </NavbarUnOrderedListLaptopContainer>
          </NavbarBgContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Navbar)
