// src/components/ItemListContainer/Item.jsx
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={product.image} className="card-img-top" alt={product.name} style={{height: "250px", objectFit: "cover"}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="text-muted">{product.brand}</p>
        <p className="fw-bold fs-4">${product.price}</p>
        {product.stock === 0 ? (
          <span className="badge bg-danger">Sin stock</span>
        ) : (
          <Link to={`/item/${product.id}`} className="btn btn-primary mt-auto">
            Ver detalle
          </Link>
        )}
      </div>
    </div>
  );
};

export default Item;