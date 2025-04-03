// src/components/Header.jsx
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 20px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-left: 20px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-right: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.3s ease;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Meu Projeto</Logo>
      <Nav>
        <NavLink href="#form">Criar Conta</NavLink>
        <NavLink href="#items">Lista de Itens</NavLink>
        <NavLink href="#tasks">Tarefas</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
