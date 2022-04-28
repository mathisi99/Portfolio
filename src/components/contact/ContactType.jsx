import React from 'react'

const ContactType = (props) => {
  return (
    <div className='contact__option'>
        {<props.icon className="contact__option-icon" />}
        <h4>{props.type}</h4>
        <h5>{props.link}</h5>
        <a href={props.sendto} target="_blank" rel="noopener noreferrer">{props.message}</a>
    </div>
  )
}

export default ContactType