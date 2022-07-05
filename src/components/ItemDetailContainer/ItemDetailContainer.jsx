import './ItemDetailContainer.css'
import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import {getDoc,doc,fireStore, getFirestore} from 'firebase/firestore'

export default function ItemDetailContainer({}) {
  const{id}=useParams()
  let [item,setItem]=useState(false)
  useEffect(()=>{
    //getting db
    let db=getFirestore()
    let document=doc(db,'ItemCollection',id)
    getDoc(document).then((item)=>
    (setItem({...item.data(),id:item.id})))
  }
  )
  return (
    <>
    <ItemDetail item={item}/>
    </>
  )
}
