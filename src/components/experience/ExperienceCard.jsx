import React from 'react'

import ExperienceDetail from './ExperienceDetail';
const ExperienceCard = (props) => {
  return (
      <>
        <h3>{props.title}</h3>
        <div className="experience__content">
            {
                props?.language && Object.entries(props.language).map(([key, value], index) => {
                    return <ExperienceDetail language={key} level={value} key={index}/>
                })}
        </div>
      </>
  )
}

export default ExperienceCard