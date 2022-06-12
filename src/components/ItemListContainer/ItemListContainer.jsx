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
    fetch('https://mocki.io/v1/04008dfa-070e-490a-a236-a6621ae42f95')
    .then(
        (res)=>res.json()
    )
    .then(
        (data)=>setproductList(data)
    )
    .catch(
        (error)=>console.log(error)
    )
},[])


return (
    <main className="container-fluid">
        <div className='row justify-content-center itemListContainer'>
            <ItemList products={productList}></ItemList>
        </div>
    </main>
)
}

export default ItemListContainer