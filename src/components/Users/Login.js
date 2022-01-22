import React, { useEffect, useState } from "react";
import { Button, FormControl, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const Login = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-details")) {
      navigate("/add");
    }
  });

  const login = async (e) => {
    e.preventDefault();
    let item = { email, password };

    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
        Accept: "appliation/json",
      },
    });
    result = await result.json();
    console.log("From Users", result);
    localStorage.setItem("user-details", JSON.stringify(result));
    navigate("/add");
  };

  return (
    <div>
      <Header />
      <form className="card  m-3  ">
        <h4 className="card-title text-center mt-2">Login</h4>
        <FormGroup className="card-body">
          <div className="col col-md-6 ml-auto mr-auto w-70">
            <label className="col-form-label">Email</label>
            <FormControl
              type="email"
              onChange={(e) => setemail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col col-md-6 ml-auto mr-auto w-70">
            <label className="col-form-label">Password</label>
            <FormControl
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              className="form-control"
            />
          </div>
        </FormGroup>
        <div className=" col-md-6 ml-auto mr-auto w-70">
          <div className="col">
            <Button
              onClick={login}
              className="col mb-5"
              variant="info"
              type="submit"
            >
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
