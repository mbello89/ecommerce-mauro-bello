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
        alert ('Error. Debe seleccionar una cantidad mayor a 0')}
    }
  return (
    <div className='container'>
        <div className="card">
            <div className="card-header">
                Titulo
            </div>
            <div className="card-body">
                <img src="" alt="" />
                Descripcion
            </div>
            <div className="card-footer">
                <button className='button' onClick={substractToCounter}>-</button>
                <span className='counter'>{contador}</span>
                <button className='button' onClick={addToCounter}>+</button>
                <button className='add-cart' onClick={add}>Agregar al carrito</button>
            </div>    
        </div>
    </div>
  )
}

export default ItemCounter