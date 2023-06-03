import styled from 'styled-components'

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
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  overflow-y: auto;
  border: none;
  height: 90vh;
  background-color: transparent;
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
export const VideoContainer = styled.div`
  width: 100%;
  height: 320px;
  @media screen and (min-width: 768px) {
    min-height: 500px;
  }
`
export const DescriptionContainer = styled.div`
  padding: 25px 10px 25px 10px;
  width: 100%;
`
export const VideoDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.color};
  line-height: 1.5;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`
export const DescriptionCard = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const VideoPara = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.color};
  line-height: 1.5;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  @media screen and (min-width: 576px) {
    margin-right: 20px;
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
`
export const IconPara = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-left: 6px;
  color: ${props => props.color};
`
export const Separator = styled.hr`
  border: 1px solid ${props => props.color};
`
export const ChannelLogoContainer = styled.div`
  display: flex;
  margin-top: 30px;
`
export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
`
export const SubPara = styled.p`
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 0px;
  color: ${props => props.color};
`
export const SubHead = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.color};
  line-height: 1.5;
  margin-top: 0px;
`
export const SubDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.color};
  line-height: 1.5;
  margin-top: 20px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 62px;
  }
`
