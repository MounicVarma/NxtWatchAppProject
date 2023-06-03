import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiCloseLine} from 'react-icons/ri'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

export const NavbarBgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor};
  border-bottom: 5px solid ${props => props.bgColor};
  height: 60px;
  width: 100%;
  border: none;
  @media screen and (min-width: 768px) {
    height: 90px;
    padding: 12px 40px 12px 40px;
  }
`

export const NavbarNxtWatchLogo = styled.img`
  width: 95px;
  height: 25px;
  margin-left: 12px;
  @media screen and (min-width: 768px) {
    width: 130px;
    height: 35px;
  }
`
export const NavbarUnOrderedListMobileContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding-left: 0px;
  width: 110px;
  height: 60px;
  margin-right: 12px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavbarListItem = styled.li`
  list-style-type: none;
`
export const NavbarListButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const FiSunIcon = styled(FiSun)`
  width: 22px;
  height: 22px;
  color: ${props => props.textcolor};
  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`
export const FaMoonIcon = styled(FaMoon)`
  width: 22px;
  height: 22px;
  color: ${props => props.textcolor};
  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`
export const GiHamburgerMenuIcon = styled(GiHamburgerMenu)`
  width: 22px;
  height: 22px;
  color: ${props => props.textcolor};
`
export const FiLogOutIcon = styled(FiLogOut)`
  width: 22px;
  height: 22px;
  color: ${props => props.textcolor};
`
export const RiCloseLineIcon = styled(RiCloseLine)`
  width: 28px;
  height: 28px;
  color: ${props => props.textcolor};
`
export const AiFillHomeIcon = styled(AiFillHome)`
  width: 18px;
  height: 18px;
  margin-right: 15px;
  color: ${props => props.isactive.iconColor};
`
export const AiFillFireIcon = styled(AiFillFire)`
  width: 18px;
  height: 18px;
  margin-right: 15px;
  color: ${props => props.isactive.iconColor};
`
export const SiYoutubegamingIcon = styled(SiYoutubegaming)`
  width: 18px;
  height: 18px;
  margin-right: 15px;
  color: ${props => props.isactive.iconColor};
`
export const MdPlaylistAddIcon = styled(MdPlaylistAdd)`
  width: 18px;
  height: 18px;
  margin-right: 15px;
  color: ${props => props.isactive.iconColor};
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
  width: 90%;
  max-width: 400px;
  height: 200px;
  margin: auto;
  padding: 20px;
`
export const ModalPara = styled.p`
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
  color: ${props => props.textColor};
`
export const PopupButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`

export const CancelButton = styled.button`
  border: 1px solid #64748b;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  padding: 15px 20px 15px 20px;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  border-radius: 3px;
  color: #64748b;
`
export const ConfirmButton = styled(CancelButton)`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
`
export const NavbarUnOrderedListLaptopContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding-left: 0px;
  width: 290px;
  height: 90px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutButton = styled(CancelButton)`
  border: 1px solid ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
  padding: 5px 18px 5px 18px;
  height: 35px;
`
export const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
`
export const ModalMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  flex-grow: 1;
  background-color: ${props => props.bgColor};
`
export const ModalCloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 86%;
  margin-top: 35px;
`
export const UnorderedMobileMenuContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
  margin-top: auto;
  margin-bottom: auto;
`
export const MobileMenuListItems = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 100%;
  list-style-type: none;
  border: none;
  background-color: ${props => props.isActive.listColor};
`
export const ControlContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 135px;
  height: 45px;
  background-color: transparent;
`

export const MobileMenuPara = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.isActive.color};
`
export const NavLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`
