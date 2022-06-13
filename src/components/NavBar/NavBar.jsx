import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { useState } from 'react'

function NavBar() {

    return (
        <>
            <nav className="navbar navbar-expand-md bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">UndefinedStore</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars toggler"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Todos</a></li>
                                    <li><a class="dropdown-item" href="#">Auriculares</a></li>
                                    <li><a class="dropdown-item" href="#">Teclados</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Carrito</a>
                            </li>
                            <CartWidget items={4} version={'shopping-cart-mobile'} />
                        </ul>
                    </div>
                    <CartWidget items={4} version={'shopping-cart'} />
                </div>
            </nav>
        </>
    )
}
export default NavBar