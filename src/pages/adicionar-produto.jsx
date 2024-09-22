import React from "react";
import { NavBar } from "../Components/navbar";
import { ProductForm } from "../Components/productForm";
import "../Css/Produtos.css";

function AdicionarProdutos() {
  return (
    <>
      <NavBar />
      <ProductForm />
    </>
  );
}

export default AdicionarProdutos;
