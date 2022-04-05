import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemCounter from './ItemCounter'

const ItemList = () => {

  const [listProductos, setListaProductos] = useState ([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()
  console.log(categoryId)

 

  //array de productos
  const productos = [
    {id: '01', tittle: 'Remera 1', descripcion: 'test test test', img: 'https://picsum.photos/200', stock: 50, category: 'remeras'},
    {id: '02', tittle: 'Remera 2', descripcion: 'test test test', img: 'https://picsum.photos/201', stock: 50, category: 'remeras'},
    {id: '03', tittle: 'Buzo 1', descripcion: 'test test test', img: 'https://picsum.photos/202', stock: 50, category: 'buzos'},
    {id: '04', tittle: 'Buzo 2', descripcion: 'test test test', img: 'https://picsum.photos/203', stock: 50, category: 'buzos'},
    {id: '05', tittle: 'Pantalon 1', descripcion: 'test test test', img: 'https://picsum.photos/204', stock: 50, category: 'pantalones'},
    {id: '06', tittle: 'Pantalon 2', descripcion: 'test test test', img: 'https://picsum.photos/205', stock: 50, category: 'pantalones'},
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
    .then ((res) => {

      if(categoryId) {
        setListaProductos( res.filter( (prod) => prod.category === categoryId ))
        } else {
          setListaProductos (res)
        }
      })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  },[categoryId])

  return (
    <div>
        {loading ? <p>Loading...</p> : listProductos.map((producto) => <ItemCounter producto={producto} key={producto.id} stock={5}/>)}
    </div>
  )
}

export default ItemList