// src/components/Terminos.jsx
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

const Terminos = () => {
  return (
    <Container>
      <Title>Términos y Condiciones</Title>
      <Section>
        <h2>1. Aceptación de los Términos</h2>
        <p>
          Al utilizar nuestro sitio web, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.
        </p>
        <h2>2. Uso del Sitio Web</h2>
        <p>
          Usted debe usar el sitio web de acuerdo con la ley aplicable y con estos términos y condiciones. No debe utilizar el sitio web de manera que cause o pueda causar daño al sitio web o a la disponibilidad o accesibilidad del mismo.
        </p>
        <h2>3. Propiedad Intelectual</h2>
        <p>
          Todo el contenido del sitio web, incluidos textos, gráficos, logotipos, imágenes y software, es propiedad de [Su Empresa] o de sus licenciantes y está protegido por las leyes de propiedad intelectual.
        </p>
        <h2>4. Limitación de Responsabilidad</h2>
        <p>
          [Su Empresa] no será responsable de ningún daño directo, indirecto, incidental o consecuente que resulte del uso o la imposibilidad de usar el sitio web.
        </p>
        <h2>5. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor tan pronto como se publiquen en el sitio web.
        </p>
        <p>Última actualización: [Fecha]</p>
      </Section>
      <BackButton to="/">Volver a la página principal</BackButton>
      <nav>
        <Link to="/privacidad">Política de Privacidad</Link> | 
        <Link to="/cookies">Política de Cookies</Link>
      </nav>
    </Container>
  );
};

export default Terminos;
