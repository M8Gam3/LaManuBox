import './Boxs.scss'
// import scrap_paper3 from '../../assets/img/scrap_paper3.svg'

export default function Boxs() {
    return (
        <>
            <section id='Boxs' className='boxs_section'>
                <div className="boxs_container">
                    <div className="boxs_products">
                        <div className="boxs_product boxs_product-1">
                            <div className='boxs_products_title'>
                                <h3>BOX S</h3>
                            </div>
                            <div className='boxs_products_subtitle'>
                                <p>2 à 3 m²</p>
                            </div>
                        </div>
                        <div className="boxs_product boxs_product-2">
                            <div className='boxs_products_title'>
                                <h3>BOX M</h3>
                            </div>
                            <div className='boxs_products_subtitle'>
                                <p>3 à 6 m²</p>
                            </div>
                        </div>
                        <div className="boxs_product boxs_product-3">
                            <div className='boxs_products_title'>
                                <h3>BOX L</h3>
                            </div>
                            <div className='boxs_products_subtitle'>
                                <p>6 à 10 m²</p>
                            </div>
                        </div>
                        <div className="boxs_product boxs_product-4">
                            <div className='boxs_products_title'>
                                <h3>BOX XL</h3>
                            </div>
                            <div className='boxs_products_subtitle'>
                                <p>10 à 16 m²</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}