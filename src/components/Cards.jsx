// Cards.jsx
import React from "react";
import styled from "styled-components";
import { cardDataBox, cardDataMiniBox, titulos } from "./data";
import { useNavigate } from 'react-router-dom';
import GlobalStyle from './Global'; // Importamos los estilos globales

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(50% - 20px), 1fr));
  gap: 3px;
  width: calc(100vw);
  position: relative;
`;

const Card = styled.div`
  border: solid 1px black;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: end;
  align-items: end;
  border-radius: 3px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.5s ease;
  }

  &:hover {
    transform: translateY(-5px); /* Efecto de desplazamiento al hacer hover */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* Sombra al pasar el mouse por encima */
  }

  &:hover img {
    filter: grayscale(0%);
  }

  .content {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
`;

const LargeCard = styled(Card)`
  grid-row: span 2;
  width: 100%;
  height: 100%;
`;

const SmallCard = styled(Card)`
  width: 100%;
  height: 50vh;
`;

const Cards = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <GlobalStyle />
      <GridContainer>
        <LargeCard onClick={() => handleClick('/disenio')}>
          <img src={cardDataBox[0].image1} alt={cardDataBox[0].text} />
          <div className="content">
            <button>{titulos[0]}</button>
          </div>
        </LargeCard>

        <SmallCard onClick={() => handleClick('/novedades')}>
          <img src={cardDataMiniBox[0].image1} alt={cardDataMiniBox[0].text} />
          <div className="content">
            <button>{titulos[1]}</button>
          </div>
        </SmallCard>

        <SmallCard onClick={() => handleClick('/herrajes')}>
          <img src={cardDataMiniBox[1].image1} alt={cardDataMiniBox[1].text} />
          <div className="content">
            <button>{titulos[2]}</button>
          </div>
        </SmallCard>

        <SmallCard onClick={() => handleClick('/servicio')}>
          <img src={cardDataMiniBox[2].image1} alt={cardDataMiniBox[2].text} />
          <div className="content">
            <button>{titulos[3]}</button>
          </div>
        </SmallCard>

        <LargeCard onClick={() => handleClick('/melamina')}>
          <img src={cardDataBox[1].image1} alt={cardDataBox[1].text} />
          <div className="content">
            <button>{titulos[4]}</button>
          </div>
        </LargeCard>

        <SmallCard onClick={() => handleClick('/envios')}>
          <img src={cardDataMiniBox[3].image1} alt={cardDataMiniBox[3].text} />
          <div className="content">
            <button>{titulos[5]}</button>
          </div>
        </SmallCard>
      </GridContainer>
    </>
  );
};

export default Cards;
