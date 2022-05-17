import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { useAppContext } from "../context/AppContext";


const ItemCount = (props) => {
  const { initial, stock, onAdd, id} = props;

  const [count, setCount] = useState(initial);

  
  const {addToCart} = useCartContext()
  const {products} = useAppContext()


  const addCount = () => {
    let hasStock = stock - count;
    if (hasStock > 0) {
      setCount(count + 1);
    }
  };

  const lessCount = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const handleClick = (id, cantidad) => {
    const findProduct = products.find((prod) => prod.id === id)

    if (!findProduct) {
      alert("Error")
      return
    }

    const total = findProduct.price * cantidad
    findProduct.total = total

    addToCart(findProduct, cantidad)
    onAdd(count)
  }

  return (
    <>
    <div className="btn btn-lg">
      <button onClick={lessCount}>-</button>
      <strong>{count}</strong>
      <button onClick={addCount}>+</button>
    </div>
    <div className="btn btn-lg">
      <button type="button" onClick={() => handleClick(id, count)}>Add to cart</button>
    </div>
    </>
  );
};

export default ItemCount;