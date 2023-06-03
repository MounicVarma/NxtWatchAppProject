import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoListItem,
  ChannelImg,
  Description,
  Para,
  NavLink,
} from './styledComponents'

const GameVideoItem = props => {
  const {gameDetails} = props
  const {id, title, thumbnailUrl, viewCount} = gameDetails
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, changeActiveTab} = value
        const color = isDarkTheme ? '#ffffff' : '#1e293b'
        const onClickChange = () => {
          changeActiveTab('')
        }
        return (
          <NavLink to={`/videos/${id}`} onClick={onClickChange}>
            <VideoListItem>
              <ChannelImg src={thumbnailUrl} alt="video thumbnail" />
              <Description color={color}>{title}</Description>
              <Para isDarkTheme={isDarkTheme}>
                {viewCount} Watching Worldwide
              </Para>
            </VideoListItem>
          </NavLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GameVideoItem
