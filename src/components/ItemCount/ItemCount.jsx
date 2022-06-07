import Button from "../Button/Button.jsx"
import './ItemCount.css'

export default function ItemCount({currentStock,onAdd,onSubstract,x}){
    
    return(
        <div className="row justify-content-center container itemCount">
            <h5 className="text-center">Cantidad</h5>
            <div className="row item-count-info align-items-center">
                <Button clicked={x>0?onSubstract:()=>alert('Error')} text={'-'} btnStyle={'btn text-center btn-danger col-2'}/>
                <h5 className="col text-center">{x}</h5>
                <Button clicked={x<currentStock?onAdd:()=>alert('No hay mas unidades de este producto')} text={'+'} btnStyle={'btn btn-success col-2 text-center'}/>
            </div>
            <Button clicked={()=>alert('Comprado '+x+' unidades del producto')} text={'Agregar al carrito'} btnStyle={'btn btn-primary'}/>
        </div>
    )
}