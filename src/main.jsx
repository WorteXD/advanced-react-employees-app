import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App.jsx';

// ─── Fix Leaflet’s default-marker icon URLs ───
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    'leaflet/dist/images/marker-icon-2x.png',
    import.meta.url
  ).href,
  iconUrl: new URL(
    'leaflet/dist/images/marker-icon.png',
    import.meta.url
  ).href,
  shadowUrl: new URL(
    'leaflet/dist/images/marker-shadow.png',
    import.meta.url
  ).href
});
// ────────────────────────────────────────────────

import { ApiConfigProvider } from './context/ApiConfigContext.jsx';
import { FavoritesProvider } from './context/FavoritesContext.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ApiConfigProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ApiConfigProvider>
  </StrictMode>
);
