import delivery_men from '../../assets/img/delivery_men.svg'
import pallet_truck_1 from '../../assets/img/pallet_truck_1.svg'
import pallet_truck_2 from '../../assets/img/pallet_truck_2.svg'
import './Calltoaction.scss'

export default function Calltoaction() {
    return (
        <>
            <section id='Call' className='call'>
                <div className="call_container">
                    <div className="call_image-1">
                        <img src={pallet_truck_1} alt="" />
                    </div>
                    <div className="call_content">
                        <div className="call_content-img">
                            <img src={delivery_men} alt="delivery men" />
                        </div>
                        <div className="call_content_sub">
                            <p className='call_content_sub-text'>
                                La taille de votre box est un élément essentiel pour garantir son bon fonctionnement.
                                Pour vous aider à mesurer avec précision les dimensions de votre box,
                                nous avons créé cette section dédiée.
                                Vous y trouverez des instructions simples et des outils pratiques pour déterminer la hauteur,
                                la largeur et la profondeur de votre box. Une mesure précise vous aidera à choisir la box idéale selon votre taille de stockage.
                                Découvrez nos conseils et astuces pour mesurer votre box en toute simplicité,
                                afin de profiter pleinement de ses avantages.
                            </p>
                            <button className='call_content_sub-btn'>
                                Prendre vos mesures
                            </button>
                        </div>
                    </div>
                    <div className="call_image-2">
                        <img src={pallet_truck_2} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
