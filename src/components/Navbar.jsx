import React, { useState } from 'react';
import styled from 'styled-components';
import LogoImage from '../assets/Logo.png'; // Importa la imagen desde la carpeta assets

const NavbarContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 150px;
`;

const MenuButton = styled.button`
  background-color: transparent;
  color: #000;
  border: 2px solid #000;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  padding: 10px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${props => (props.isOpen ? 'block' : 'none')};
  padding: 20px 0;
`;

const MenuItem = styled.a`
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    padding-left: 30px;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <NavbarContainer>
        <Logo src={LogoImage} alt="Logo" />
        <MenuButton onClick={toggleMenu}>Menu</MenuButton>
      </NavbarContainer>
      <MenuContainer isOpen={isMenuOpen}>
        <MenuItem href="#">Inicio</MenuItem>
        <MenuItem href="#">Productos</MenuItem>
        <MenuItem href="#">Materiales y Terminaciones</MenuItem>
        <MenuItem href="#">Showrooms</MenuItem>
        <MenuItem href="#">Catálogos</MenuItem>
        <MenuItem href="#">E-Service</MenuItem>
        <MenuItem href="#">Novedades</MenuItem>
        <MenuItem href="#">Contacto</MenuItem>
      </MenuContainer>
    </>
  );
};

export default Navbar;
