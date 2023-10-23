import logo from '../../assets/img/logo_lamanubox.svg'
import './Header.scss';

export default function Header() {

    return (
        <>
            <header>
                <div className='header'>
                    <nav>
                        <a href="/"> <img src={logo} alt="Logo-LaManuBox" /> </a>
                        <ul>
                            <li><a className='link link--left' href="/#Boxs">Boxs</a></li>
                            <li><a className='link' href="/#calculator">Vos mesures</a></li>
                            <li><a className='link' href="/Register">S'inscrire</a></li>
                            <li><a className='link link--right' href="/Login">Se connecter</a></li>
                        </ul>
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