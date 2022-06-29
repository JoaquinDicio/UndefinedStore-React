import Button from "../Button/Button.jsx"
import './ItemCount.css'


export default function ItemCount({currentStock,onAdd,onSum,onSubstract,qty}){
    
    return(
        <div className="row justify-content-center container itemCount">
            <h5 className="text-center">Cantidad</h5>
            <div className="row item-count-info align-items-center">
                <Button clicked={qty>0?onSubstract:()=>''} text={'-'} btnStyle={'btn text-center btn-danger col-3'}/>
                <h5 className="col text-center">{qty}</h5>
                <Button clicked={qty<currentStock?onSum:()=>alert('No hay mas unidades de este producto')} text={'+'} btnStyle={'btn btn-success col-3 text-center'}/>
            </div>
            <Button clicked={qty>0?()=>onAdd(qty):()=>alert('Cantidad invalida')} text={'Agregar al carrito'} btnStyle={'btn btn-primary addToCartBtn'}/>
        </div>
    )
}