import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import Button from "../UI/Button";
import "./card.css";


const ItemsDetail = (props) => {
  const [hideCount, sethideCount] = useState(false);

  const initial = 1;
  let stock = 5;

  const buyButtonHandler = (count) => {
    sethideCount(true);
    console.log(count);
  }

  return (
    <div className="cardContainer">
      <figure><img src={`${props.img}`} alt={props.name} height='250' width='200' /></figure>
      <div className="card-body">
        <p>{props.description}</p>
        <div className="card-actions justify-end">
        {!hideCount && <ItemCount initial={initial} stock={stock} onAdd={buyButtonHandler} id={props.id} />}
       {hideCount && <button><Link className="btn btn-lg" to="/Cart">Terminar Compra</Link></button>}
        </div>
      </div>
    </div>
  )
}

export default ItemsDetail
