import Link from 'next/link'

const CrewDropdown = (props) => {
  return (
    <ul className="dropdown" id="nav-crew-list" aria-hidden="true">
      <li role="menuitem"><Link href="/the-crew/jackson"><a onClick={props.onClick}>Jackson</a></Link></li>
      <li role="menuitem"><Link href="/the-crew/james"><a onClick={props.onClick}>James</a></Link></li>
      <li role="menuitem"><Link href="/the-crew/blake"><a onClick={props.onClick}>Blake</a></Link></li>
      <li role="menuitem"><Link href="/the-crew/holly"><a onClick={props.onClick}>Holly</a></Link></li>
      <li role="menuitem"><Link href="/the-crew/matt"><a onClick={props.onClick}>Matt</a></Link></li>
      <li role="menuitem"><Link href="/the-crew/kat"><a onClick={props.onClick}>Kat</a></Link></li>
      <li role="menuitem"><Link href="/the-crew/riley"><a onClick={props.onClick}>Riley</a></Link></li>
      <li role="menuitem"><Link href="/the-crew/cole"><a onClick={props.onClick}>Cole</a></Link></li>
    </ul>
  )
}

export default CrewDropdown