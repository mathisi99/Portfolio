import React from 'react'
import ServiceItem from './ServiceItem'

const Service = (props) => {
  return (
    <article className='service'>
        <div className="service__head">
            <h3>{props.service}</h3>
        </div>
        <ul className='service__list'>
            {props.contents.map((content,index) => <ServiceItem content={content} key={index}/>)}
        </ul>
    </article>
  )
}

export default Service