import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-details")) {
      navigate("/products-add");
    }
  }, []);

  return (
    <div>
      <Header />
      <h1>Login</h1>
    </div>
  );
};

export default Login;
