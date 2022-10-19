import Link from 'next/link'

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
        <a onClick={props.onClick}>{props.name}</a>
      </Link>
      {props.dropdown}
    </li>
  )
}

export default NavItem
