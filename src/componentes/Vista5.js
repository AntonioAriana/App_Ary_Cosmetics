import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import miImagen from '../imagenes/producto4.jpeg';

const Vista5 = () => {
  const [carrito, setCarrito] = useState([]);
  const precioProducto = 249; // Guarda el precio como número para facilitar cálculos

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

      <p style={{ fontSize: '16px', color: 'black' }}>El "Jabón de Barra para Manos Helping Help" es un producto de higiene diseñado para limpiar y lavar las manos. Suele contener agentes limpiadores y hidratantes para mantener la piel limpia y evitar la resequedad. Recomiendo revisar la etiqueta del producto para obtener información detallada sobre ingredientes y beneficios específicos.</p>

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

export default Vista5;