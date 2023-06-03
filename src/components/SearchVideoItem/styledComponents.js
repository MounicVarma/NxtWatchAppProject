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
export const VideoDescriptionAndLogoContainer = styled.div`
  display: flex;
  padding: 15px;
  background-color: transparent;
  border: none;
  @media screen and (min-width: 576px) {
    padding-left: 0px;
    padding-top: 15px;
  }
`
export const ChannelLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    width: 40px;
    height: 40px;
    margin-right: 14px;
  }
`
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
`
export const DescriptionCard = styled(DescriptionContainer)`
  flex-direction: row;
  margin-top: 0px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-top: 0px;
  line-height: 1.5;
`
export const Para = styled(Description)`
  font-size: 12px;
  color: ${props => (props.isDarkTheme ? '#616e7c' : '#00306e')};
`
export const NavLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 576px) {
    width: 50%;
    padding: 10px;
  }
  @media screen and (min-width: 768px) {
    width: 33%;
  }
`
