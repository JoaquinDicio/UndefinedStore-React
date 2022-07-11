import { useEffect, useState } from "react";
import { createContext } from "react";
export const CartContext = createContext(); //creates the cart context

const { Provider } = CartContext; // destructuring the attribute provider of care Context

export default function MyContext({ children }) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart'))||[]);
  //updates the local storage in every change
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])

  function addItem(item, quantity) {
    if (isInCart(item.id) == false) {
      const newItem = {
        ...item,
        quantity,
      }; //creates a new object with the qty
      setCart([...cart, newItem]);
    } else {
      let index = cart.findIndex((element) => element.id == item.id);
      cart[index].quantity = cart[index].quantity + quantity;
    }
  }

  function isInCart(id) {
    let boolean = cart.some((item) => item.id == id);
    return boolean;
  } //verifies if the item is in the cart, returns boolean

  function emptyCart(id) {
    setCart([]);
  } //empty the cart

  function getTotalBuy(){
    let tot=0
    cart.forEach((item)=>
    tot=tot+(item.price*item.quantity))
    return tot
  }

  function getLenght(){
    let tot=0
    cart?
    cart.forEach((item)=>
    tot=tot+item.quantity)
    :tot=0
    return tot
  }//gets the items quantity

  function deleteItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }
  return (
    <Provider
      value={{getTotalBuy,getLenght,deleteItem, cart, setCart, addItem, emptyCart, isInCart }}
    >
      {children}
    </Provider>
  );
}
