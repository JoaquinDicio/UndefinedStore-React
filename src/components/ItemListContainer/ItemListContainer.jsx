import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import {useEffect,useState} from 'react'

function ItemListContainer() {
    function onAdd(x) {
        alert('Comprado ' + x + ' unidades del producto')
    }
//crea el array de productos
let [productList, setproductList] = useState([])
//crea la promesa
useEffect(()=>{
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            res(
                [{
                    id: 1, title: 'Mouse Genius', description: 'mouse clasico color negro, sensor laser', price: '1200', pictureURL: 'https://www.venex.com.ar/products_images/1526482059_m100gallery1.png'
                }, {
                    id: 2, title: 'Teclado y mouse', description: 'Combo teclado+mouse marca logitech', price: '2500', pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_976914-MLA48498254472_122021-O.webp'
                }, {
                    id: 3, title: 'Auriculares JBL', description: 'auriculares in-ear inalambricos', price: '8200', pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_875020-MLA47919581799_102021-O.webp'
                }, {
                    id: 4, title: 'Producto', description: 'descripcion breve', price: '1200', pictureURL: ''
                }, {
                    id: 5, title: 'Producto', description: 'descripcion breve', price: '1200', pictureURL: ''
                }, {
                    id: 6, title: 'Producto', description: 'descripcion breve', price: '1200', pictureURL: ''
                }]
            )
            //lama la promesa
            promiseCall(promise)
        }, 2000);  
    })
},[])
function promiseCall(promise){
    promise.then(
    (productsArray)=>setproductList(productsArray)
    )
}
return (
    <main className="container-fluid">
        <div className='row justify-content-center itemListContainer'>
            <ItemList products={productList}></ItemList>
        </div>
    </main>
)
}

export default ItemListContainer