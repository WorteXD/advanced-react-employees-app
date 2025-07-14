// src/main.jsx
import React        from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import './index.css';
import App from './App.jsx';

// **Import your providers**
import { ApiConfigProvider }  from './context/ApiConfigContext';
import { FavoritesProvider }  from './context/FavoritesContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    {/* Provide API config context */}
    <ApiConfigProvider>
      {/* Provide Favorites context */}
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ApiConfigProvider>
  </StrictMode>,
);
