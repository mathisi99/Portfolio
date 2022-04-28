import React from 'react'

const NavElement = (props) => {
  return (
    <a 
        id={props.id}
        href={props.href} 
        onClick={props.handleNavClick} 
        className={props.navPosition === props.href ? 'active' : ''}>{<props.iconComponent />}</a>
  )
}

export default NavElement