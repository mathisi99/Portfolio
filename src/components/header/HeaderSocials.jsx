import React from 'react'

import HeaderSocial from './HeaderSocial';
import {SocialData} from '../../myInformation'
//or we can use react-icons 
function createHeaderSocial(social){
  return <HeaderSocial key={social.link.split('/').at(-1) + '_header'} link={social.link} icon={social.icon}/>
}


const HeaderSocials = () => {
  return ( 
    <div className="header__socials">
      {SocialData.map(createHeaderSocial)}
    </div>
  )
}

export default HeaderSocials;
