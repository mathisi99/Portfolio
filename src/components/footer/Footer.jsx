import React from 'react'
import "./footer.css"
import Permalink from './Permalink'
// import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';
import FooterSocial from './FooterSocial';
import { sectionData, SocialData } from '../../myInformation';

const createFooter = (footer) => {
  return <FooterSocial key={footer.link.split('/').at(-1)+'_footer'} link={footer.link} icon={footer.icon} />
}

const createPermanalink = (section) => {
  return <Permalink key={section.text} text={section.text} linkTo={section.linkTo}/>
}

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>RONPIE</a>

      <ul className='permalinks'>
        {sectionData.map(createPermanalink)}
        
      </ul>

      <div className="footer__socials">
        {SocialData.map(createFooter)}
      </div>

      <div className="footer__copyright">
        <small>&copy; RONPIE. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer