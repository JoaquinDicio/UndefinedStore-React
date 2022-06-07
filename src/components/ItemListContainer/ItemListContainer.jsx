import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import {useState} from 'react'

function ItemListContainer({}) {
    let [x,setX]=useState(1)

    function onSubstract(){
        setX(x-1)
    }
    function onAdd(){
        setX(x+1)
    }
    return (
        <main className="container-fluid">
            <ItemCount currentStock={12} onAdd={onAdd} onSubstract={onSubstract} x={x}></ItemCount>
        </main>
    )
}
export default ItemListContainer