import React from 'react'
import { ServicesData } from '../../myInformation'
import Service from './Service'
import "./services.css"
const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      {ServicesData.map(obj => <Service service={obj.service} contents={obj.contents} />)}
    </div>
    </section>
  )
}

export default Services