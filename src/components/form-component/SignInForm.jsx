import { useState, useContext } from "react";
import {
  // signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase";

import { UserContext } from "../../features/user/userContext";
import { toast } from "react-toastify";

const SignInForm = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  // displayName refers to displayName in userDocReference (see firebase.jsx)

  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields({
      email: "",
      password: "",
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetFormFields();
      toast.success("Sign-in successfull", {
        position: "top-right",
        theme: "colored",
      });
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("email does not exist");
          break;
        default:
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
      <div className="sign-in-form">
        <header>
          <h5>I already have an account</h5>
          <span className="subtitle">Sign in with your email and password</span>
        </header>
        <form onSubmit={handleSubmit} className="authentication-form">
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
          <div className="buttons-container">
            <button className="btn btn-primary" type="submit">
              Sign In
            </button>
            {/* <button
              type="button"
              className="btn btn-secondary"
              onClick={signInWithGoogle}
            >
              sign in with google
            </button> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
