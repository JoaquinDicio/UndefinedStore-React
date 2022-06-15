import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

function ItemListContainer() {
//crea el array de productos
let [productList, setproductList] = useState([])
//setea los parametros de la url
const {id}=useParams()
//crea la promesa
useEffect(()=>{
    fetch('https://mocki.io/v1/5e8f133f-04e1-4a1e-96d8-52b442a08e1b')
    .then(
        (res)=>res.json()
    )
    .then(
        (data)=>checkCategoria(data)
    )
    .catch(
        (error)=>console.log(error)
    )
},[])
function checkCategoria(data){
    if(id){
        if(id==1){
            setproductList(
                data.filter((producto)=>
                    producto.category=="combos")
            )
        }
    }else{
        setproductList(data)
    }
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