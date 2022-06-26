import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'
import {HiMenuAlt3} from 'react-icons/hi'
import {useContext,useState,useEffect} from 'react'
import { CartContext } from '../../context/CartContext'

function NavBar() {
    let {getLenght,cart}=useContext(CartContext)
    let[itemsQty,setItemsQty]=useState(0)
    useEffect(()=>{
        setItemsQty(getLenght)
    },[cart])
    return (
        <>
            <nav className="navbar navbar-expand-md bg-light">
                <div className="container-fluid">
                    <Link to='/home' className="navbar-brand">UndefinedStore</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <HiMenuAlt3 className='menu'/>  
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-center">
                            <li className="nav-item">
                                <Link className='nav-link' to='/home'>Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to='/home'>Todos</Link></li>
                                    <li><Link className="dropdown-item" to='/categoria/1'>Combos</Link></li>
                                    <li><Link className="dropdown-item" to='/categoria/2'>Auriculares</Link></li>
                                    <li><Link className="dropdown-item" to='/categoria/3'>Teclados</Link></li>
                                    <li><Link className="dropdown-item" to='/categoria/4'>Mouses</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to={'/cart'} className='nav-link'>Carrito</Link>
                            </li>
                            {
                                itemsQty>0?
                                <CartWidget items={itemsQty} version={'shopping-cart-mobile'} />
                                :
                                <></>
                            }
                            
                        </ul>
                    </div>
                    {
                        itemsQty>0?
                        <CartWidget items={itemsQty} version={'shopping-cart'} />
                        :
                        <></>
                    }
                    
                </div>
            </nav>
        </>
    )
}
export default NavBar