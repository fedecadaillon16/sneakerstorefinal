// src/components/ItemListContainer/ItemListContainer.jsx

import React from 'react';
import Item from '../Item/Item';                    // ← IMPORT CLAVE
import products from '../../data/products';        // ← TUS ZAPATILLAS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting = "¡Bienvenido a SneakerStore!" }) => {
  const { categoryId } = useParams();

  // FILTRADO PERFECTO
  const productosFiltrados = categoryId
    ? products.filter(p => p.category.toLowerCase() === categoryId.toLowerCase())
    : products;

  return (
    <Container className="my-5">
      <h2 className="text-center text-white mb-5">{greeting}</h2>

      {productosFiltrados.length === 0 ? (
        <h3 className="text-center text-muted">
          No hay productos en esta categoría
        </h3>
      ) : (
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {/* AQUÍ ESTÁ EL MAP QUE PREGUNTASTE */}
          {productosFiltrados.map(product => (
            <Col key={product.id}>
              <Item product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ItemListContainer;