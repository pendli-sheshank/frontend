import React, { useState } from "react";
import { Button, Container, FormControl, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let user = { name, email, password };

  let btnHandle = async (e) => {
    e.preventDefault();

    console.log(user);

    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
        Accept: "appliation/json",
      },
    });
    result = await result.json();
    console.log("From DB", result);
    localStorage.setItem("user-details", JSON.stringify(result));
    navigate("/products-add");
  };

  return (
    <Container className="card-body mt-5 col-md-9">
      <form className="card  mt-3">
        <h4 className="card-title text-center mt-2">Register</h4>
        <FormGroup className="card-body">
          <div className="col col-md-6 ml-auto mr-auto">
            <label className="col-form-label">User Name</label>
            <FormControl
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col col-md-6 ml-auto mr-auto">
            <label className="col-form-label">Email</label>
            <FormControl
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
            />
          </div>
          <div className="col col-md-6 ml-auto mr-auto">
            <label className="col-form-label">Password</label>
            <FormControl
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
            />
          </div>
        </FormGroup>
        <div className=" col-md-6 ml-auto mr-auto">
          <div className="col">
            <Button
              onClick={btnHandle}
              className="col mb-5"
              variant="info"
              type="submit"
            >
              Register
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Register;
