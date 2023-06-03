import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
`
export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 360px;
  padding: 30px 15px 30px 15px;
  border-radius: 6px;
  border: none;
  background-color: ${props => props.formBgColor};
  box-shadow: ${props => (props.isDarkTheme ? '' : '0px 2px 16px #bfbfbf')};
  @media screen and (min-width: 768px) {
    padding: 40px;
    max-width: 420px;
  }
`
export const NxtWatchDarkLogo = styled.img`
  display: ${props => (props.isDarkTheme ? '' : 'none')};
  width: 120px;
  height: 30px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 40px;
    margin-bottom: 40px;
  }
`
export const NxtWatchLightLogo = styled.img`
  display: ${props => (props.isDarkTheme ? 'none' : '')};
  width: 120px;
  height: 30px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 40px;
    margin-bottom: 40px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 10px;
  }
`
export const Label = styled.label`
  font-size: 14px;
  font-weight: 'bold';
  font-family: 'Roboto';
  color: ${props => props.textColor};
  line-height: 16px;
  margin-bottom: 8px;
`
export const InputUsername = styled.input`
  background-color: transparent;
  padding: 8px 16px 8px 16px;
  height: 40px;
  border: 1px solid #d7dfe9;
  font-size: 15px;
  font-weight: 'bold';
  font-family: 'Roboto';
  color: ${props => props.textColor};
  line-height: 16px;
  border-radius: 4px;
  outline: none;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const ShowPasswordCheckbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`
export const ShowPasswordCheckboxLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.textColor};
  line-height: 16px;
`
export const LoginButton = styled.button`
  align-self: stretch;
  padding: 15px 25px 15px 25px;
  border: none;
  font-size: 15px;
  font-weight: 'bold';
  font-family: 'Roboto';
  color: #ffffff;
  line-height: 16px;
  background-color: #3b82f6;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`
export const ErrorMsg = styled.p`
  font-size: 15px;
  font-weight: 'bold';
  font-family: 'Roboto';
  color: ${props => props.errorTextColor};
  line-height: 16px;
  align-self: flex-start;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
`
