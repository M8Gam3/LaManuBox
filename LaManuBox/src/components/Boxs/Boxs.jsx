import './Boxs.scss'
import scrap_paper3 from '../../assets/img/scrap_paper3.svg'

export default function Boxs() {
    return (
        <>
            <section id='Boxs' className='boxs'>
                <div className="boxs_container">
                    <div className="boxs_products">
                        <div className="boxs_products-1">
                            <p className='boxs_products_title'>BOX 1</p>
                        </div>
                        <div className="boxs_products-2">
                            <p className='boxs_products_title'>BOX 2</p>
                        </div>
                        <div className="boxs_products-3">
                            <p className='boxs_products_title'>BOX 3</p>
                        </div>
                        <div className="boxs_products-4">
                            <p className='boxs_products_title'>BOX 4</p>
                        </div>
                    </div>
                    <div className='boxs_img'>
                        <img src={scrap_paper3} alt="scrap-paper-3" />
                    </div>
                </div>
            </section>
        </>
    )
}