import React from "react";
import EarphonesContainer from "../components/categories-component/earphones-category-component/EarphoneContainer";

const Earphones = ({ products }) => {
  return (
    <>
      <header className="wrapper">
        <h2 className="heading">earphones</h2>
      </header>

      <EarphonesContainer products={products} />
    </>
  );
};

export default Earphones;
