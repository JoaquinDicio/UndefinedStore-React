import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import Button from "../Button/Button";
import {Link} from 'react-router-dom'

export default function ItemDetail({ item }) {
  let [qty, setQty] = useState(0);
  let [inCart, setInCart] = useState(false);

  function onAdd(qty) {
    setInCart(true);
  }
  function onSubstract() {
    setQty(qty - 1);
  }
  function onSum() {
    setQty(qty + 1);
  }

  return (
    <div className="product-div container d-flex flex-column align-items-center justify-content-center">
      <div className="main-info row justify-content-center">
        <div className="col-md-8 productImg">
          <img src={item.pictureURL} alt={item.title} />
        </div>
        <div className="col-md-4 text">
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
    </div>
  );
}
