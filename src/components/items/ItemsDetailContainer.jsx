import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemsDetail from './ItemsDetail'

const ItemsDetailContainer = () => {

const {itemId} = useParams()

const [products, setProducts] = useState([])

useEffect(() => {
  dataFetch()
}, [])


const dataFetch = () => {
    const URL = "https://fakestoreapi.com/products"
    
    fetch(URL)
    .then (response => response.json())
    .then (data => {
      const product = data.find(prod => prod.id === +itemId)
      setProducts(product)
    })

}  
    return (
    <div>
      <ItemsDetail key={products.id} name={products.title}
      precio={products.price} img={products.image} description={products.description} id={products.id}/>
    </div>
  )
}

export default ItemsDetailContainer
