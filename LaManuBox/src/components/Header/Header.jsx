import './Header.scss';
import NavBar from '../Nav/NavBar';

export default function Header() {

    return (
        <>
            <header>
                <div className='header'>
                    <NavBar />
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