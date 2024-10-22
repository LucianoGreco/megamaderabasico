import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/Global';
import Banner from './components/Banner';
import Carrusel from './components/Carrusel';
import Cards from './components/Cards';
import Servicio from './components/Cards/Servicio';
import Disenio from './components/Cards/Disenio';
import Envios from './components/Cards/Envios';
import Herrajes from './components/Cards/Herrajes';
import Melamina from './components/Cards/Melamina';
import Novedades from './components/Cards/Novedades';
import Footer from './components/Footer';
import Terminos from './components/Politicas/Terminos'; // Importa el componente
import Privacidad from './components/Politicas/Privacidad'; // Importa el componente
import Cookies from './components/Politicas/Cookies'; // Importa el componente
import { backgroundImage } from './components/data';

const App = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const element = event.target;
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        const backgroundColor = computedStyle.backgroundColor;

        // Determine if background color is light or dark
        const isDark = /rgb\(0, 0, 0\)/.test(backgroundColor) || /rgba\(0, 0, 0/.test(backgroundColor);
        
        if (isDark) {
          document.body.classList.add('cursor-light');
          document.body.classList.remove('cursor-dark');
        } else {
          document.body.classList.add('cursor-dark');
          document.body.classList.remove('cursor-light');
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<><Banner /><Carrusel /><Cards /></>} />
        <Route path="/servicio" element={<Servicio />} />
        <Route path="/disenio" element={<Disenio />} />
        <Route path="/envios" element={<Envios />} />
        <Route path="/herrajes" element={<Herrajes />} />
        <Route path="/melamina" element={<Melamina />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <Carrusel />
      <Footer />
    </Router>
  );
};

export default App;
