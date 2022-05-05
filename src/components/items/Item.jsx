import { Fragment } from "react";
import { Link } from "react-router-dom";

const Item = (props)=>{
    const {item} = props;
    return <Fragment>
    <div className="card w-96 bg-base-100 shadow-xl cardContainer">
      <figure><img src={`${item.image}`} alt={item.title} height='250' width='200' /></figure> 
      <div className="card-body">
        <h2 class="card-title">
          {item.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{`${item.price} USD`}</div> 
          <Link to={`/productos/${item.id}`} className="badge badge-outline">Details</Link>
        </div>
      </div>
    </div>
    </Fragment>
}

export default Item;