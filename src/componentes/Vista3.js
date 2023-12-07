import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import miImagen from '../imagenes/producto1.jpeg';

const Vista3 = () => {
  const [carrito, setCarrito] = useState([]);
  const precioProducto = 200; // Guarda el precio como número para facilitar cálculos

  const agregarAlCarrito = () => {
    // Copia el carrito actual y agrega el nuevo producto
    setCarrito([...carrito, { nombre: "Crema de Pure Skin", precio: precioProducto }]);
  };

  const calcularTotal = () => {
    // Suma los precios de todos los productos en el carrito
    return carrito.reduce((total, producto) => total + producto.precio, 0).toFixed(2);
  };

  return (
    <div style={{ textAlign: 'left', marginTop: '16px' }}>
      <Link to="../Vista">
        <p style={{ color: 'blue', cursor: 'pointer' }}>Volver</p>
      </Link>

      <img src={miImagen} alt="Imagen del lugar" style={{ width: '100%', maxWidth: '500px', marginBottom: '10px' }} />

      <p style={{ fontSize: '16px', color: 'black' }}>
La crema exfoliante es un producto para la piel que elimina células muertas, limpia los poros y mejora la textura cutánea. Contiene partículas exfoliantes, ya sean físicas o químicas, para renovar la piel y darle un aspecto radiante. Es importante usarla con moderación para evitar irritaciones.</p>

      <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'green' }}>Precio: ${precioProducto}</p>

      <button onClick={agregarAlCarrito}>Agregar al carrito</button>

      <div style={{ marginTop: '20px' }}>
        <h2>Carrito de Compras</h2>
        <ul>
          {carrito.map((producto, index) => (
          <li key={index} style={{ color: 'red' }}>{producto.nombre} - ${producto.precio.toFixed(2)}</li>

          ))}
        </ul>
        <p>Total: ${calcularTotal()}</p>
      </div>
    </div>
  );
};

export default Vista3;
