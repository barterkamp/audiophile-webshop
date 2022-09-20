import React from "react";
import Cart from "./icon-cart.svg";
import CartModal from "../cart-modal-component/CartModal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { totalQuantity } = useSelector((state) => state.cart);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div className="cart-icon-container">
        <img
          className="cart-icon"
          src={Cart}
          alt="shopping cart icon"
          role="button"
          tabIndex="0"
          onClick={() => setIsOpen(true)}
        />
        <span className="cart-count font-white">{totalQuantity}</span>
      </div>
      {isOpen && <CartModal setIsOpen={setIsOpen} />}
    </>
  );
};

export default CartIcon;
