import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import MessageIcon from '@mui/icons-material/Message';
import "./nav.css"
import NavElement from './NavElement';
const Nav = () => {
  const [navPosition, setNavPosition] = useState("#");
  //can we use just one function to control active className to component
  function handleNavClick(e){
    setNavPosition(e.target.closest('a').href.split("/").at(-1));
  }
  return (
    <nav>
      <NavElement href={'#'} handleNavClick={handleNavClick} navPosition={navPosition} iconComponent={HomeIcon} />
      <NavElement href={'#about'} handleNavClick={handleNavClick} navPosition={navPosition} iconComponent={PersonIcon} />
      <NavElement href={'#experience'} handleNavClick={handleNavClick} navPosition={navPosition} iconComponent={BookIcon} />
      <NavElement href={'#services'} handleNavClick={handleNavClick} navPosition={navPosition} iconComponent={DesignServicesIcon} />
      <NavElement href={'#contact'} handleNavClick={handleNavClick} navPosition={navPosition} iconComponent={MessageIcon} />
    </nav>
  )
}

export default Nav