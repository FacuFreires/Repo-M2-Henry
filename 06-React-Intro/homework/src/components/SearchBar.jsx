import React from 'react';
import '../styles/SearchBar.css';

export default function SearchBar(props) {
  // acá va tu código
  
  return(
  <div className='searchBar'>
    <input type="text" placeholder='Escriba una ciudad...' className='inputSearch'/>
    <button onClick={() => props.onSearch('Cualquier ciudad')} className='buttonSearch'>Agregar</button>
  </div>
  );
};