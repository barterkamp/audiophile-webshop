import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

import { UserContext } from "../../features/user/userContext";

import { toast } from "react-toastify";

const SignUpForm = () => {
  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // displayName refers to displayName in userDocReference (see firebase.jsx)

  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);

      toast.success("Sign-up successfull", {
        position: "top-right",
        theme: "colored",
      });

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email allready in use");
      } else {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <div className="sign-up-form">
        <header>
          <h5>I don't have an account</h5>
          <span className="subtitle">Sign up with your email and password</span>
        </header>
        <form onSubmit={handleSubmit} className="authentication-form">
          <p className="bold">
            <label>Name</label>
            <input
              type="text"
              name="displayName"
              value={displayName}
              onChange={handleChange}
              required
            />
          </p>
          <p className="bold">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </p>
          <p className="bold">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </p>
          <p className="bold">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              required
            />
          </p>
          <button className="btn btn-primary" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
