import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import {query,collection,getDocs,getFirestore, where} from 'firebase/firestore'
import SearchBar from '../SearchBar/SearchBar';

function ItemListContainer() {
    //setting url params
    const {id}=useParams()
    //creates the items array
    let [productList, setproductList] = useState([])
    let [data,setData]=useState([])
    //search state
    let [search,setSearch]=useState('')

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
//search items using the search bar
function searchItem(input){
    setproductList(
        data.filter((item)=>
            item.title.toLowerCase().includes(input.toLowerCase())
        )
    )
}
return (
    <main className="container-fluid">
        <SearchBar searchItem={searchItem}/>
        <div className='row justify-content-center itemListContainer'>
            <ItemList products={productList}></ItemList>
        </div>
    </main>
)
}

export default ItemListContainer