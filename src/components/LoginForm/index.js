import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  BgContainer,
  LoginContainer,
  NxtWatchDarkLogo,
  NxtWatchLightLogo,
  InputContainer,
  Label,
  InputUsername,
  ShowPasswordContainer,
  ShowPasswordCheckbox,
  ShowPasswordCheckboxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
    showPassword: false,
  }

  changeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  changePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  changeShowPassword = () => {
    this.setState(pervState => ({
      showPassword: !pervState.showPassword,
    }))
  }

  submitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    const {history} = this.props
    history.replace('/')
  }

  submitFailed = errorMsg => {
    this.setState({
      errorMsg,
      showError: true,
    })
  }

  submitLoginForm = async event => {
    const {username, password} = this.state
    const userDetails = {username, password}
    event.preventDefault()
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.submitFailed(data.error_msg)
    }
  }

  renderUsernameField = textColor => {
    const {username} = this.state
    return (
      <>
        <Label htmlFor="username" textColor={textColor}>
          USERNAME
        </Label>
        <InputUsername
          textColor={textColor}
          type="text"
          id="username"
          value={username}
          onChange={this.changeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordField = (textColor, textColorShowPassword) => {
    const {password, showPassword} = this.state
    return (
      <>
        <Label htmlFor="password" textColor={textColor}>
          PASSWORD
        </Label>
        <InputUsername
          textColor={textColor}
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={this.changePassword}
          placeholder="Password"
        />
        <ShowPasswordContainer>
          <ShowPasswordCheckbox
            type="checkbox"
            id="checkbox"
            onChange={this.changeShowPassword}
            checked={showPassword}
          />
          <ShowPasswordCheckboxLabel
            htmlFor="checkbox"
            textColor={textColorShowPassword}
          >
            Show Password
          </ShowPasswordCheckboxLabel>
        </ShowPasswordContainer>
      </>
    )
  }

  render() {
    const {showError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#475569'
          const formBgColor = isDarkTheme ? '#000000' : '#ffffff'
          const textColorShowPassword = isDarkTheme ? '#f1f5f9' : '#181818'
          const errorTextColor = isDarkTheme ? '#ff0000' : '#ff0b37'
          return (
            <BgContainer bgColor={bgColor}>
              <LoginContainer
                isDarkTheme={isDarkTheme}
                formBgColor={formBgColor}
                onSubmit={this.submitLoginForm}
              >
                <NxtWatchDarkLogo
                  isDarkTheme={isDarkTheme}
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
                <NxtWatchLightLogo
                  isDarkTheme={isDarkTheme}
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
                <InputContainer>
                  {this.renderUsernameField(textColor)}
                </InputContainer>
                <InputContainer>
                  {this.renderPasswordField(textColor, textColorShowPassword)}
                </InputContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showError && (
                  <ErrorMsg errorTextColor={errorTextColor}>
                    *{errorMsg}
                  </ErrorMsg>
                )}
              </LoginContainer>
            </BgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
