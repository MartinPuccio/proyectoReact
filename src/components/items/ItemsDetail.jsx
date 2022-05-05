import { Link, useParams } from 'react-router-dom';
import './Card.css';

const ItemsDetail = (props) => {

  

  const {name, precio , img, description} = props;
    return (
    <div className="card w-96 bg-base-100 shadow-xl cardContainer">
      <figure><img src={`${img}`} alt={name} height='250' width='200' /></figure> 
      <div className="card-body">
        <h2 class="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{`${precio} USD`}</div>
          <button className="badge badge-outline">Comprar</button>
        </div>
      </div>
    </div>
  )
}

export default ItemsDetail
