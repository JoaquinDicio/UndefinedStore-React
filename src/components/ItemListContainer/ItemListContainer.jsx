import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import {useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom';

function ItemListContainer() {
//crea el array de productos
let [productList, setproductList] = useState([])
//setea los parametros de la url
const {id}=useParams()
//crea la promesa
useEffect(()=>{
    fetch('https://mocki.io/v1/7e9aaccb-9677-46d3-9df4-93c684233a87')
    .then(
        (res)=>res.json()
    )
    .then(
        (data)=>
        checkCategoria(data)
    )
    .catch(
        (error)=>console.log(error)
    )
},[id])
//chequea la categoria seleccionada
function checkCategoria(data){
    if(id){
        if(id==1){
            filterList(data,"combos")
        }else if(id==2){
            filterList(data,"auriculares")
        }else if(id==3){
            filterList(data,"teclados")
        }else if(id==4){
            filterList(data,"mouse")
        }
    }else{
        setproductList(data)
    }
}
//filtra los productos
function filterList(data,category){
    setproductList(
        data.filter((producto)=>
            producto.category==category)
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