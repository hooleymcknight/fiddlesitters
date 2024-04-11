import Link from 'next/link'
import data from '../../data/member_data.json'

const members = Object.keys(data).map(x => `${x.charAt(0).toUpperCase()}${x.slice(1, x.length)}`)

const CrewDropdown = (props) => {
  return (
    <ul className="dropdown" id="nav-crew-list" aria-hidden="true">
      {members.map(member => 
        <li key={member} role="menuitem"><Link href={`/the-crew/${member.toLowerCase()}`}><a onClick={props.onClick}>{member}</a></Link></li>
      )}
    </ul>
  )
}

export default CrewDropdown