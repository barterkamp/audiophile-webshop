import React from "react";
import CheckoutForm from "../form-component/CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";

const CheckoutComponent = () => {
  return (
    <>
      <CheckoutForm />
      <CheckoutSummary />
    </>
  );
};

export default CheckoutComponent;
