import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer({}) {
    function onAdd(x){
        alert('Comprado '+x+' unidades del producto')
    }
    return (
        <main className="container-fluid">
            <ItemCount currentStock={12} onAdd={onAdd} init={2}></ItemCount>
        </main>
    )
}
export default ItemListContainer