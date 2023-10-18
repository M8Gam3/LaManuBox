

export default function Contact() {
    let objects_list = [];
    let result = 0;


    return (
        <>
            <section>
                <div>
                    {
                        objects.map(element => 
                            <>
                                <div>
                                    <img src={element['img']} alt={element['name']} />
                                </div>
                                <p>{element['name']}</p>
                                <div>
                                    <button onClick={addObjectById(element['id'])}>+</button>
                                    <p></p>
                                    <button onClick={removeObjectById(element['id'])}>-</button>
                                </div>
                            </>
                        )
                    }
                </div>
                <button onClick={calculateCubic()}>Calcul</button>
                <p>{sBox}</p>
            </section>
        </>
    )
}