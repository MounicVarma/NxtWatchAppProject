import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoListItem,
  ChannelImg,
  VideoDescriptionAndLogoContainer,
  ChannelLogo,
  DescriptionContainer,
  DescriptionCard,
  Description,
  Para,
  NavLink,
} from './styledComponents'

const SearchVideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    channel,
  } = videoDetails
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, changeActiveTab} = value
        const color = isDarkTheme ? '#ffffff' : '#1e293b'
        const publishedDate = formatDistanceToNow(new Date(publishedAt))
        const onClickChange = () => {
          changeActiveTab('')
        }
        return (
          <NavLink to={`/videos/${id}`} onClick={onClickChange}>
            <VideoListItem>
              <ChannelImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoDescriptionAndLogoContainer>
                <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
                <DescriptionContainer>
                  <Description color={color}>{title}</Description>
                  <DescriptionCard>
                    <Para isDarkTheme={isDarkTheme}>
                      {channel.name} * {viewCount} views * {publishedAt}
                    </Para>
                  </DescriptionCard>
                </DescriptionContainer>
              </VideoDescriptionAndLogoContainer>
            </VideoListItem>
          </NavLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SearchVideoItem
