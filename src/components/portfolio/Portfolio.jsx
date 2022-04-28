import React from 'react'
import { RecentWork } from '../../myInformation'
import "./portfolio.css"
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Personal Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {RecentWork.map(obj => <PortfolioItem imgSrc={obj.imgSrc} imgAlt={obj.imgAlt} projectGithubLink={obj.projectGithubLink} projectLink={obj.projectLink}/>)}
      </div>
    </section>
  )
}

export default Portfolio