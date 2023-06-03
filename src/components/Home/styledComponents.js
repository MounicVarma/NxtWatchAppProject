import styled from 'styled-components'
import {RiCloseLine} from 'react-icons/ri'

export const Container = styled.div`
  background-color: ${props => props.bgColor};
`

export const HomeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  background-color: ${props => props.bgColor};
  min-height: 90vh;
  border-top: 2px solid ${props => props.bgColor1};
`
export const HomeSearchResultContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  border: none;
  height: 90vh;
  background-color: transparent;
`
export const PremiumBannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  object-fit: fill;
  height: 250px;
  border-top: 1px solid #ffffff;
  padding: 30px;
`
export const PremiumBannerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  max-width: 330px;
`

export const NxtWatchLightLogo1 = styled.img`
  display: ${props => (props.isDarkTheme ? 'none' : '')};
  width: 120px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 40px;
  }
`
export const PremiumBannerPara = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  font-family: 'Roboto';
  color: #1e293b;
`
export const PremiumBannerGetItNowButton = styled.button`
  padding: 12px 20px 12px 20px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  border: 1px solid #475569;
  color: #475569;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const PremiumBannerCloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  align-self: flex-start;
`

export const RiCloseLineIcon = styled(RiCloseLine)`
  width: 28px;
  height: 28px;
  color: #000000;
`
export const HomeSearchResultCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: none;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 92%;
  border-radius: 4px;
  border: 1px solid #909090;
  height: 40px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: transparent;
  @media screen and (min-width: 576px) {
    align-self: flex-start;
    margin-left: 20px;
    width: 350px;
  }
  @media screen and (min-width: 768px) {
    align-self: flex-start;
    margin-left: 20px;
    width: 500px;
  }
`
export const SearchInput = styled.input`
  padding: 8px 16px 8px 16px;
  line-height: 16px;
  width: 82%;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  outline: none;
  background-color: transparent;
  border: none;
  color: ${props => props.color};
`
export const SearchIconButton = styled.button`
  width: 18%;
  height: 100%;
  border: none;
  cursor: pointer;
  outline: none;
  border-left: 1px solid #909090;
  background-color: ${props => props.bgColor};
`
export const UnOrderVideoContainer = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
  background-color: transparent;
  margin-top: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const NoSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 25px;
`
export const NoSearchResultImg = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 45%;
  }
`
export const NoSearchParaHead = styled.h1`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-top: 10px;
  text-align: center;
`
export const NoSearchButton = styled.button`
  padding: 15px 30px 15px 30px;
  border-radius: 4px;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
`
