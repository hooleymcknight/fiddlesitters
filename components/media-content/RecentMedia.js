import RecentYT from "./RecentYT"
import RecentTwitch from "./RecentTwitch"
import Bandcamp from "./Bandcamp"

function RecentVideo(props) {
  const videoType = props.type
  
  return (
    <>
    { videoType == 'yt' ? 
      <RecentYT member={props.member} />
      :
      videoType == 'twitch' ?
      <RecentTwitch member={props.member} />
      :
      <Bandcamp member={props.member} />
    }
    </>
  )
}

export default RecentVideo