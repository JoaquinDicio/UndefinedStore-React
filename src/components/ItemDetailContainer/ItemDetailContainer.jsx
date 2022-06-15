import './ItemDetailContainer.css'
import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

export default function ItemDetailContainer({}) {
  const{id}=useParams()
  let [item,setItem]=useState({})

  function getItem(){
    fetch('https://mocki.io/v1/5e8f133f-04e1-4a1e-96d8-52b442a08e1b')
      .then((res)=>res.json())
      .then(
        (data)=> {
          setItem(
            data.find(
              (producto)=>producto.id===parseInt(id)
            )
          )
        }
      )
      .catch(
        (error)=>console.log(error)
      )
  }
  useEffect(
    ()=>{
      setTimeout(
        ()=>getItem(),2000
      )
    },[]
  )
  return (
    <>
    <ItemDetail item={item}/>
    </>
  )
}
