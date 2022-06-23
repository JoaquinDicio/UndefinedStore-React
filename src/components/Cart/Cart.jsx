import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import CartFooter from "../CartFooter/CartFooter";

export default function Cart() {
  let { setCart,cart } = useContext(CartContext); 
  return (
    <>
      <div className='CartContainer container'>
        {cart.map((item) => (
          <CartItem key={item.id} item={item}/>
        ))}
      </div>
      <CartFooter></CartFooter>
    </>
  );
}
