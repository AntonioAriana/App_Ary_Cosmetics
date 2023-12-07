import React from 'react';
import { Link } from 'react-router-dom';
import miImagen from '../imagenes/producto2.jpeg';
import miImagen1 from '../imagenes/producto1.jpeg'
import miImagen2 from '../imagenes/producto3.jpeg'
import miImagen3 from '../imagenes/producto4.jpeg'
import miImagen4 from '../imagenes/producto5.jpeg'
import miImagen5 from '../imagenes/producto7.jpeg'

const Vista = () => {
  const nombreLugarStyle = {
    fontSize: '5px', // Ajusta el tamaño de fuente según tus preferencias
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0px' }}>
    <div style={{ position: 'relative', maxWidth: '500px', margin: 'auto' }}>
    </div>

      <h2>"La belleza comienza con el cuidado adecuado. Descubre nuestra colección y enamórate de tu piel."</h2>
      <br></br>
      <br></br>
      <br></br>
      {/* Primera fila de imágenes en horizontal */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', width: '60%' }}>
        <div style={{ textAlign: 'center' }}>
          <Link to="/Vista2">
            <img src={miImagen} alt="Mi Imagen" style={{ width: '100%', height: '80px', maxWidth: '500px', marginBottom: '20px' }} />
          </Link>
          <div style={nombreLugarStyle}>Acaxochitlan</div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/Vista3">
            <img src={miImagen1} alt="Mi Imagen" style={{ width: '100%', height: '80px', maxWidth: '500px', marginBottom: '20px' }} />
          </Link>
          <div style={nombreLugarStyle}>$ 150</div>
        </div>
      </div>

      {/* Segunda fila de imágenes en la parte de abajo */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', width: '70%' }}>
        <div style={{ textAlign: 'center' }}>
          <Link to="/Vista4">
            <img src={miImagen2} alt="Mi Imagen" style={{ width: '100%', height: '80px', maxWidth: '500px', marginBottom: '20px' }} />
          </Link>
          <div style={nombreLugarStyle}>$ 200</div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/Vista5">
            <img src={miImagen3} alt="Mi Imagen" style={{ width: '100%', height: '80px', maxWidth: '500px', marginBottom: '20px' }} />
          </Link>
          <div style={nombreLugarStyle}>$ 120</div>
        </div>
      </div>

      {/* Tercera fila de imágenes en la parte de abajo */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%' }}>
        <div style={{ textAlign: 'center' }}>
          <Link to="/Vista6">
            <img src={miImagen4} alt="Mi Imagen" style={{ width: '100%', height: '80px', maxWidth: '500px', marginBottom: '20px' }} />
          </Link>
          <div style={nombreLugarStyle}>$ 160</div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/Vista7">
            <img src={miImagen5} alt="Mi Imagen" style={{ width: '100%', height: '80px', maxWidth: '500px', marginBottom: '20px' }} />
          </Link>
          <div style={nombreLugarStyle}>$ 300</div>
        </div>
      </div>
    </div>
  );
};

export default Vista;
