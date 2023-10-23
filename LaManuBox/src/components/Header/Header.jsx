import logo from '../../assets/img/logo_lamanubox.svg'
import AuthDetails from '../AuthDetail/AuthDetails';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.scss';
import { useState } from 'react';

export default function Header() {

    const [isMobileMenuOpen , setisMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () =>{
        setisMobileMenuOpen(!isMobileMenuOpen)

    }

    return (
        <>
            <header>
                <div className='header'>
                    <nav>
                        <a href="/"> <img src={logo} alt="Logo-LaManuBox" /> </a>
                        <ul className={`${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
                            <li><a className='link link--left' href="/#Boxs">Boxs</a></li>
                            <li><a className='link' href="/#calculator">Vos mesures</a></li>
                            <button className='footer_container_section_btn'>
                            <a className='footer_container_section_btn-link' href="/Register"> Inscription </a>
                        </button>
                            <button className='footer_container_section_btn'>
                            <a className='footer_container_section_btn-link' href="/Login"> Se connecter </a>
                        </button>
                            <AuthDetails></AuthDetails>
                        </ul>
                        <BurgerMenu mobileMenu={toggleMobileMenu}></BurgerMenu>
                    </nav>
                    <div className="hero-banner">
                        <div className='intro'>
                            <h1>LaManuBox</h1>
                            <h2>
                                Libérez de l'espace, libérez votre vie :<br/>
                                Découvrez nos boxs de stockage sur mesure pour vos besoins de rangement.
                            </h2>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}