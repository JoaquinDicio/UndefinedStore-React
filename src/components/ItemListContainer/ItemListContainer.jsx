import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer({}) {
    return (
        <main className="container-fluid">
            <ItemCount currentStock={12}></ItemCount>
        </main>
    )
}
export default ItemListContainer