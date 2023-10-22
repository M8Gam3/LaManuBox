import './Footer.scss'
import logo from '../../assets/img/logo_lamanubox.svg'
import insta from '../../assets/img/insta_icon.svg'
import facebook from '../../assets/img/facebook_icon.svg'
import x from '../../assets/img/x_icon.svg'

export default function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className='footer_container'>
                    <div className='footer_container_section'>
                        <h3 className='footer_container_section_title'>Adresse</h3>
                        <p className='footer_container_section_text'>70 Rue des Jacobins, 80000 Amiens</p>
                        <h3 className='footer_container_section_title'>Horaires & Contact</h3>
                        <p className='footer_container_section_text'>7j/7 , 24h/24 avec badge</p>
                    </div>
                    <div className='footer_container_section'>
                        <img className='footer_container_section-img' src={logo} alt="logo" />
                        <div className='footer_container_section-icon'>
                            <img src={insta} alt="instagram" />
                            <img src={facebook} alt="facebook" />
                            <img src={x} alt="x/twitter" />
                        </div>
                    </div>
                    <div className='footer_container_section'>
                        <h3 className='footer_container_section_title'>Tarif</h3>
                        <button className='footer_container_section_btn' href="#">
                            <a className="footer_container_section_btn-link" href='#'>Voir les tarifs</a>
                        </button>
                        <h3 className='footer_container_section_title'>Mesure pour votre box idéale</h3>
                        <button className='footer_container_section_btn'>
                            <a className='footer_container_section_btn-link' href="#">Mesurer votre taille de stock</a>
                        </button>
                    </div>
                </div>
                <p className='footer_copyright'>Copyright Lamanubox 2023 - Mentions légales</p>
            </footer>
        </>
    )
}