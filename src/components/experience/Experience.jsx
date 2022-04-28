import React from 'react'
import "./experience.css"
import ExperienceCard from './ExperienceCard'
import {ExperienceData} from "../../myInformation"
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <ExperienceCard 
            title={"Front End"} 
            language={ExperienceData.frontend}
          />
        </div>
        <div className="experience__backend">
          <ExperienceCard 
            title={"Back End"}
            language={ExperienceData.backend}  
          />
        </div>
      </div>
    </section>
  ) 
}

export default Experience