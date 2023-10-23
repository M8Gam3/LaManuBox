import React from 'react'
import logo from '../../assets/img/logo_lamanubox2.svg'
import './NavBar.scss'
import AuthDetails from '../AuthDetail/AuthDetails'
export default function NavBar() {
  return (
    <nav className='nav-bar'>
       <a href="/"> <img src={logo} alt="Logo-LaManuBox" /> </a>
      <ul>
          <li><a className='link-2' href="/Register">S'inscrire</a></li>
          <li><a className='link-2 link--right' href="/Login">Se connecter</a></li>
          <AuthDetails></AuthDetails>
      </ul>
    </nav>
  )
}
