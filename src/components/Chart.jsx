import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import styled from 'styled-components';

// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend);

// Wrapper estilizado para os gráficos
const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Título estilizado
const ChartTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 20px;
`;

// Componente dos gráficos
const ChartComponent = () => {
    // Dados do gráfico de barras
    const barData = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
            {
                label: 'Vendas Mensais ($)',
                data: [1200, 1900, 3000, 2500, 2800, 3200],
                backgroundColor: 'rgba(52, 152, 219, 0.6)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Dados do gráfico de linha
    const lineData = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
            {
                label: 'Lucro Mensal ($)',
                data: [800, 1500, 2200, 1800, 2000, 2700],
                borderColor: 'rgba(39, 174, 96, 1)',
                backgroundColor: 'rgba(39, 174, 96, 0.3)',
                tension: 0.4,
            },
        ],
    };

    // Dados do gráfico de pizza
    const pieData = {
        labels: ['Produto A', 'Produto B', 'Produto C'],
        datasets: [
            {
                label: 'Vendas por Produto',
                data: [45, 25, 30],
                backgroundColor: ['#3498db', '#e74c3c', '#f1c40f'],
            },
        ],
    };

    return (
        <ChartWrapper>
            <ChartTitle>Gráfico de Vendas</ChartTitle>
            <Bar data={barData} options={{ responsive: true }} />

            <ChartTitle>Lucro Mensal</ChartTitle>
            <Line data={lineData} options={{ responsive: true }} />

            <ChartTitle>Distribuição de Produtos</ChartTitle>
            <Pie data={pieData} options={{ responsive: true }} />
        </ChartWrapper>
    );
};

export default ChartComponent;
