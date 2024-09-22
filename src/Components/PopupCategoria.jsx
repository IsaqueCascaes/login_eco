import React from "react";
import "../Css/Popup.css";

export const PopupCategoria = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}>
          X
        </button>
        <h2>Cadastrar nova categoria</h2>

        {/* Section Categoria do Produto */}
        <section className="categoria-section">
          <h3>Categoria do Produto</h3>
          <input type="text" placeholder="Adicione a categoria" />
        </section>

        <button className="popup-save">Salvar</button>
      </div>
    </div>
  );
};

export default PopupCategoria;
