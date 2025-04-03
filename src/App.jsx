// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ItemList from './components/ItemList';
import ToDoList from './components/ToDoList';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

const Section = styled.section`
  flex: 1;
  background: ${({ theme }) => theme.colors.card};
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  min-width: 300px;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 15px;
  }
`;

const App = () => {
  return (
    <Container>
      <Header />
      <ContentWrapper>
        <Section>
          <h2>Criação de Conta</h2>
          <Form />
        </Section>

        <Section>
          <h2>Lista de Itens</h2>
          <ItemList />
        </Section>

        <Section>
          <h2>Lista de Tarefas</h2>
          <ToDoList />
        </Section>
      </ContentWrapper>
    </Container>
  );
};

export default App;
