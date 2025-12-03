// src/components/ItemDetailContainer/ItemDetail.jsx
import { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setQuantityAdded(true);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted fs-4">{product.brand}</p>
          <p className="fs-1 fw-bold text-primary">${product.price}</p>
          <p>{product.description}</p>
          <p className="text-success">Stock disponible: {product.stock}</p>

          {product.stock === 0 ? (
            <p className="alert alert-danger">Producto sin stock</p>
          ) : quantityAdded ? (
            <div>
              <Link to="/cart" className="btn btn-success btn-lg me-3">Terminar compra</Link>
              <Link to="/" className="btn btn-outline-primary btn-lg">Seguir comprando</Link>
            </div>
          ) : (
            <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;