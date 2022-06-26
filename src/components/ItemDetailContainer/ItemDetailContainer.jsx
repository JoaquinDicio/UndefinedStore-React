import './ItemDetailContainer.css'
import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

export default function ItemDetailContainer({}) {
  const{id}=useParams()
  let [item,setItem]=useState(false)

  function getItem(){
    fetch('https://mocki.io/v1/19b324bc-1a05-4684-8645-d9a9bc366e98')
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
