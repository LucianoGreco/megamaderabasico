// Banner.jsx
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { banners, titulos } from './data'; // Importación de los datos desde data.js
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

// Keyframes para la animación de las imágenes
const moveRight = keyframes`
  0% {
    transform: translateX(-50px);
  }
  50% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-50px);
  }
`;

// Estilos del contenedor principal
const BannerContainer = styled.div`
  position: relative;
  height: 100vh; /* Ocupa el 100% de la altura de la ventana */
  width: 100vw;  /* Ocupa el 100% del ancho de la ventana */
  overflow: hidden;
  margin: 0;     /* Asegúrate de que no haya márgenes */
  padding: 0;    /* Asegúrate de que no haya rellenos */
`;

// Estilos para las capas superficiales
const Layer = styled.div`
  position: absolute;
  top: 0;
  width: 100%; /* Ajusta al ancho del contenedor */
  height: 100%;
`;

const Layer1 = styled(Layer)`
  animation: ${moveRight} 10s ease-in-out infinite; /* Ajusta la duración y el tipo de animación */
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Layer3 = styled(Layer)`
  display: flex;
  flex-direction: column;
  justify-content: end; /* Centrado vertical */
  align-items: start; /* Centrado horizontal */
  z-index: 1; /* Asegura que los botones de navegación estén sobre la imagen */
  left: 10%; 
  top: -70%;
`;

// Estilos para la imagen
const Image = styled.img`
  width: 110vw; /* Ajusta al ancho del contenedor */
  height: 100vh;
  object-fit: cover; /* Mantiene la imagen adaptada al contenedor */
  position: absolute;
  top: 0;
  left: 0;
`;

// Estilos para los botones de navegación con símbolos negros
const NavButton = styled.button`
  background: none;
  border: none;
  color: rgba(0, 0, 0, 0.8); /* Color negro para los símbolos */
  font-size: 35px;
  cursor: pointer;
  padding: 0 10px;
  z-index: 2;

  &:hover {
    color: white;
  }
`;

// Contenedor para los botones
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Centrado horizontal */
  align-items: center; /* Alineación vertical */
  gap: 15px; /* Espacio entre los botones de navegación y el botón principal */
`;

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // Hook para navegar entre rutas

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 6000);

    return () => clearInterval(interval); // Limpia el intervalo cuando se desmonta el componente
  }, []);

  // Función para manejar la navegación según el título del botón
  const handleNavigation = () => {
    const title = titulos[currentSlide].toUpperCase();

    switch (title) {
      case "DISEÑOS":
        navigate('/disenio');
        break;
      case "NOVEDADES":
        navigate('/novedades');
        break;
      case "HERRAJES":
        navigate('/herrajes');
        break;
      case "SERVICIO":
        navigate('/servicio');
        break;
      case "MELAMINAS":
        navigate('/melamina');
        break;
      case "ENVIOS":
        navigate('/envio');
        break;
      default:
        break;
    }
  };

  return (
    <BannerContainer>
      <Layer1>
        <Image src={banners[currentSlide]} alt={`Slider ${currentSlide + 1}`} />
      </Layer1>

      <Layer3>
        <ButtonContainer>
          <NavButton onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + banners.length) % banners.length)}>
            &lt;
          </NavButton>
          {/* El botón principal hereda los estilos globales */}
          <button onClick={handleNavigation}>{titulos[currentSlide]}</button>
          <NavButton onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length)}>
            &gt;
          </NavButton>
        </ButtonContainer>
      </Layer3>
    </BannerContainer>
  );
};

export default Banner;
