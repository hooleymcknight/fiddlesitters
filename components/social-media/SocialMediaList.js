import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faTwitch, faYoutube, faBandcamp } from '@fortawesome/free-brands-svg-icons'

const medias = {
  "Instagram": {
    "domain": "https://instagram.com/",
    "icon": faInstagram,
  },
  "Twitch": {
    "domain": "https://twitch.tv/",
    "icon": faTwitch,
  },
  "Twitter": {
    "domain": "https://twitter.com/",
    "icon": faTwitter,
  },
  "YouTube": {
    "domain": "https://youtube.com/",
    "icon": faYoutube
  },
  "Bandcamp": {
    "icon": faBandcamp,
  },
}

const SocialMediaList = (props) => {
  let urls = []

  Object.keys(medias).forEach(key => {
    if (props.data[key.toLowerCase()]) {
      const href = key !== 'Bandcamp' ? `${medias[key.replace('2nd ', '')]["domain"]}${props.data[key.toLowerCase()]}` : `https://${props.data[key.toLowerCase()]}.bandcamp.com/music`

      urls.push({
        name: key,
        href: href,
        faClass: medias[key]["icon"]
      })
    }
  })

  return (
    <div className="social-media-listing">
      <h2>{props.crewmate}</h2>
      {urls.map((url) =>
        <a key={url.name} href={url.href} target="_blank" alt={url.name} rel="noreferrer"><FontAwesomeIcon icon={url.faClass} /><span>{url.name}</span></a>
      )}
    </div>
  )
}

export default SocialMediaList