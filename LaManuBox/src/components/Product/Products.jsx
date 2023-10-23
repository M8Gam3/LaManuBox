import '../Product/Products.scss'
import img_product from '../../assets/img/imageproduct.png'
import logo_orange from '../../assets/img/logo_lamanubox2.svg'
// import scrap_paper5 from '../../assets/img/scrap_paper5.svg'
// import scrap_paper6 from '../../assets/img/scrap_paper6.svg'


export default function Products() {
    return (
        <>
            <section id='products' className='header'>
                <div className='navbar'>
                    <div className='navbar__logo'><img src={logoorange} alt="logo orange" /></div>
                    <div>
                        <ul className='navbar__links'>
                            <li><a href="#">Boxs</a></li>
                            <li><a href=""> Vos mesures</a></li>
                            <li><a href=""> S'inscrire</a></li>
                            <li><a href="">Se connecter </a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='product'>
                <section className='product__container'>
                    <div>
                        <div className='container__img-product'><img src={imageprudct} alt="imageproduct" /></div>
                        <div className='container__desc'>
                            <h3>Box S</h3>
                            <div className='line'></div>
                            <p>50€ HT / mois</p>
                            <h3>Description</h3>
                            <div className='line'></div>
                            <p>Un box idéale pour pouvoir ranger votre matériel comme des outils , des tableaux ou même des petits meuble en trop chez vous</p>
                            <h3>Dimension</h3>
                            <div className='line'></div>
                            <p>-Largeur : 2²</p>
                            <p>-Longueur : 2²</p>
                            <p>-Hauteur : 2²</p>
                            <p>-Volume : 2²</p>
                            <button>Acheter</button>
                        </div>
                    </div>
                </section>
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
            </section>
        </>
    )
}
