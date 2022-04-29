import React from 'react'
import CTA from './CTA'
import "./header.css"
import HeaderSocials from './HeaderSocials';
import { AboutData, CVData } from '../../myInformation';
const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I'm </h5>
        <h2>Cam Phu</h2>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA CVs={CVData}/>
        <div className="me">
          <img src={AboutData.HeaderME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
        <HeaderSocials />
      </div>

    </header>
  )
}

export default Header