// src/components/NavBar/NavBar.jsx
import { Link, useNavigate } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">SneakerStore</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Todos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/nike">Nike</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/adidas">Adidas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/vans">Vans</Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;