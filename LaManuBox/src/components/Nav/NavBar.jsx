import React from 'react'
import logo from '../../assets/img/logo_lamanubox.svg'
export default function NavBar() {
  return (
    <nav>
        <img src={logo} alt="Logo-LaManuBox" />
        <ul>
            <li><a className='link link--left' href="#">Boxs</a></li>
            <li><a className='link' href="#">Vos mesures</a></li>
            <li><a className='link' href="#">S'inscrire</a></li>
            <li><a className='link link--right' href="/Login">Se connecter</a></li>
        </ul>
    </nav>
  )
}
