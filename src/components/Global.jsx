import { createGlobalStyle } from 'styled-components';
import { backgroundImage } from './data';

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

  body {
   backdrop-filter: blur(10px); /* Añadir desenfoque en el fondo si se desea */
    background: url(${backgroundImage}) no-repeat center center fixed;
    background-size: cover;
    font-family: 'Poppins', sans-serif;
    padding: 0;
    border: 0;
    margin: 0;
    // cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="5" fill="black"/><circle cx="10" cy="10" r="8" fill="none" stroke="black" stroke-width="1"/></svg>') 10 10, auto;
    cursor: url(${backgroundImage},<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="5" fill="black"/><circle cx="10" cy="10" r="8" fill="none" stroke="black" stroke-width="1"/></svg>') 10 10, auto;
  }

  /* Asegúrate de que todos los elementos interactivos usen el puntero personalizado */
  *, *::before, *::after {
    cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="5" fill="black"/><circle cx="10" cy="10" r="8" fill="none" stroke="black" stroke-width="1"/></svg>') 10 10, auto;
  }

  /* Estilo para elementos interactivos para que no cambien el cursor */
  button, a, input, select, textarea {
    cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="5" fill="black"/><circle cx="10" cy="10" r="8" fill="none" stroke="black" stroke-width="1"/></svg>') 10 10, auto;
  }

  button {
  backdrop-filter: blur(10px); /* Añadir desenfoque en el fondo si se desea */
    font-size: ${props => props.buttonFontSize || '25px'};
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    border: none;
    padding: 10px 20px;
    transition: background-color 0.3s ease;
    font-weight: bold;
    border-radius: 5px;

    &:hover {
      background-color: #000;
    }
  }

  /* Otros estilos globales */
`;

export default Global;
