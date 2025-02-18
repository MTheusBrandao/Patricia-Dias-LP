import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { IoLogoInstagram } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <h1>PATRICIA DIAS</h1>
      </a>
      <nav>
        <ul>
          <li>
            <a className="home" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="projects" href="/projects">
              Projetos
            </a>
          </li>
          <li>
            <a className="about" href="/about">
              Sobre Nós
            </a>
          </li>
          <li>
            <a
              className="instagram"
              href="https://www.instagram.com/patriciadias.arquitetura/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://w.app/pdarquitetura"
              target="_blank"
              rel="noopener noreferrer"
              className="contact"
            >
              Faça seu Orçamento
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
