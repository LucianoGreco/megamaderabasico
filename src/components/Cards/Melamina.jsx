import React, { useState } from 'react';
import styled from 'styled-components';
import { Melaminas, backgroundImage } from '../data'; // Importamos los datos de Melaminas y la imagen de fondo

const Container = styled.div`
  padding: 20px;
  background: url(${({ background }) => background}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px; /* Espacio entre tarjetas */
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  // border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1); /* Blanco con opacidad 0.8 */
  width: calc(25% - 20px); /* Ajustar el ancho para mostrar 4 tarjetas por línea */
  max-width: 300px;
  box-sizing: border-box; /* Incluir el padding y el borde en el ancho total */
  backdrop-filter: blur(10px); /* Añadir desenfoque en el fondo si se desea */
`;


const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Melamina = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(Melaminas.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = Melaminas.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <Container background={backgroundImage}>
      <CardContainer>
        {currentItems.map((melamina, index) => (
          <Card key={index}>
            <Image src={melamina.Imagen} alt={melamina.Color} />
            <h3>{melamina.Color}</h3>
            <p>Línea: {melamina.Línea}</p>
            <p>Medidas: {melamina.Medidas}</p>
          </Card>
        ))}
      </CardContainer>
      <ButtonGroup>
        <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </Button>
        <span>{`Página ${currentPage} de ${totalPages}`}</span>
        <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Siguiente
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Melamina;
