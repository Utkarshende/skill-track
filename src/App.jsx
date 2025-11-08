import React, { useState, useCallback } from 'react';
import Header from './components/Header.jsx';
import CatalogPage from './components/CatalogPage.jsx';
import ProfilePage from './components/Profile.jsx';
import { BrowserRouter,Route,Routes } from 'react-router';
import Dashboard from './components/Dashboard.jsx';

function App() {
  return (
 <BrowserRouter>
      <Header />
      <main className="min-h-screen bg-gray-900 pt-6">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<h2 className="p-8 text-white">404 Not Found</h2>} />
        </Routes>
      </main>
    </BrowserRouter>)}

export default App;