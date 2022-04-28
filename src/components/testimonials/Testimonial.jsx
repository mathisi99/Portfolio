import React from 'react'

const Testimonial = (props) => {
  return (
    <article className="testimonial">
      <div className="client__avatar">
        <img src={props.avatar} alt="Avatar" />
      </div>
      <h5 className='client__name'>{props.name}</h5>
      <div className='testimonial__review'>
          <small className='client__review'>{props.content}</small>
      </div>
    </article>
  )
}

export default Testimonial