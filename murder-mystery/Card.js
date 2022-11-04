/* eslint-disable @next/next/no-img-element */
const CharacterCard = ({ page }) => {
  const name = sessionStorage.getItem('character')
  const role = sessionStorage.getItem('role')
  const src = sessionStorage.getItem('src')
  const clue = sessionStorage.getItem('clue')

  return (
    <div className="character-card">
      <img src={src} alt={name} />
      <p className="name">{name}</p>
      <div className="info">
        {role ? <p className="role">{role}</p> : ''}
        {clue ? <p className="clue">{clue}</p> : ''}
      </div>
    </div>
  )
}

export default CharacterCard