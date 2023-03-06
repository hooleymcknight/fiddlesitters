import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch, faYoutube, faBandcamp } from '@fortawesome/free-brands-svg-icons'

const channelInfo = {
  'holly': {
    channel: 'hooleymcknight',
    collection: 'xQurXQh5SRfD0A'
  },
  'matt': {
    channel: 'airchallenged',
    collection: 'qCKH4he8SRcLqQ'
  },
  'kat': {
    channel: 'degradedriver',
    collection: '7t-HHAi8SRefnA'
  },
  'james': {
    channel: 'arcade201',
    collection: 'jzj7gLy8SRf4gQ'
  },
  'jackson': {
    channel: 'jaxman0410',
    collection: 'NwGjX7m8SRce4w'
  },
  // 'blake': ''
}

function RecentTwitch(props) {
  const channelId = channelInfo[props.member]?.channel
  const collectionId = channelInfo[props.member]?.collection
  
  return (
    <>
    { channelId && channelInfo ?
      <div className="recent-twitch recent-videos">
        <div className="section-tab">
          <FontAwesomeIcon icon={faTwitch} />
          <p>{props.member}</p>
        </div>

        <div className="twitch-video-list">
          <iframe src={`https://player.twitch.tv/?channel=${channelId}&parent=fiddlesitters.com&parent=localhost&parent=fiddlesitters.com&autoplay=false`} allowFullScreen></iframe>
          <iframe src={`https://player.twitch.tv/?collection=${collectionId}&parent=fiddlesitters.com&parent=localhost&parent=fiddlesitters.com&autoplay=false`} allowFullScreen></iframe>
        </div>
      </div>
      : ''
    }
    </>
  )
}

export default RecentTwitch