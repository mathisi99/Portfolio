import React from 'react'
import "./footer.css"
import Permalink from './Permalink'
// import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';
import FooterSocial from './FooterSocial';
import { sectionData, SocialData } from '../../myInformation';
const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>RONPIE</a>

      <ul className='permalinks'>
        {sectionData.map(obj => <Permalink text={obj.text} linkTo={obj.linkTo}/>)}
        
      </ul>

      <div className="footer__socials">
        {SocialData.map(obj => <FooterSocial link={obj.link} icon={obj.icon} />)}
        {/* <FooterSocial link={"https://facebook.com"} icon={BsFacebook} />
        <FooterSocial link={"https://instagram.com"} icon={BsInstagram} />
        <FooterSocial link={"https://twitter.com"} icon={BsTwitter} /> */}
      </div>

      <div className="footer__copyright">
        <small>&copy; RONPIE. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer