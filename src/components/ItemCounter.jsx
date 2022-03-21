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
        console.log ('Debes agregar un producto en cantidad')}
    }
  return (
    <div className='container'>
        <div className='buttons'>
            <button className='sumrest' onClick={substractToCounter}>-</button>
            <span>{contador}</span>
            <button className='sumrest' onClick={addToCounter}>+</button>
            <button className='onAdd' onClick={add}>Add Cart</button>
        </div>
    </div>
  )
}

export default ItemCounter