import React from 'react'
import { RecentWork } from '../../myInformation'
import "./portfolio.css"
import PortfolioItem from './PortfolioItem'

const createPortfolio = (portfolio) => {
  return <PortfolioItem key={portfolio.imgAlt} imgSrc={portfolio.imgSrc} imgAlt={portfolio.imgAlt} projectGithubLink={portfolio.projectGithubLink} projectLink={portfolio.projectLink}/>
}

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Personal Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {RecentWork.map(createPortfolio)}
      </div>
    </section>
  )
}

export default Portfolio