// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './componentes/Home';
import './componentes/styles.css';
import Vista from './componentes/Vista';
import Vista2 from './componentes/Vista2';
import Vista3 from './componentes/Vista3';
import Vista4 from './componentes/Vista4';
import Vista5 from './componentes/Vista5';
import Vista6 from './componentes/Vista6';
import Vista7 from './componentes/Vista7';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Ary_Cosmetic</li>
        <li><Link to="/">Inicio</Link></li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <>
              <Home />
            </>
          }
        />

       <Route
          path="/Vista"
          element={
            <>
              <Navbar />
              <Vista />
            </>
          }
        />

        <Route
          path="/Vista2"
          element={
            <>
              <Navbar />
              <Vista2 />
            </>
          }
        />

        
        <Route
          path="/Vista3"
          element={
            <>
              <Navbar />
              <Vista3 />
            </>
          }
        />

        <Route
          path="/Vista4"
          element={
            <>
              <Navbar />
              <Vista4 />
            </>
          }
        />

       <Route
          path="/Vista5"
          element={
            <>
              <Navbar />
              <Vista5 />
            </>
          }
        />

        <Route
          path="/Vista6"
          element={
            <>
              <Navbar />
              <Vista6 />
            </>
          }
        />

        <Route
          path="/Vista7"
          element={
            <>
              <Navbar />
              <Vista7 />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

