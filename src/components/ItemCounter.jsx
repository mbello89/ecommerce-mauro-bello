import React, { useState } from 'react'
import './ItemCounter.css'

const ItemCounter = ({ counter, initialValue, stock }) => {

const [contador, setContador] = useState(initialValue)

    const sumar = () => {
        if ( contador < stock){
            setContador( contador + 1)
        }
    }  
    
    const restar = () => {
        if( contador > 0) {
            setContador( contador - 1)
        }    
    }

    const add = () => {
        if(contador > 0) {
        console.log (contador,"Productos agregados")}
        else{
        console.log ('Debes agregar un producto en cantidad')}
    }
  return (
    <div className='container'>
        <h3> {counter} </h3>
        <div className='buttons'>
            <button className='sumrest' onClick={restar}>-</button>
            <span>{contador}</span>
            <button className='sumrest' onClick={sumar}>+</button>
            <button className='onAdd' onClick={add}>Add Cart</button>
        </div>
    </div>
  )
}

export default ItemCounter