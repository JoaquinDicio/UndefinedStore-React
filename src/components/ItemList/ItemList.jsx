import './ItemList.css'
import Item from '../Item/Item.jsx'
import { useEffect, useState } from 'react';

export default function ItemList({ products }) {//crea el componente y recibe el promise

    return (
        <>
            
                {products.map(
                    (product) => <div key={product.id} className='col-md-3 col-sm-4'>
                        <Item desc={product.description} price={product.price} key={product.id} title={product.title} pictureURL={product.pictureURL} id={product.id}/>
                    </div>//renderiza un item por cada producto
                )}
            
        </>
    )
}
