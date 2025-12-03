// src/components/Cart/CartItem.jsx
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-4 col-md-3">
          <img src={item.image} className="img-fluid rounded-start" alt={item.name} style={{height: "100%", objectFit: "cover"}} />
        </div>
        <div className="col-8 col-md-9">
          <div className="card-body d-flex justify-content-between h-100">
            <div>
              <h5 className="card-title">{item.name}</h5>
              <p className="text-muted">${item.price} × {item.quantity}</p>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-end">
              <h5 className="text-primary">${item.price * item.quantity}</h5>
              <button 
                onClick={() => removeItem(item.id)} 
                className="btn btn-sm btn-danger"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;