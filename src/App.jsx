import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';
import FavoritesPage from './pages/FavoritesPage';

export default function App() {
  return (
    <BrowserRouter>
      {/* Full-width navbar */}
      <Navbar />

      {/* Centered page content */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/employee/:seed/:id" element={<DetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
