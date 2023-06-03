import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NoSearchResultContainer,
  NoSearchResultImg,
  NoSearchParaHead,
  NoSearchButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const color = isDarkTheme ? '#ffffff' : '#1e293b'
        const color1 = isDarkTheme ? '#616e7c' : '#00306e'
        const failureView = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <NoSearchResultContainer>
            <NoSearchResultImg src={failureView} alt="failure view" />
            <NoSearchParaHead color={color}>
              Oops! Something Went Wrong
            </NoSearchParaHead>
            <NoSearchParaHead as="p" color={color1}>
              We are having some trouble to complete your request. Please try
              again.
            </NoSearchParaHead>
            <NoSearchButton type="button" onClick={onClickRetry}>
              Retry
            </NoSearchButton>
          </NoSearchResultContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
