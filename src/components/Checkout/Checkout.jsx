import { React, useEffect, useState, useContext } from "react";
import "./Checkout.css";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export default function Checkout() {
  let [finished, setFinished] = useState(false);
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [cel, setCel] = useState("");
  const { cart, getTotalBuy } = useContext(CartContext);
  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  function handleClick() {

    if(name==''){
      showError('Ingrese un nombre valido')
    }else if(!email.includes('@')||!email.includes('.com')){
      showError('Ingrese un email valido')
    }else if(isNaN(cel)||cel==''){
      showError('Ingrese un telefono valido')
    }else{
      setFinished(true);
      let total = getTotalBuy();
      const order = {
        buyer: { name: name, cel: cel, email: email },
        items: cart,
        date: Date(),
        total: total,
      };
      addDoc(orderCollection, order);
    }
  }
  function showError(msg){
    Toastify({
      text:msg,
      backgroundColor:'#C0392B',
      gravity:'bottom'
    }).showToast();
  }
  return (
    <div className="bg-light container checkout-form d-flex flex-column justify-content-center">
      {!finished ? (
        <>
          <div className="checkout-header">
            <h2 className="text-center">Completa el formulario</h2>
            <p className="text-center">
              Para terminar tu compra debes completar la siguiente informacion.
            </p>
          </div>
          <div className="checkout-inputs d-flex row">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="checkout-input"
              placeholder="Nombre"
            />
            <input
              onChange={(e) =>setEmail(e.target.value)}
              type="text"
              className="checkout-input"
              placeholder="alguien@example.com"
            />
            <input
              onChange={(e) => setCel(e.target.value)}
              type="text"
              className="checkout-input"
              placeholder="Telefono"
            />
          </div>
          <button
            onClick={handleClick}
            className="checkout-submit btn btn-primary"
          >
            Enviar
          </button>
        </>
      ) : (
        <div className="finished checkout-form">
          <div className="checkout-header">
            <h2 className="text-center">Compra terminada</h2>
          </div>
          <div className="row">
            <b className="col-md">Nombre:</b><p className="col">{name}</p>
            <b className="col-md">Telefono:</b><p className="col">{cel}</p>
            <b className="col-md">Mail:</b><p className="col">{email}</p>
          </div>
          <div className="checkout-items">
            {cart.map((item) => (
              <div key={item.id} className="row">
                <input disabled={true} type="text" className="col-sm-3" value={item.id} />
                <input disabled={true} type="text" value={item.title} className="col-sm-5" />
                <input
                  disabled={true}
                  type="text"
                  value={item.quantity}
                  className="col-sm-1 text-center"
                />
                <input
                  disabled={true}
                  type="text"
                  value={`$${item.quantity * item.price}`}
                  className="col-sm-3 text-center"
                />
              </div>
            ))}
          </div>
          <h2 className="total-price">TOTAL: ${getTotalBuy()}</h2>
        </div>
      )}
    </div>
  );
}
