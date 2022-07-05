import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import {useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import { initializeApp} from "firebase/app";
import {query,collection,getDocs,getFirestore, where} from 'firebase/firestore'

function ItemListContainer() {
    //setting url params
    const {id}=useParams()
    //creates the items array
    let [productList, setproductList] = useState([])
    let [data,setData]=useState([])

useEffect(()=>{
    //getting the database
    const db=getFirestore()
    //getting a collection from firebase
    const productos=collection(db,'ItemCollection')
    getDocs(productos).then((res)=>(
        setData(res.docs.map((doc)=>(
            {id:doc.id,...doc.data()} //iterates
        )))
    ))
},[])
useEffect(()=>{
    checkCategoria()
},[id,data])

//check and filter the array
function checkCategoria(){
    if(id){
        let db=getFirestore()
        if(id==1){
            filterList(db,'combos')
        }else if(id==2){
            filterList(db,'auriculares')
        }else if(id==3){
            filterList(db,'teclados')
        }else if(id==4){
            filterList(db,'mouse')
        }
    }else{
        setproductList(data)
    }
}
function filterList(db,category){
    let newCollection=query(collection(db,'ItemCollection'),where('category','==',category))
    getDocs(newCollection).then((res)=>setproductList(res.docs.map((item)=>(
        {id:item.id,...item.data()}
    ))))
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