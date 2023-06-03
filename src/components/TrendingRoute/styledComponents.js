import styled from 'styled-components'
import {AiFillFire} from 'react-icons/ai'

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
export const TrendingLogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: ${props => props.trendingBgColor};
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 130px;
  }
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${props => props.bgColor};
  margin-left: 20px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    height: 80px;
    width: 80px;
    border-radius: 40px;
    margin-left: 45px;
    margin-right: 20px;
  }
`

export const AiFillFireIcon = styled(AiFillFire)`
  width: 20px;
  height: 20px;
  color: ${props => props.iconcolor};
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`
export const TrendingPara = styled.h1`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
    font-weight: 'bold';
  }
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
export const UnOrderVideoContainer = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
  background-color: transparent;
`
