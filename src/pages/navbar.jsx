import React from "react";
import "../css/Produtos.css";

// Componente NavBar
const NavBar = () => {
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

// Componente ProductForm
const ProductForm = () => {
  return (
    <div className="form-container">
      <div className="lado-esquerdo">
        <h2>Adicione a foto do produto</h2>
        <div className="imagem-upload">
          {/* Simulação da área de upload */}
          <div className="imagem-placeholder">Upload de Imagem</div>
        </div>
      </div>

      <div className="lado-direito">
        <div className="tarefa">
          <h3>Nome do produto</h3>
          <input type="text" placeholder="Adicione o nome do produto" />
        </div>

        <div className="tarefa">
          <h3>Empresa responsável</h3>
          <select>
            <option value="" disabled selected>
              Selecione a empresa
            </option>
            <option value="empresaX">Empresa X</option>
            <option value="empresaY">Empresa Y</option>
          </select>
        </div>

        <div className="tarefa">
          <h3>Categoria do produto</h3>
          <select>
            <option value="" disabled selected>
              Selecione a categoria
            </option>
            <option value="categoria1">Categoria 1</option>
            <option value="categoria2">Categoria 2</option>
          </select>
        </div>

        <div className="tarefa">
          <h3>Nível do produto</h3>
          <select>
            <option value="" disabled selected>
              Nível do produto
            </option>
            <option value="ausente">Ausente</option>
            <option value="leve">Leve</option>
            <option value="moderado">Moderado</option>
            <option value="critico">Crítico</option>
          </select>
        </div>
      </div>
      
      <div className="areatextos">
        <div className="tarefa">
          <h3 className="titulo-separador">Ingredientes do produto</h3>
          <textarea placeholder="Adicione aqui, os ingredientes do produto" className="large" />
        </div>
        <div className="tarefa">
          <h3 className="titulo-separador">Razão de ser prejudicial</h3>
          <textarea placeholder="Adicione aqui, o motivo do produto ser prejudicial para o meio ambiente" />
        </div>
        <button className="publicar-btn">Publicar</button>
      </div>
    </div>
  );
};

export { NavBar, ProductForm };
