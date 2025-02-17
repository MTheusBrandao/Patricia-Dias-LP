import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Header />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Adicione outras rotas aqui */}
      </Routes>
    </Router>
  );
}

export default App;