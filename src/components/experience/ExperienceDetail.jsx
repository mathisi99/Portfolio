import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const ExperienceDetail = (props) => {
  return (
    <article className='experience__details'>
        <CheckCircleOutlineIcon className='experience__details-icon'/>
        <div>
            <h4>{props.language}</h4>
            <small className='text-light'>{props.level}</small>
        </div>
    </article>
  )
}

export default ExperienceDetail