import React from "react";

import SignUpForm from "../components/form-component/SignUpForm";
import SignInForm from "../components/form-component/SignInForm";

import Footer from "../components/homepage/footer-component/Footer";

const SignIn = () => {
  return (
    <>
      <div className="container margin-medium">
        <main>
          <section className="form grid-col-12">
            <SignInForm />
            <SignUpForm />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
