import './ItemList.css'
import Item from '../Item/Item.jsx'
import { useEffect, useState } from 'react';

export default function ItemList({ promise }) {//crea el componente y recibe el promise

    let [productList, setproductList] = useState([]) //crea el listado de productos

    promise.then(
        (response) => setproductList(response) //setea los productos en la lista
    )
        .catch(
            (error) => console.log(error)
        )

    return (
        <>
            {
                productList.map(
                    (product) => <div className='col-md-3 col-sm-4'><Item desc={product.description} price={product.price} key={product.id} title={product.title} pictureURL={product.pictureURL} /></div>//renderiza un item por cada producto
                )
            }
        </>
    )
}
