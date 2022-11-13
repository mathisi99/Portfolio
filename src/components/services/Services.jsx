import React from 'react'
import { ServicesData } from '../../myInformation'
import Service from './Service'
import "./services.css"

const createService = (service) => {
  return <Service key={service.service} service={service.service} contents={service.contents} />
}

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      {ServicesData.map(createService)}
    </div>
    </section>
  )
}

export default Services