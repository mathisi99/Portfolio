import React from 'react'
import "./about.css"
import AboutCard from './AboutCard';
import BookIcon from '@mui/icons-material/Book';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import { AboutData } from '../../myInformation';

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
              <AboutCard icons={BookIcon} title={"Experience"} description={"2+ Years Working"}/>
              {/* <AboutCard icons={PersonOutlineIcon} title={"Clients"} description={"20+ Country"}/> */}
              <AboutCard icons={FolderSharedIcon} title={"Projects"} description={"30+ Completed"}/>
            </div>

          <p>


          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      
    </section>

  )
}

export default About