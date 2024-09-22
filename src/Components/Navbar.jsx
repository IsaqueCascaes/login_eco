import React from "react";
import "../css/Produtos.css";

// Componente NavBar
export const NavBar = () => {
  return (
    <nav className="barra-navegacao">
      <div className="logo">
        <h1>EcoFinder</h1>
      </div>

      <div className="barra-pesquisa">
        <input type="text" placeholder="Procure seu produto" />
      </div>

      <ul className="links-navegacao">
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
};
