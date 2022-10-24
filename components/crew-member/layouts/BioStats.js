import BioSection from '../BioSection'

const BioStats = (props) => {
  const bio = props.data

  return(
    <div className="bio-stats">
      <h2 className="handle">{bio.handle}</h2>
      <img src={bio.main_image} alt={bio.background.name} />
      <BioSection title="Personal information" data={bio.background} />

      {bio.bandcamp ? <BioSection title="Bandcamp information" data={bio.bandcamp} /> : ''}
      {bio.twitch ? <BioSection title="Twitch information" data={bio.twitch} /> : ''}
      {bio.youtube ? <BioSection title="YouTube information" data={bio.youtube} /> : ''}

      <p className="last-updated">last updated: {bio.last_updated}</p>
    </div>
  )
}

export default BioStats