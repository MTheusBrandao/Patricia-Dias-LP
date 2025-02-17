import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { IoLogoInstagram } from "react-icons/io5";


const Header = () => {
  return (
    <header className="header">
      <a href='#'><h1>Patricia Dias</h1></a>
      <nav>
        <ul>
          <li><a className='home' href="/">Home</a></li>
          <li><a className='projects' href="/projects">Projetos</a></li>
          <li><a className='about' href="/about">Sobre Nós</a></li>
          <li><a className='instagram' href="https://www.instagram.com/patriciadias.arquitetura/"><IoLogoInstagram /></a></li>
          <li><a className='contact' href="/contact">Faça seu Orçamento</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;