import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
const ServiceItem = (props) => {
  return (
    <li>
        <CheckIcon className='service__list-icon' />
        <p>{props.content}</p>
    </li>
  )
}

export default ServiceItem