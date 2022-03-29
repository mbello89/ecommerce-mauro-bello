import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemCounter from './ItemCounter'

const ItemList = () => {

  const [listProductos, setListaProductos] = useState ([])
  const [loading, setLoading] = useState(true)

  //array de productos
  const productos = [
    {id: '01', tittle: 'ramdom1', descripcion: 'test test test', img: 'https://picsum.photos/200'},
    {id: '02', tittle: 'ramdom1', descripcion: 'test test test', img: 'https://picsum.photos/201'},
    {id: '03', tittle: 'ramdom1', descripcion: 'test test test', img: 'https://picsum.photos/202'},
    {id: '04', tittle: 'ramdom1', descripcion: 'test test test', img: 'https://picsum.photos/203'},
    {id: '05', tittle: 'ramdom1', descripcion: 'test test test', img: 'https://picsum.photos/204'},
    {id: '06', tittle: 'ramdom1', descripcion: 'test test test', img: 'https://picsum.photos/205'},
  ]

  //promise
  const obtenerProductos = new Promise ((resolve, reject) => {

    let condition = true

    if (condition) {
      setTimeout(() => {
        resolve(productos)
      }, 1000);
    } else {
      reject ('Error. Algo salio mal')
    }
  })

  useEffect (() => {
    obtenerProductos
    .then ((res) => setListaProductos(res))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  },[])

  return (
    <div>
        {loading ? <p>Loading...</p> : listProductos.map((producto) => <ItemCounter producto={producto} key={producto.id} stock={5}/>)}
    </div>
  )
}

export default ItemList