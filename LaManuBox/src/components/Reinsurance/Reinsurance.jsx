import './Reinsurance.scss'
import badge from '../../assets/img/badge_icon.svg'
import camera from '../../assets/img/camera_icon.svg'
import pallet from '../../assets/img/pallet_icon.svg'

export default function Reinsurance() {
    return (
        <>
            <section id='Reinsurance' className='reinsurance'>
                <div className='reinsurance_container'>
                    <div className='reinsurance_object' >
                        <img src={pallet} alt="pallet" />
                        <div className='reinsurance_object_content'>
                            <p className='reinsurance_object_content_title'>Stockage rapide et efficace</p>
                            <p className='reinsurance_object_content_text'>Main-d'œuvre à disposition</p>
                        </div>
                    </div>
                    <div className='reinsurance_object' >
                        <img src={camera} alt="camera" />
                        <div className='reinsurance_object_content'>
                            <p className='reinsurance_object_content_title'>Sécurité fiable</p>
                            <p className='reinsurance_object_content_text'>Vidéo surveillance, alarme</p>
                        </div>
                    </div>
                    <div className='reinsurance_object' >
                        <img src={badge} alt="badge" />
                        <div className='reinsurance_object_content'>
                            <p className='reinsurance_object_content_title'>Disponible 7j/7</p>
                            <p className='reinsurance_object_content_text'>Avec badge personnalisé</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
