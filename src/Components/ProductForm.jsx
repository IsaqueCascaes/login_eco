import React, { useState } from "react";
import Popup from "./Popup"; // Importa o componente Popup para adicionar empresa
import PopupCategoria from "./PopupCategoria"; // Importa o componente PopupCategoria
import "../Css/Produtos.css";

export const ProductForm = () => {
  const [isPopupOpen, setPopupOpen] = useState(false); // Para adicionar empresa
  const [isCategoriaPopupOpen, setCategoriaPopupOpen] = useState(false); // Para cadastrar categoria

  const openPopup = () => setPopupOpen(true); // Abre o pop-up de adicionar empresa
  const closePopup = () => setPopupOpen(false); // Fecha o pop-up de adicionar empresa

  const openCategoriaPopup = () => setCategoriaPopupOpen(true); // Abre o pop-up de cadastrar categoria
  const closeCategoriaPopup = () => setCategoriaPopupOpen(false); // Fecha o pop-up de cadastrar categoria

  return (
    <>
      <div className="form-container">
        <div className="lado-esquerdo">
          <h2>Adicione a foto do produto</h2>
          <div className="imagem-upload">
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

            <div className="botoes-acao">
              <button className="botao-acao" onClick={openPopup}>
                Adicionar Empresa
              </button>
              <button className="botao-acao">Editar Empresa</button>
            </div>
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

            <div className="botoes-acao">
              <button className="botao-acao" onClick={openCategoriaPopup}>
                Cadastrar Categoria
              </button>
              <button className="botao-acao">Editar Categoria</button>
            </div>
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
      </div>

      <section className="area-textos">
        <div className="campo-texto">
          <h3>Ingredientes do Produto</h3>
          <textarea
            className="textarea-produto"
            placeholder="Adicione aqui, os ingredientes do produto"
          ></textarea>
        </div>

        <div className="campo-texto">
          <h3>Razão de Ser Prejudicial</h3>
          <textarea
            className="textarea-razao"
            placeholder="Adicione aqui, o motivo do produto ser prejudicial para o meio ambiente"
          ></textarea>
        </div>

        <div className="botao-container">
          <button className="botao-publicar">Publicar</button>
        </div>
      </section>

      {/* Pop-up de Adicionar Empresa */}
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
      {/* Pop-up de Cadastrar Categoria */}
      <PopupCategoria
        isOpen={isCategoriaPopupOpen}
        onClose={closeCategoriaPopup}
      />
    </>
  );
};
