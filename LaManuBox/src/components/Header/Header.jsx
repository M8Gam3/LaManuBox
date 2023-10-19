import './Header.scss';
import logo from '../../assets/img/logo_lamanubox.svg'
export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <img src={logo} alt="Logo-LaManuBox" />
                    <ul>
                        <li><a className='link link--left' href="#">Boxs</a></li>
                        <li><a className='link' href="#">Vos mesures</a></li>
                        <li><a className='link' href="#">S'inscrire</a></li>
                        <li><a className='link link--right' href="#">Se connecter</a></li>
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
            </header>
        </>
    )
}