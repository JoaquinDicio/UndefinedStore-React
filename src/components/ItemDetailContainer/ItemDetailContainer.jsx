import './ItemDetailContainer.css'
import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

export default function ItemDetailContainer({}) {
  const{id}=useParams()
  let [item,setItem]=useState({})

  function getItem(){
    fetch('https://mocki.io/v1/04008dfa-070e-490a-a236-a6621ae42f95')
      .then((res)=>res.json())
      .then(
        (data)=> {
          setItem(
            data.find(
              (producto)=>producto.id===id
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
