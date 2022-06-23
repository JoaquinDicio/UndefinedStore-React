import React from 'react'
import './CartFooter.css'
import {useContext,useState,useEffect} from 'react'
import { CartContext } from '../../context/CartContext'

export default function () {
    let {emptyCart,getTotalBuy}=useContext(CartContext)
    let totalBuy=getTotalBuy()
  return (
    <div className='container footerCart d-flex justify-content-around bg-light align-items-center'>
        <h3>TOTAL ${totalBuy}</h3>
        {
            totalBuy>0?<button onClick={emptyCart} className='btn btn-danger text-center'>Vaciar carrito</button>: <p>carrito vacio</p>
        }
    </div>
  )
}
