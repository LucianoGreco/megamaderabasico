// src/components/Privacidad.jsx
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

const Privacidad = () => {
  return (
    <Container>
      <Title>Política de Privacidad</Title>
      <Section>
        <h2>1. Información que Recopilamos</h2>
        <p>
          Recopilamos información personal que usted nos proporciona cuando utiliza nuestro sitio web, como nombre, dirección de correo electrónico, etc.
        </p>
        <h2>2. Cómo Usamos su Información</h2>
        <p>
          Utilizamos su información para proporcionar y mejorar nuestros servicios, y para comunicarnos con usted sobre actualizaciones y ofertas.
        </p>
        <h2>3. Seguridad</h2>
        <p>
          Implementamos medidas de seguridad para proteger su información, pero no podemos garantizar la seguridad absoluta.
        </p>
        <h2>4. Modificaciones</h2>
        <p>
          Podemos actualizar esta política de privacidad en cualquier momento. Los cambios se publicarán en esta página.
        </p>
        <p>Última actualización: [Fecha]</p>
      </Section>
      <BackButton to="/">Volver a la página principal</BackButton>
      <nav>
        <Link to="/terminos">Términos y Condiciones</Link> | 
        <Link to="/cookies">Política de Cookies</Link>
      </nav>
    </Container>
  );
};

export default Privacidad;
