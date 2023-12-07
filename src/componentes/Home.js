import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import miImagen from '../imagenes/ary_cos.jpg'

const Home = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Esto asegurará que el contenido esté centrado verticalmente en toda la pantalla
        backgroundImage: `url(/public/imagenes/fondo.jpg)`, // Ruta de la imagen de fondo
        backgroundSize: 'cover', // Ajusta la imagen para cubrir todo el contenedor
      };
  return (
    <div style={containerStyle}>
      <img src={miImagen} alt="Mi Imagen" style={{ width: '90%', maxWidth: '500px', marginBottom: '20px' }} />
      <h2>"Inspira confianza, despierta belleza. Nuestros productos, tu secreto."</h2>
      
      {/* Botón con enlace a otra vista */}
      <Link to="/Vista">
        <button className="button">Ir a Otra Vista</button>
      </Link>
    </div>
  );
}

export default Home;
