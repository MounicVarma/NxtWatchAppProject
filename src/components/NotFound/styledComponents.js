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
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  overflow-y: auto;
  border: none;
  height: 90vh;
  background-color: transparent;
`

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  min-height: 92vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const NotFoundVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NotFoundVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NotFoundVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`
