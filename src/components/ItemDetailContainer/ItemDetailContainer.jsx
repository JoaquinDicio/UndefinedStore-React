import './ItemDetailContainer.css'
import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import {getDoc,doc,fireStore, getFirestore} from 'firebase/firestore'

export default function ItemDetailContainer({}) {
  const{id}=useParams()
  let [item,setItem]=useState(false)
  // function getItem(){
  //   fetch('https://mocki.io/v1/19b324bc-1a05-4684-8645-d9a9bc366e98')
  //     .then((res)=>res.json())
  //     .then(
  //       (data)=> {
  //         setItem(
  //           data.find(
  //             (producto)=>producto.id===parseInt(id)
  //           )
  //         )
  //       }
  //     )
  //     .catch(
  //       (error)=>console.log(error)
  //     )
  // }
  useEffect(()=>{
    //getting db
    const app = initializeApp({apiKey: "AIzaSyCZq9CI2pgCdfGGSIEArzjPnCtTFLCOM78",
    authDomain: "undefinedstore-575bf.firebaseapp.com",
    projectId: "undefinedstore-575bf",
    storageBucket: "undefinedstore-575bf.appspot.com",
    messagingSenderId: "38806740107",
    appId: "1:38806740107:web:8ecc2fa19953a1f922488e"});
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
