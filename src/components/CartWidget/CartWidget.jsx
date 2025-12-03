// src/components/CartWidget/CartWidget.jsx
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className="btn btn-outline-light position-relative">
      <i className="bi bi-cart3 fs-4"></i>
      {totalQuantity > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;