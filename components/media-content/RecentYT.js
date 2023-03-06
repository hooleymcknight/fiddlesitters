import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch, faYoutube, faBandcamp } from '@fortawesome/free-brands-svg-icons'

const memberIds = {
  'holly': 'UULFY1SXLbBulG7d0wVS8rkibQ',
  'james': 'UULFc3ymWIv4Q20NN35ax6AoJw',
  'jackson': 'UULFrw5LRUU47LbKtPshOkJQ0A',
  'blake': 'UULF5ZO9kVlh-O6oyFK2VitOtA',
}

function RecentYT(props) {
  const channelId = memberIds[props.member]
  
  return (
    <>
    { channelId ? 
      <div className="recent-yt recent-videos">
        <div className="section-tab">
          <FontAwesomeIcon icon={faYoutube} />
          <p>{props.member}</p>
        </div>

        <div className="yt-video-list">
          <iframe src={`https://www.youtube.com/embed?listType=playlist&list=${channelId}`}></iframe>
          <iframe src={`https://www.youtube.com/embed?listType=playlist&list=${channelId}&index=2`}></iframe>
          <iframe src={`https://www.youtube.com/embed?listType=playlist&list=${channelId}&index=3`}></iframe>
          <iframe src={`https://www.youtube.com/embed?listType=playlist&list=${channelId}&index=4`}></iframe>
        </div>
      </div>
      : ''
    }
    </>
  )
}

export default RecentYT