import React from "react";
import CheckoutComponent from "../components/checkout-component/CheckoutComponent";
import Footer from "../components/homepage/footer-component/Footer";

const Checkout = () => {
  return (
    <>
      <main className="background-container">
        <div className="container grid-col-12">
          <CheckoutComponent />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
