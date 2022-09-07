import React from 'react';
import '../styles/Card.css';

export default function Card(props) {
  // acá va tu código
  return(
    <div className='contenedor-card'>
        <button className='boton' onClick={props.onClose}>X</button>
        <h5>{props.name}</h5>
        <div className='info'>
          <p>Min:</p>
          <p>{props.min}°</p>
          <p>Max:</p>
          <p>{props.max}°</p>
        </div>
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='Icono del clima'/>
    </div>
  );
};