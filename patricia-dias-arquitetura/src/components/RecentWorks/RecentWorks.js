import React from "react";
import { Link } from "react-router-dom";
import "./RecentWorks.css";
import ImagemGrande from "../../assets/imagem-grande.png";
import ImagemPequena1 from "../../assets/imagem-pequena-1.jpg";
import ImagemPequena2 from "../../assets/imagem-pequena-2.jpg";

const RecentWorks = () => {
  return (
    <div className="recent-works">
      <div className="left-column">
        <img
          className="personal-image"
          src={ImagemGrande}
          alt="Trabalho recente"
        />
        <a
          href="https://w.app/pdarquitetura"
          target="_blank"
          rel="noopener noreferrer"
          className="budget-button"
        >
          Solicitar Orçamento
        </a>
      </div>
      <div className="right-column">
        <div className="section-title">
          <h1>Patricia e seus trabalhos recentes</h1>
        </div>
        <div className="work-item">
          <h2>Projeto Residencial</h2>
          <img src={ImagemPequena2} alt="Trabalho recente" />
          <p>
            Descrição do projeto residencial. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
        <div className="work-item">
          <h2>Projeto Comercial</h2>
          <img src={ImagemPequena1} alt="Trabalho recente" />

          <p>
            Descrição do projeto comercial. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
