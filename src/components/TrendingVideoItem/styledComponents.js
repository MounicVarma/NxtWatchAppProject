import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItem = styled.li`
  width: 100%;
  list-style-type: none;
  @media screen and (min-width: 576px) {
    display: flex;
  }
  @media screen and (min-width: 576px) {
    display: flex;
  }
`
export const ChannelImg = styled.img`
  width: 100%;
  object-fit: fill;
  @media screen and (min-width: 576px) {
    width: 50%;
    margin-right: 20px;
  }
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
    display: none;
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
  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 'bold';
  }
`
export const Para = styled(Description)`
  font-size: 12px;
  color: ${props => (props.isDarkTheme ? '#616e7c' : '#00306e')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const NavLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 576px) {
    margin-bottom: 50px;
    margin-left: 20px;
    margin-right: 20px;
  }
  @media screen and (min-width: 576px) {
    margin-top: 30px;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-right: 40px;
  }
`
