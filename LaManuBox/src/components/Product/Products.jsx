import '../Product/Products.scss'
import img_product from '../../assets/img/imageproduct.png'
import logo_orange from '../../assets/img/logo_lamanubox2.svg'
// import scrap_paper5 from '../../assets/img/scrap_paper5.svg'
// import scrap_paper6 from '../../assets/img/scrap_paper6.svg'


export default function Products() {
    return (
        <>
                <section className='article'>
                    <div className="article__container">
                        {/* <img src={scrap_paper5} alt="scrap paper" /> */}
                        <div className="article__container__box">
                            <div className='article__container--img'>
                                <img className="article__container--img--1" src={img_product} alt="imageproduct" />
                            </div>
                            <div className='article__container__desc'>
                                <div className='article__container__content'>
                                    <h3 className='article__container__title'>Box S</h3>
                                    <p className='article__container__text'>50€ HT / mois</p>
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
                                    <p className='article__container__text'>-Largeur : 2²</p>
                                    <p className='article__container__text'>-Longueur : 2²</p>
                                    <p className='article__container__text'>-Hauteur : 2²</p>
                                    <p className='article__container__text'>-Volume : 2²</p>
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
