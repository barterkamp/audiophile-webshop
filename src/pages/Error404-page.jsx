import React from "react";
import Error from "./404-Error.png";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container">
      <div className="flex-center">
        <img className="error404" src={Error} alt="" />
        <div>
        <Link to="/" className="goback-link">
          Go Back
        </Link>
      </div>
      </div>
      
    </div>
  );
};

export default Error404;
