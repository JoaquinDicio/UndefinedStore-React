import Button from "../Button/Button.jsx"
import './ItemCount.css'
import {useState,useEffect} from 'react'

export default function ItemCount({currentStock,onAdd}){
    let [x,setX]=useState(1)

    function onSubstract(){
        setX(x-1)
    }
    function onSum(){
        setX(x+1)
    }
    return(
        <div className="row justify-content-center container itemCount">
            <h5 className="text-center">Cantidad</h5>
            <div className="row item-count-info align-items-center">
                <Button clicked={x>0?onSubstract:()=>alert('Error')} text={'-'} btnStyle={'btn text-center btn-danger col-3'}/>
                <h5 className="col text-center">{x}</h5>
                <Button clicked={x<currentStock?onSum:()=>alert('No hay mas unidades de este producto')} text={'+'} btnStyle={'btn btn-success col-3 text-center'}/>
            </div>
            <Button clicked={()=>onAdd(x)} text={'Agregar al carrito'} btnStyle={'btn btn-primary addToCartBtn'}/>
        </div>
    )
}