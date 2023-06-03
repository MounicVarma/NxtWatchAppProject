import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItem = styled.li`
  width: 100%;
  list-style-type: none;
`

export const ChannelImg = styled.img`
  width: 100%;
  object-fit: fill;
`

export const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
  font-family: 'Roboto';
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const Para = styled(Description)`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#616e7c' : '#00306e')};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  width: 45%;
  margin-bottom: 40px;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 576px) {
    width: 30%;
  }
`
