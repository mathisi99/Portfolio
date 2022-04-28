import React from 'react'

const PortfolioItem = (props) => {
  return (
    <article className='portfolio__item'>
        <div className="portfolio__item-image">
            <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
        <h3>{props.title}</h3>
        <div className="portfolio__item-cta">
            <a href={props?.projectGithubLink} target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
            {props?.projectLink && <a href={props.projectLink} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a> }
        </div>
    </article>
  )
}

export default PortfolioItem