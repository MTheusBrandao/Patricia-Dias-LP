import React from "react";
import "./HeroSection.css";
import minhaImagem from "../../assets/Imagem_Hero.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>PATRICIA DIAS</h1>
          <p>Sua solução em arquitetura e design de interiores.</p>
        </div>
        <div className="hero-image">
          <img src={minhaImagem} alt="Imagem de exemplo" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
