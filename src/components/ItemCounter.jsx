import React from 'react'
import{ useState } from 'react'
import './ItemCounter.css'

const ItemCounter = ({ stock, producto }) => {

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
        alert (contador + ' Productos agregados al carrito')}
        else{
        alert ('Error. Debe seleccionar una cantidad mayor a 0')}
    }
  return (
    <div className='container'>
        <div className="card">
            <div className="card-header">
                {producto.tittle}
            </div>
            <div className="card-body">
                <img src={producto.img} alt="" />
                {producto.descripcion}
            </div>
            <div className="card-footer">
                <button className='button' onClick={substractToCounter}>-</button>
                <span className='counter'>{contador}</span>
                <button className='button' onClick={addToCounter}>+</button>
                <button className='add-cart' onClick={add} id="addButton">Agregar al carrito</button>
            </div>    
        </div>
    </div>
  )
}

export default ItemCounter