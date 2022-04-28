import React from 'react'

const Permalink = (props) => {
  return (
    <li><a href={props.linkTo}>{props.text}</a></li>
  )
}

export default Permalink