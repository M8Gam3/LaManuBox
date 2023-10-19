import './About.scss';
import paper1 from '../../assets/img/scrap_paper1.svg';
import paper2 from '../../assets/img/scrap_paper2.svg';
import amiens from '../../assets/img/amiens.png';

export default function About() {
    return (
        <>
            <section id='About' className='about'>
                <div className='about_container'>
                    <div className="about_image-1">
                        <img src={paper1} alt="scrap-paper1" />
                    </div>
                    <div className='about_story'>
                        <div className="about_story-content">
                            <h3 className='about_story-title'>Location de boxes dans une très belle ville de France</h3>
                            <p className='about_story-text'>
                                BoxEspace,
                                fondée par Sarah,
                                est une plateforme de location de boxs qui offre aux clients une variété de solutions de stockage personnalisées,
                                de la taille de box adaptée à leurs besoins à un accès 24/7 sécurisé.<br/>
                                Cette entreprise s'engage à simplifier la vie de ses clients en offrant une expérience de stockage pratique et flexible,
                                soutenue par une équipe dévouée.<br/>
                                Le site Web de BoxEspace permet aux utilisateurs de réserver aisément des boxs tout en garantissant la sécurité de leurs biens grâce à des mesures de protection avancées.
                                BoxEspace est bien plus qu'un simple site de location de boxs, c'est le choix idéal pour libérer de l'espace en toute confiance.</p>
                        </div>
                        <div className="about_story-img">
                            <img src={amiens} alt="ville_amiens" />
                        </div>
                    </div>
                    <div className="about_image-2">
                        <img src={paper2} alt="scrap-paper2" />
                    </div>
                </div>
            </section>
        </>
    )
}
