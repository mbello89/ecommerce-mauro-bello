import React from 'react'
import ItemCounter from './ItemCounter'

const ItemList = ({greeting, tittle, counter}) => {
  return (
    <div>
        <h1>
            {greeting}
        </h1>
        <h2>
            {tittle}
        </h2>
        <ItemCounter counter={counter} initialValue={1} stock={5}/>
    </div>
  )
}

export default ItemList