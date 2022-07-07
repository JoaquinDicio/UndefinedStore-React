import React from 'react'
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa'

export default function SearchBar({searchItem}) {

    return (
    <div className='searchBar-container d-flex justify-content-center'>
        <input placeholder='¿Que estas buscando?' onChange={(e)=>searchItem(e.target.value)} className='searchBar' type="text" />
        <button className=''><FaSearch/></button>
    </div>
  )
}
