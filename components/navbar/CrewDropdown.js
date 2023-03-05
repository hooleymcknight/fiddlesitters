import Link from 'next/link'

const members = [
  'Jackson', 'James', 'Blake', 'Holly', 'Matt', 'Kat', 'Riley', 'Tyler', 'Selena'
]

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