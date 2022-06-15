import './ItemDetailContainer.css'
import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

export default function ItemDetailContainer({}) {
  const{id}=useParams()
  let [item,setItem]=useState({})

  function getItem(){
    fetch('https://mocki.io/v1/7e9aaccb-9677-46d3-9df4-93c684233a87')
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
