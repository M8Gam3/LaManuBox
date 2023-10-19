import {objects, boxs} from './functions'
import {useState, useEffect} from 'react'
import './Calculator.scss'
export default function Calculator() {

    const [sBox, setSBox] = useState('')
    const [result, setResult] = useState(0)
    const [objects_list, setObject_list] = useState([])
    const [object_count, setObject_count] = useState({})


    function addObjectById(id) {
        const object = objects.find(obj => obj.id === id);
        if (object) {
            // Copiez d'abord la liste des objets actuelle
            const temp5 = [...objects_list, object];
            setObject_list(temp5);
        }
    }

    function removeObjectById(id) {
        const indexToRemove = objects_list.findIndex(obj => obj.id === id);
        if (indexToRemove !== -1) {
            // Copiez d'abord la liste des objets actuelle
            const temp6 = [...objects_list];
            temp6.splice(indexToRemove, 1);
            setObject_list(temp6);
        }
    }

    function resetObjectList() {
        setObject_list([])
    }

    useEffect(() => {
        let temp3 = 0;
        objects_list.forEach(element => {
            temp3 += parseFloat(element.cubic);
        });
        // Utilisez parseFloat pour la conversion, pas toFixed()
        setResult(parseFloat(temp3).toFixed(2));
    }, [objects_list]);

    useEffect(() => {
        // Calculez les comptages et mettez à jour object_count
        const newCount = objects.reduce((countObj, obj) => {
            const count = objects_list.filter(item => item.id === obj.id).length;
            return { ...countObj, [obj.id]: count };
        }, {});
        setObject_count(newCount);
    }, [objects_list]);

    useEffect(() => {
        const selectedBox = boxs.find(box => box.cubic >= result);
        if (selectedBox) {
            setSBox(selectedBox);
        } else {
            setSBox('error')
        }
    }, [result]);

    // console.log(sBox);
    // console.log(result);
    // console.log(object_count)
    
    return (
        <>
            <section className='calculator'>

                <div className='calculator_container'>

                    <div className='calculator_selector'>
                        {
                            objects.map((element, key) => 
                                <div key={key}className='calculator_item'>
                                    <div className='calculator_item-img'>
                                        <img src={element['img']} alt={element['name']} />
                                    </div>
                                    <p className='calculator_item-name'>{element['name']}</p>
                                    <div className='calculator_item-count'>
                                        <button className='calculator_item-add' onClick={() => removeObjectById(element['id'])}>-</button>
                                        <p className='calculator_item-counter'>{object_count[element['id']]}</p>
                                        <button className='calculator_item-remove' onClick={() => addObjectById(element['id'])}>+</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='calculator_content'>
                        {/* <div>
                            <button onClick={() => resetObjectList()}>reset</button>
                            { sBox !== '' ? <p>{sBox['name']}</p> : <></> }
                        </div> */}
                        <img className='calculator_content-img' src="" alt="" />
                        <div className='calculator_content-infos'>
                            <div className='calculator_objects'>
                                {
                                    objects_list.map((item, key) => 
                                        <div className='calculator_object' key={key}>
                                            <p className='calculator_object-name'>{item.name}</p>
                                            <div className='calculator_object-icon'>
                                                <img src="" alt="" />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='calculator_result'>
                                <div className='calculator_infos'>
                                    <div className='calculator_infos-result'>
                                        <p>{result}</p>
                                    </div>
                                    <div className='calculator_infos-reset'>
                                        <button onClick={() => resetObjectList()}>Reset</button>
                                    </div>
                                </div>
                                <button className='calculator_boxs'>
                                    <div className='calculator_boxs-infos'>
                                        <div className='calculator_boxs-name'>
                                            <p>Boxes {sBox.name}</p>
                                        </div>
                                        <div className='calculator_boxs-desc'>
                                            <p>Cette boxe est la plus adaptée pour ranger vos objets</p>
                                        </div>
                                    </div>
                                    <div className='calculator_boxs-details'>
                                        <img src="" alt="" />
                                    </div>
                                </button>
                            </div> 
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}