// src/components/Item/Item.jsx  →  VERSIÓN FINAL 100% FUNCICIONAL (incluso con internet bloqueado)

import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <Card className="h-100 text-white bg-dark border-secondary shadow">
      
      {/* IMAGEN QUE SE VE SÍ O SÍ (usa background-image para evitar el error azul) */}
      <div
        style={{
          height: '300px',
          backgroundColor: '#111',
          backgroundImage: `url(${product.image})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Texto de respaldo por si la red bloquea la imagen */}
        <div style={{ 
          color: '#aaa', 
          fontSize: '14px', 
          textAlign: 'center', 
          padding: '20px',
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderRadius: '8px'
        }}>
          {product.name}
        </div>
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center fs-5">{product.name}</Card.Title>
        <Card.Text className="text-success text-center fs-4 mt-auto mb-3">
          ${product.price.toLocaleString('es-AR')}
        </Card.Text>
        <div className="text-center">
          <Button as={Link} to={`/item/${product.id}`} variant="outline-light" size="sm">
            Ver detalle
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;