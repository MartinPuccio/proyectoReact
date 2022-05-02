import { useState , useEffect } from "react"

import ItemsDetail from './ItemsDetail'

const ItemsDetailContainer = () => {

const [products, setProducts] = useState([])

useEffect(() => {
  dataFetch()
}, [])


const dataFetch = () => {
    const URL = "https://fakestoreapi.com/products"
    
    fetch(URL)
    .then (response => {
      console.log(response);
      return response.json()
    })
    .then (data => {
      console.log(data);
    setProducts(data)
    })

}  
    return (
    <div>
      {products.map( product => <ItemsDetail key={product.id} name={product.title}
      precio={product.price} img={product.image} />)}
    </div>
  )
}

export default ItemsDetailContainer
