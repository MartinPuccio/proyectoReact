import { Link } from "react-router-dom";
import CartButton from "../cart/CartButton";
import { useCartContext } from "../../context/CartContext";
import "./NavBar.css";

const NavBar = () => {
  const { cart } = useCartContext();

  const hasCart = cart.length > 0;
  
  let totalInCart = 0;
  cart.map(item => totalInCart += item.quantity)

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">DETODOShop</Link>
      </div>
      <div>
        <nav className="navbar">
          <Link to={`/ItemList/weomensCloth`}>Mujeres</Link>
          <Link to={"/ItemList/MensCloth"}>Hombres</Link>
          <Link to={"/ItemList/Jewels"}>Joyas</Link>
          <Link to={"/ItemList/Electronics"}>Electronicos</Link>
        </nav>
      </div>
      {hasCart && <CartButton totalInCart={totalInCart} />}
    </header>
  );
};

export default NavBar;
