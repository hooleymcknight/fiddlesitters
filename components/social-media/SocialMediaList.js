import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faTwitch, faYoutube, faBandcamp } from '@fortawesome/free-brands-svg-icons'

const medias = {
  "instagram": {
    "domain": "https://instagram.com/",
    "icon": faInstagram,
  },
  "twitch": {
    "domain": "https://twitch.tv/",
    "icon": faTwitch,
  },
  "twitter": {
    "domain": "https://twitter.com/",
    "icon": faTwitter,
  },
  "youtube": {
    "domain": "https://youtube.com/",
    "icon": faYoutube
  },
  "bandcamp": {
    "domain": "bandcamp",
    "icon": faBandcamp,
  },
};

const SocialMediaList = (props) => {
  let urls = [];
  const socialMedia = props.data['social_media'];

  Object.keys(socialMedia).forEach(platform => {
    if (!medias[platform]) return;
    const href = platform !== 'bandcamp' ? `${medias[platform]['domain']}${socialMedia[platform]}` : `https://${socialMedia.bandcamp}.bandcamp.com/music`;

    urls.push({
      name: platform,
      href: href,
      faClass: medias[platform]["icon"]
    });
  });

  return (
    <>
      { Object.keys(socialMedia).length === 0
        ?
        <></>
        :
        <div className="social-media-listing">
          <h2>{props.crewmate}</h2>
          {urls.map((url) =>
            <a key={url.name} href={url.href} target="_blank" alt={url.name} rel="noreferrer"><FontAwesomeIcon icon={url.faClass} /></a>
          )}
        </div>
      }
    </>
  );
}

export default SocialMediaList;