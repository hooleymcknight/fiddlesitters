import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

const NavItem = (props) => {
  let classes = 'nav-item'
  if (props.className) {
    classes += ` ${props.className}`
  }

  if (props.dropdown) {
    classes += ' has-dropdown'
  }

  return (
    <li role="menuitem" className={classes} aria-controls={props.dropdown ? props.ariaControls : false} aria-expanded={props.dropdown ? 'false' : false}>
      <Link href={props.link}>
        {!props.icon ? <a onClick={props.onClick}>{props.name}</a> : <a target="_blank" alt={props.name}> <FontAwesomeIcon icon={faDiscord} /> </a>}
      </Link>
      {props.dropdown}
    </li>
  )
}

export default NavItem
