import styled from 'styled-components'

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
