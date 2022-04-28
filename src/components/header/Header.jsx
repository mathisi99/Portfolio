import React from 'react'
import CTA from './CTA'
import ME from "../../resource/me3.png";
import "./header.css"
import HeaderSocials from './HeaderSocials';
import { CVData } from '../../myInformation';
const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I'm </h5>
        <h2>Cam Phu</h2>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA CVs={CVData}/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
        <HeaderSocials />
      </div>

    </header>
  )
}

export default Header