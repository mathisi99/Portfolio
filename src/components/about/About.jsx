import React from 'react'
import "./about.css"
import AboutCard from './AboutCard';
import { AboutData, AboutInformations } from '../../myInformation';

const createAboutCard = (aboutInfor) => {
  return <AboutCard key={aboutInfor.title} icons={aboutInfor.icons} title={aboutInfor.title} description={aboutInfor.description}/>
}

const About = () => {
  return (
    <section id='about' className='About'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
            <img src={AboutData.AboutME} alt="About" />
            </div>
            
          </div>
          <div className="about__content">
            <div className="about__cards">
              {AboutInformations.map(createAboutCard)}
            </div>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      
    </section>

  )
}

export default About