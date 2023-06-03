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

const TrendingVideoItem = props => {
  const {trendingVideoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    channel,
  } = trendingVideoDetails
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
                      {`${channel.name} * ${viewCount} views * `}
                    </Para>
                    <Para isDarkTheme={isDarkTheme}>{publishedAt}</Para>
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

export default TrendingVideoItem
