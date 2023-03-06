import RecentYT from "./RecentYT"
import RecentTwitch from "./RecentTwitch"

function RecentVideo(props) {
  const videoType = props.type
  
  return (
    <>
    { videoType == 'yt' ? 
      <RecentYT member={props.member} />
      :
      <RecentTwitch member={props.member} />
    }
    </>
  )
}

export default RecentVideo