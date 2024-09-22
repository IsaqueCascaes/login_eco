import React from "react";
import "../Css/Popup.css";

export const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}>
          X
        </button>
        <h2>Adicionar Empresa</h2>

        {/* Section Nome da Empresa e Nota */}
        <section className="empresa-section">
          <div className="empresa-info">
            <h3>Nome da Empresa</h3>
            <input type="text" placeholder="Digite o nome da empresa" />
          </div>

          <div className="empresa-nota">
            <h3>Nota da Empresa</h3>
            <input
              type="number"
              placeholder="Digite a nota da empresa"
              min="0"
              max="10"
            />
          </div>
        </section>

        {/* Section Descrição da Empresa */}
        <section className="descricao-section">
          <h3>Descrição da Empresa</h3>
          <textarea
            className="textarea-descricao"
            placeholder="Adicione a descrição da empresa"
          ></textarea>
        </section>

        <button className="popup-save">Salvar</button>
      </div>
    </div>
  );
};

export default Popup;
