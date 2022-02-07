import React from "react";
import {
  Col,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

const Header = () => {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("user-details"));

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link className="link" to="/">
            NM Designs
          </Link>
        </Navbar.Brand>
        <Nav className="col">
          {localStorage.getItem("user-details") ? (
            <>
              <Row>
                <Link
                  className="pl-3 d-flex align-items-center  link"
                  to="/add"
                >
                  Add Products
                </Link>
              </Row>
              <Row>
                <FormControl
                  type="search"
                  placeholder="search"
                  className="ml-5 form-control"
                />
              </Row>
            </>
          ) : (
            <>
              <Link className="pl-3 link" to="/add">
                Add Products
              </Link>

              <Link className="pl-3 link" to="/login">
                Login
              </Link>
              <Link className="pl-3 link" to="/register">
                Register
              </Link>
            </>
          )}
        </Nav>
        {localStorage.getItem("user-details") ? (
          <Nav className="ml-auto mr-5 pr-5">
            <NavDropdown title={users && users.name}>
              <NavDropdown.Item className="mr-auto" onClick={onLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}
      </Navbar>
    </div>
  );
};

export default Header;
