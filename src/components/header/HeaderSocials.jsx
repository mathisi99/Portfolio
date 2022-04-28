import React from 'react'

import HeaderSocial from './HeaderSocial';
import {SocialData} from '../../myInformation'
//or we can use react-icons 

const HeaderSocials = () => {
  return ( 
    <div className="header__socials">
      {SocialData.map(obj => <HeaderSocial link={obj.link} icon={obj.icon}/>)}
    </div>
  )
}

export default HeaderSocials