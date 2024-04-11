import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch, faYoutube, faBandcamp } from '@fortawesome/free-brands-svg-icons'

function Bandcamp(props) {
  
  return (
    <>
      <div className="recent-bandcamp recent-videos">
        <div className="section-tab">
          <FontAwesomeIcon icon={faBandcamp} />
          <p>{props.member}</p>
        </div>

        <div className="bandcamp-list">
          <iframe style={{border: 0, width: 400, height: 210}} src="https://bandcamp.com/EmbeddedPlayer/album=4008903993/size=large/bgcol=333333/linkcol=e99708/artwork=small/transparent=true/" seamless><a href="https://asiwalkintotheabyssblinded.bandcamp.com/album/into-the-deep">Into the Deep by As I Walk Into The Abyss Blinded</a></iframe>
          <iframe style={{border: 0, width: 400, height: 210}} src="https://bandcamp.com/EmbeddedPlayer/album=880966905/size=large/bgcol=333333/linkcol=e99708/artwork=small/transparent=true/" seamless><a href="https://asiwalkintotheabyssblinded.bandcamp.com/album/what-we-left-behind">What We Left Behind by As I Walk Into The Abyss Blinded</a></iframe>
          <iframe style={{border: 0, width: 400, height: 210}} src="https://bandcamp.com/EmbeddedPlayer/track=3555245287/size=large/bgcol=333333/linkcol=e99708/artwork=small/transparent=true/" seamless><a href="https://asiwalkintotheabyssblinded.bandcamp.com/track/by-the-light-of-a-dim-lamp">By the Light of a Dim Lamp by As I Walk Into The Abyss Blinded</a></iframe>
          <iframe style={{border: 0, width: 400, height: 210}} src="https://bandcamp.com/EmbeddedPlayer/album=2226276333/size=large/bgcol=333333/linkcol=e99708/artwork=small/transparent=true/" seamless><a href="https://asiwalkintotheabyssblinded.bandcamp.com/album/volume-ii">Volume II by As I Walk Into The Abyss Blinded</a></iframe>
        </div>
      </div>
    </>
  )
}

export default Bandcamp