import './Header.scss';

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <img src="../../assets/img/logo_lamanubox.svg" alt="Logo-LaManuBox" />
                    <ul>
                        <li><a className='link link--left' href="#">Boxs</a></li>
                        <li><a className='link' href="#">Vos mesures</a></li>
                        <li><a className='link' href="#">S'inscrire</a></li>
                        <li><a className='link link--right' href="#">Se connecter</a></li>
                    </ul>
                </nav>
                <div className="hero-banner">
                    <h1>LaManuBox</h1>
                    <h2>Phrase d'accroche bien longue et je rajoute des mots car je sais pas quoi mettre à la place</h2>
                </div>
            </header>
        </>
    )
}