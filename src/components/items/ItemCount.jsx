import { useState } from "react";


const ItemCount = (props) => {
  const { initial, stock, onAdd} = props;

  const [count, setCount] = useState(initial);

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

  return (
    <>
    <div className={props.className}>
      <button onClick={lessCount}>-</button>
      <strong>{count}</strong>
      <button onClick={addCount}>+</button>
    </div>
    <div>
      <button type="button" onClick={onAdd}>Add to cart</button>
    </div>
    </>
  );
};

export default ItemCount;