import './Card.css';

const ItemsDetail = (props) => {

  const {name, precio , img} = props;
    return (
    <div className="card w-96 bg-base-100 shadow-xl cardContainer">
      <figure><img src={`${img}`} alt={name} height='250' width='200' /></figure> 
      <div className="card-body">
        <h2 class="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{`${precio} USD`}</div> 
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  )
}

export default ItemsDetail
