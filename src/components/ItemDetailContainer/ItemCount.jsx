// src/components/ItemDetailContainer/ItemCount.jsx
import { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => count < stock && setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  return (
    <div className="d-flex align-items-center">
      <button className="btn btn-outline-dark" onClick={decrement}>-</button>
      <span className="mx-4 fs-3">{count}</span>
      <button className="btn btn-outline-dark" onClick={increment}>+</button>
      <button
        className="btn btn-primary ms-4"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;