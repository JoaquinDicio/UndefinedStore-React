import React from "react";
import './CartItem.css'
import {TiDelete} from 'react-icons/ti'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ item }) {
  let {deleteItem}=useContext(CartContext)
  return (
    <>
      <div className="cartItem row align-items-center justify-content-center">
        <img className="col-4 img" src={item.pictureURL} alt={item.title} />
        <h5 className="text-center col-3">{item.title}</h5>
        <h5 className="text-center col-1">x{item.quantity}</h5>
        <h5 className="text-center col-3">${item.price*item.quantity}</h5>
        <button onClick={()=>deleteItem(item.id)} className="btn btn-danger text-center col-1">Borrar<TiDelete/></button>
      </div>
    </>
  );
}
