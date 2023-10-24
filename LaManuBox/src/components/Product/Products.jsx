import '../Product/Products.scss'
import logo_orange from '../../assets/img/logo_lamanubox2.svg'
// import scrap_paper5 from '../../assets/img/scrap_paper5.svg'
// import scrap_paper6 from '../../assets/img/scrap_paper6.svg'
import {boxs} from './functions'


export default function Products() {
    var currentURL = window.location.href;

    // Utiliser l'objet URL pour analyser l'URL
    var url = new URL(currentURL);

    // Obtenir la valeur de l'ID à partir du paramètre "id"
    var idValue = url.searchParams.get("id");
    console.log(idValue)

    const boxInfos = boxs.find(obj => obj.id == idValue);

    return (
        <>
                <section className='article'>
                    <div className="article__container">
                        {/* <img src={scrap_paper5} alt="scrap paper" /> */}
                        <div className="article__container__box">
                            <div className='article__container--img'>
                                <img className="article__container--img--1" src={boxInfos.img} alt="imageproduct" />
                            </div>
                            <div className='article__container__desc'>
                                <div className='article__container__content'>
                                    <h3 className='article__container__title'>Box {boxInfos.name}</h3>
                                    <p className='article__container__text'>{boxInfos.price}€ HT / mois</p>
                                </div>
                                <div className='article__container__content'>
                                    <h3 className='article__container__title'>Description</h3>
                                    <p className='article__container__text'>
                                        Un box idéale pour pouvoir ranger votre matériel comme des outils,<br />
                                        des tableaux ou même des petits meuble en trop chez vous
                                    </p>
                                </div>
                                <div className='article__container__content'>
                                    <h3 className='article__container__title'>Dimension</h3>
                                    <p className='article__container__text'>-Surface au sol : {boxInfos.squareMax}m²</p>
                                    <p className='article__container__text'>-Hauteur : {boxInfos.height}m²</p>
                                    <p className='article__container__text'>-Volume : {boxInfos.cubic}m3</p>
                                    <button className='article__container--btn'><a className='article__container--link' href="#">Réserver la box</a></button>
                                </div>
                            </div>
                        </div>
                        {/* <img src={scrap_paper6} alt="scrap paper" /> */}
                    </div>
                </section>
        </>
    )
}
