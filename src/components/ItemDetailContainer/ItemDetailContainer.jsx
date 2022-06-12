import './ItemDetailContainer.css'
import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer({itemID}) {
  let [item,setItem]=useState({})

  function getItem(){
    fetch('https://mocki.io/v1/04008dfa-070e-490a-a236-a6621ae42f95')
      .then((res)=>res.json())
      .then(
        (data)=> {
          setItem(
            data.find(
              (producto)=>producto.id===itemID
            )
          )
        },
        console.log(item)
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
