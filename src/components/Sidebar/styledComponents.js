import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

export const SidebarCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 220px;
  height: 90vh;
  flex-shrink: 0;
  background-color: ${props => props.bgColor};
  position: sticky;
  @media screen and (max-width: 767px) {
    display: none;
  }
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

export const UnorderedLaptopMenuContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
`
export const LaptopMenuListItems = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 45px;
  width: 100%;
  list-style-type: none;
  border: none;
  background-color: ${props => props.isActive.listColor};
`
export const ControlLaptopContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 135px;
  height: 45px;
  background-color: transparent;
  margin-left: 25px;
`

export const LaptopMenuPara = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.isActive.color};
`
export const NavLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`
export const ContactUsContainer = styled.div`
  width: 100%;
  padding-left: 15px;
  margin-bottom: 30px;
  background-color: transparent;
  border: none;
`
export const ContactUsHeading = styled.h1`
  font-size: 18px;
  font-weight: 400;
  line-height: 2;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const ContactUsPara = styled(ContactUsHeading)`
  font-size: 15px;
`
export const ContactUsIconsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
export const ContactUsImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`
