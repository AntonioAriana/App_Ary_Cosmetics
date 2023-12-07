import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import miImagen from '../imagenes/producto7.jpeg';

const Vista7 = () => {
  const [carrito, setCarrito] = useState([]);
  const precioProducto = 350; // Guarda el precio como número para facilitar cálculos

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

      <p style={{ fontSize: '16px', color: 'black' }}>Un cepillo detangle es un accesorio diseñado para desenredar el cabello de manera suave y eficaz. Con cerdas flexibles y separadas, este cepillo ayuda a deshacer nudos y enredos sin causar tirones ni dañar el cabello. Ideal para todo tipo de cabello, el cepillo detangle facilita el peinado y reduce la rotura, dejando el cabello suave y manejable. Su diseño ergonómico lo hace cómodo de usar, siendo una herramienta práctica para el cuidado diario del cabello.</p>

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

export default Vista7;