import React from 'react'
import logo from '../../assets/img/logo_lamanubox2.svg'
import './NavBar.scss'
import AuthDetails from '../AuthDetail/AuthDetails'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import { useState } from 'react'
export default function NavBar() {


  const [isMobileMenuOpen , setisMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () =>{
      setisMobileMenuOpen(!isMobileMenuOpen)

  }

  return (
    <nav className='nav-bar'>
       <a href="/"> <img src={logo} alt="Logo-LaManuBox" /> </a>
      <ul className={`${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
          <li><a className='link-2' href="/Register">S'inscrire</a></li>
          <li><a className='link-2 link--right' href="/Login">Se connecter</a></li>
          <AuthDetails></AuthDetails>
      </ul>
          <BurgerMenu mobileMenu={toggleMobileMenu}></BurgerMenu>
    </nav>
  )
}
