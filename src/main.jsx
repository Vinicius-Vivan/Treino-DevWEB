import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Certifique-se de que esse arquivo exista
import { ThemeProvider } from 'styled-components';
import App from './App.jsx';
import { theme } from './styles/theme.js';  // Verifique o caminho do seu tema

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
