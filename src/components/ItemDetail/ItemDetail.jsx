import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState,useContext } from "react";
import Button from "../Button/Button";
import {Link} from 'react-router-dom'
import { CartContext } from "../../context/CartContext";
import Loader from "../Loader/Loader";

export default function ItemDetail({ item }) {
  let [qty, setQty] = useState(0);
  let {addItem}=useContext(CartContext) //call the cartContext
  let [inCart,setInCart]=useState(false)

  function onAdd(qty) {
    addItem(item,qty);
    setInCart(true);
  }//add a new item to the cart

  function onSubstract() {
    setQty(qty - 1);
  }//decrease the qty

  function onSum() {
    setQty(qty + 1);
  }//increase the qty

  return (
    !item? <Loader/> :
    (<div className="product-div d-flex flex-column align-items-center">
      <div className="main-info row align-items-center">
        <div className="col-sm-7 productImg">
          <img src={item.pictureURL} alt={item.title} />
        </div>
        <div className="col-sm-5 text d-flex flex-column align-items-center">
          <h3 className="text-center">{item.title}</h3>
          <p className="text-center">{item.description}</p>
          <h3 className="text-center price">${item.price}</h3>
          {inCart==false ? (
            <ItemCount
              onAdd={onAdd}
              onSum={onSum}
              onSubstract={onSubstract}
              qty={qty}
              setQty={setQty}
              currentStock={item.stock}
            />
          ) : (
            <Link to={'/cart'}>
              <Button btnStyle={'btn btn-success'} text={"Ir al carrito"} />
            </Link>
          )}
        </div>
      </div>
    </div>)
  );
}
