import React, { useState } from 'react'
import './ItemCounter.css'

const ItemCounter = ({ stock }) => {

const [contador, setContador] = useState(0)

    const addToCounter = () => {
        if ( contador < stock){
            setContador( contador + 1)
        }
    }  
    
    const substractToCounter = () => {
        if( contador > 0) {
            setContador( contador - 1)
        }    
    }

    const add = () => {
        if(contador > 0) {
        console.log (contador,"Productos agregados")}
        else{
        console.log ('Error. Debe seleccionar una cantidad mayor a 0')}
    }
  return (
    <div className='container'>
        <div><h2>Selecione cantidad</h2></div>
        <div className='buttons'>
            <button className='sumrest' onClick={substractToCounter}>-</button>
            <span>{contador}</span>
            <button className='sumrest' onClick={addToCounter}>+</button>
            <button className='onAdd' onClick={add}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCounter