import React from 'react'
import './CartFooter.css'
import {useContext,useState,useEffect} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function () {
    let {emptyCart,getTotalBuy}=useContext(CartContext)
    let totalBuy=getTotalBuy()
  
  return(
    totalBuy>0?
      <div className='container footerCart d-flex row justify-content-around bg-light align-items-center'>
      <h3 className='col-sm-4'>TOTAL ${totalBuy}</h3>
      <Link className='col-sm-3' to={'/checkout'}><button className='btn btn-success'>Terminar compra</button></Link>
      </div>
    :
    <div className='container emptyCart d-flex flex-column justify-content-around bg-light align-items-center'>
      <h3>Carrito vacio</h3>
      <p>Todavia no agregaste ningun producto a tu carrito</p>
      <Link to={'/home'}><button className='btn btn-success text-center'>Ir de compras</button></Link>
    </div>
  )
}
