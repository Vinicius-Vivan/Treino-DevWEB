// src/components/ItemList.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.large};
  width: 100%;

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    padding: ${props => props.theme.spacing.medium};
  }
`;

const Item = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  margin: ${props => props.theme.spacing.small};
  padding: ${props => props.theme.spacing.medium};
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    padding: ${props => props.theme.spacing.small};
    margin-bottom: 0.5rem;
  }
`;

const FilterInput = styled.input`
  padding: ${props => props.theme.spacing.small};
  margin-bottom: ${props => props.theme.spacing.medium};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: ${props => props.theme.spacing.small};
    font-size: 0.9rem;
  }
`;

const SortButton = styled.button`
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: ${props => props.theme.spacing.medium};

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 0.9rem;
    width: 100%;
    padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.large};
  }
`;

const ItemList = () => {
    // Estado para armazenar os itens
    const [items, setItems] = useState([
        { id: 1, name: 'Item A', category: 'Categoria 1' },
        { id: 2, name: 'Item B', category: 'Categoria 2' },
        { id: 3, name: 'Item C', category: 'Categoria 1' },
        { id: 4, name: 'Item D', category: 'Categoria 3' },
        { id: 5, name: 'Item E', category: 'Categoria 2' },
    ]);

    // Estado para armazenar o filtro e a ordem de classificação
    const [filter, setFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' ou 'desc'

    // Função para filtrar os itens
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.category.toLowerCase().includes(filter.toLowerCase())
    );

    // Função para ordenar os itens
    const sortedItems = filteredItems.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    // Função para alternar a ordem de classificação
    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <ListWrapper>
            <FilterInput
                type="text"
                placeholder="Filtrar itens..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <SortButton onClick={toggleSortOrder}>
                Ordenar: {sortOrder === 'asc' ? 'Crescente' : 'Decrescente'}
            </SortButton>

            {sortedItems.map(item => (
                <Item key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                </Item>
            ))}
        </ListWrapper>
    );
};

export default ItemList;
