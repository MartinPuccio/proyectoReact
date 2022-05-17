import { useCartContext } from "../context/CartContext";

import "./ItemCart.css";

const ItemCart = (props) => {
  const { cart, addToCart, deleteFromCart } = useCartContext();
  const { title, price, quantity, id, total } = props.item;

  const addItemHandler = (id, quantity) => {
    const findProduct = cart.find((prod) => prod.id === id);
    if (!findProduct) {
      alert("Error");
      return;
    }

    findProduct.total += findProduct.price;

    addToCart(findProduct, quantity);
  };
  const removeItemHandler = (product, quantity) => {
    const findProduct = cart.find((prod) => prod.id === product.id);

    if (!findProduct) {
      alert("Error");
    }
    findProduct.total -= findProduct.price;

    deleteFromCart(findProduct, quantity);
  };

  return (
    <li className="cart-item">
      <div>
        <h2>{title}</h2>
        <div className="summary">
          <span className="price">{price}</span>
          <span className="amount">x {quantity}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={() => removeItemHandler(props.item, 1)}>-</button>
        <button onClick={() => addItemHandler(id, 1)}>+</button>
      </div>
    </li>
  );
};

export default ItemCart;