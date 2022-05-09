import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Item = (props)=>{
    const {item} = props;
    return <Fragment>
    <div className="card w-96 bg-base-100 shadow-xl cardContainer">
      <figure><img src={`${item.image}`} alt={item.title} height='250' width='200' /></figure> 
      <div className="card-body">
        <h2 class="card-title">
          {item.title}
        </h2>
        <div className="card-actions justify-end">
          <div className="btn btn-active btn-primary">{`${item.price} USD`}</div> 
          <Link to={`/productos/${item.id}`} className="btn btn-info">Details</Link>
        </div>
      </div>
    </div>
    </Fragment>
}

export default Item;