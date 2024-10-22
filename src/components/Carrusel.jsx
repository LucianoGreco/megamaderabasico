import React from 'react';
import styled, { keyframes } from 'styled-components';
import { mensajeSlider, logoImage } from './data'; // Importa los mensajes y la imagen del logo

// Keyframes para la animación de desplazamiento continuo
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

// Contenedor principal del carrusel
const CarouselContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100vw;
  height: 100px;
  // background-color: rgba(0, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
  margin: 5px 0;
  backdrop-filter: blur(10px); /* Añadir desenfoque en el fondo si se desea */
`;

// Contenedor de los elementos del carrusel
const CarouselInner = styled.div`
  display: flex;
  align-items: center;
  width: max-content; /* Permite que el contenido se ajuste al ancho del contenido */
  height: 100%;
  animation: ${scroll} 20s linear infinite; /* Velocidad del carrusel */
`;

// Estilo de cada mensaje
const Message = styled.div`
  display: inline-block;
  font-size: 4.5rem;
  white-space: nowrap;
  color: rgba(0, 0, 0, 1);
  flex-shrink: 0;
`;

// Estilo para la imagen del logo dentro del mensaje
const LogoImage = styled.img`
  height: 80px;
  vertical-align: middle;
  margin: 0 10px;
`;

const Carrusel = () => {
  const messages = mensajeSlider.concat(mensajeSlider); // Duplicar los mensajes para el efecto continuo

  return (
    <CarouselContainer>
      <CarouselInner>
        {/* Renderizamos los mensajes duplicados */}
        {messages.map((mensaje, index) => (
          <Message key={index}>
            {/* Reemplaza el marcador {logo} por la imagen */}
            {mensaje.split('{logo}').map((part, i) => (
              <React.Fragment key={i}>
                {part.replace(/&nbsp;/g, '\u00A0')} {/* Reemplaza &nbsp; con espacios no rompibles */}
                {i < mensaje.split('{logo}').length - 1 && <LogoImage src={logoImage} alt="Logo" />}
              </React.Fragment>
            ))}
          </Message>
        ))}
      </CarouselInner>
    </CarouselContainer>
  );
};

export default Carrusel;
