import React from "react";
import HeadphoneContainer from "../components/categories-component/headphones-category-component/HeadphoneContainer";

const Headphones = ({ products }) => {
  return (
    <>
      <header className="wrapper">
        <h2 className="heading">headphones</h2>
      </header>
        <HeadphoneContainer products={products} />
    </>
  );
};

export default Headphones;
