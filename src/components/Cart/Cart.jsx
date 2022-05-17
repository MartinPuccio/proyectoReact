import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext" 
import Modal from "../UI/Modal";
import ItemCart from "./ItemCart";
import "./Cart.css";
import Button from "../UI/Button";

const Cart = () => {
  const { cart } = useCartContext();
  console.log(cart);
  const hasCart = cart.length > 0;
  let totalCart = 0;
  cart.map((item) => (totalCart += item.total));
  return (
    <Modal>
      <div className="decoCart"></div>
      <div className="decoCartMiddle decoCart"></div>
      <div> Your Cart </div>
      {hasCart &&
        cart.map((item) => (
          <ul key={item.id}>
            <ItemCart item={item} />
          </ul>
        ))}
      <span className="amount btnCart">
        {totalCart.toFixed(2)}
      </span>
      {!hasCart && (
        <Button className="btnCart">
          <Link to="/">Back</Link>
        </Button>
      )}
      {hasCart && (
        <Link to="/">
          <Button className="btnCart">Finish</Button>
        </Link>
      )}
    </Modal>
  );
};
export default Cart;