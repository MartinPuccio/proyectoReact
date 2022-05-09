import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";


const ItemsDetail = (props) => {
  const [hideCount, sethideCount] =useState(false);

  const initial = 1;
  let stock = 5;

  const buyButtonHandler =()=>{
    sethideCount(true);
  }

    return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={`${props.img}`} alt={props.name} height='250' width='200' /></figure> 
      <div className="card-body">
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-lg">{!hideCount && <ItemCount initial={initial} stock={stock} onAdd={buyButtonHandler}/>}</button>
          {hideCount && <Link className="btn btn-lg" to="/navBar">Terminar Compra</Link>}
        </div>
      </div>
    </div>
  )
}

export default ItemsDetail
