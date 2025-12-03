// src/components/Cart/Cart.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary btn-lg mt-4">Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="mb-5">Tu Carrito</h1>
      
      <div className="row">
        <div className="col-lg-8">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="col-lg-4">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title">Resumen de compra</h3>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total:</strong>
                <strong className="text-primary fs-3">${totalPrice}</strong>
              </div>
              <Link to="/checkout" className="btn btn-success btn-lg w-100 mb-3">
                Finalizar compra
              </Link>
              <button onClick={clearCart} className="btn btn-outline-danger w-100">
                Vaciar carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;