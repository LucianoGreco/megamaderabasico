// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  a {
    color: #fff;
    margin: 0 15px;
    font-size: 1rem;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0af;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #0af;
    }
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <Link to="/terminos">Términos y Condiciones</Link>
        <Link to="/privacidad">Política de Privacidad</Link>
        <Link to="/cookies">Política de Cookies</Link>
      </FooterLinks>
      
      <SocialIcons>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </SocialIcons>
      
      <FooterText>© 2024 Mega Madera. Todos los derecho reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
