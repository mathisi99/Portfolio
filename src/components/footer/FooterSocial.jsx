import React from 'react'

const FooterSocial = (props) => {
  return (
    <a href={props.link}>{<props.icon />}</a>
  )
}

export default FooterSocial