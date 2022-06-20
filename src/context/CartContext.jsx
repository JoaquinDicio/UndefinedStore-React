import { useState } from "react";
import { createContext } from "react";
export const CartContext=createContext(); //crea el contexto del carrito

const {Provider}=CartContext // desestructura el atributo provider del cartContext

export default function myProvider({children}) {
  return (
    <Provider>
        {children}
    </Provider>
  )
}