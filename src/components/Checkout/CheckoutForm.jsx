import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';  // ← ESTO FALTABA
import { db } from '../../firebase/firebase';
import { Link } from 'react-router-dom';

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const order = {
      buyer: formData,
      items: cart.map(({ id, name, price, quantity }) => ({ id, name, price, quantity })),
      total: totalPrice,
      date: serverTimestamp()
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al crear orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-success p-5">
          <h1>¡Compra realizada con éxito!</h1>
          <h3>Tu número de orden es:</h3>
          <h2 className="text-primary fw-bold">{orderId}</h2>
          <Link to="/" className="btn btn-primary btn-lg mt-4">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Finalizar compra</h1>
          <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
            <div className="mb-3">
              <label className="form-label">Nombre completo</label>
              <input required name="name" value={formData.name} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input required type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input required name="phone" value={formData.phone} onChange={handleChange} className="form-control" />
            </div>
            <button type="submit" disabled={loading} className="btn btn-success btn-lg w-100">
              {loading ? 'Procesando...' : 'Confirmar compra'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;