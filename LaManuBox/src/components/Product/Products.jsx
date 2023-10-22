import '../Product/Products.scss'
import imageprudct from '../../assets/img/imageproduct.png'
import logoorange from '../../assets/img/logo-orange.png'


export default function Products() {
  return (
    <>
  
        <section className='header'>
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
            </section>
        </section>
    </>
  )
}
