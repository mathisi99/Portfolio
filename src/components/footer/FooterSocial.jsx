import React from 'react'

const FooterSocial = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">{<props.icon />}</a>
  )
}

export default FooterSocial