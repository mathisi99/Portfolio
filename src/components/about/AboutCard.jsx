import React from 'react'

const AboutCard = (props) => {
  return (
    <article className='about__card'>
        <div className="about__icon">
            {<props.icons />}
        </div>
        <h5>{props.title}</h5>
        <small>{props.description}</small>
    </article>
  )
}

export default AboutCard