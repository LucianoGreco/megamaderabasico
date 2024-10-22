// src/components/Cookies.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const BackButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const Cookies = () => {
  return (
    <Container>
      <Title>Política de Cookies</Title>
      <Section>
        <h2>1. ¿Qué son las Cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se colocan en su dispositivo cuando visita nuestro sitio web. Se utilizan para mejorar su experiencia en el sitio.
        </p>
        <h2>2. Tipos de Cookies que Utilizamos</h2>
        <p>
          Utilizamos cookies para recordar sus preferencias, analizar el tráfico del sitio y mejorar la funcionalidad del sitio web. Esto incluye cookies de sesión y cookies persistentes.
        </p>
        <h2>3. Cómo Puede Controlar las Cookies</h2>
        <p>
          Puede controlar y gestionar las cookies a través de la configuración de su navegador. Sin embargo, tenga en cuenta que deshabilitar las cookies puede afectar la funcionalidad del sitio web.
        </p>
        <h2>4. Modificaciones</h2>
        <p>
          Podemos actualizar esta política de cookies en cualquier momento. Los cambios se publicarán en esta página.
        </p>
        <p>Última actualización: [Fecha]</p>
      </Section>
      <BackButton to="/">Volver a la página principal</BackButton>
      <nav>
        <Link to="/terminos">Términos y Condiciones</Link> | 
        <Link to="/privacidad">Política de Privacidad</Link>
      </nav>
    </Container>
  );
};

export default Cookies;
