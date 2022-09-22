import React from "react";
import { useState, useEffect } from "react";

const CheckoutForm = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i);
    // for email validation
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid e-mail format";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }
    if (!values.zipCode) {
      errors.zipCode = "Zip Code is required";
    }
    if (!values.city) {
      errors.city = "City is required";
    }
    if (!values.country) {
      errors.country = "Country is required";
    }
    return errors;
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="checkout-form"
        className="checkout-form"
      >
        <h5 className="checkout-header">checkout</h5>
        <span className="subtitle checkout-subtitle margin-small block">
          billing details
        </span>
        <div className="checkout-block">
          <div className="input-group">
            <div className="label">
              <label htmlFor="name">Name</label>
              <p className="error">{formErrors.name}</p>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <div className="label">
              <label htmlFor="email">Email Address</label>
              <span className="error">{formErrors.email}</span>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <div className="label">
              <label htmlFor="phone">Phone Number</label>
              <span className="error">{formErrors.phone}</span>
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <span className="subtitle checkout-subtitle margin-small block">
          Shipping info
        </span>
        <div className="checkout-block">
          <div className="input-group full-width">
            <div className="label">
              <label htmlFor="address">Address</label>
              <span className="error">{formErrors.address}</span>
            </div>
            <input
              type="text"
              id="address"
              name="address"
              value={formValues.address}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <div className="label">
              <label htmlFor="zip-code">Zip Code</label>
              <span className="error">{formErrors.zipCode}</span>
            </div>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formValues.zipCode}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <div className="label">
              <label htmlFor="text">City</label>
              <span className="error">{formErrors.city}</span>
            </div>
            <input
              type="text"
              id="city"
              name="city"
              value={formValues.city}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <div className="label">
              <label htmlFor="text">Country</label>
              <span className="error">{formErrors.country}</span>
            </div>
            <input
              type="text"
              id="country"
              name="country"
              value={formValues.country}
              onChange={handleChange}
            />
          </div>
        </div>

        <span className="subtitle checkout-subtitle margin-small block">
          Payment Method
        </span>
        <p>
          <em>
            Hier zouden de verschillende payment opties komen te staan bij een
            echte webshop.
          </em>
        </p>
      </form>
    </>
  );
};

export default CheckoutForm;
