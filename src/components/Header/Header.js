import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

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
        <Navbar.Brand>Ecomm</Navbar.Brand>
        <Nav>
          {localStorage.getItem("user-details") ? (
            <>
              <Link className="pl-3" to="/products-add">
                Add Products
              </Link>
              <Link className="pl-3" to="/products-update">
                Update Products
              </Link>
            </>
          ) : (
            <>
              <Link className="pl-3" to="/products-add">
                Add Products
              </Link>
              <Link className="pl-3" to="/products-update">
                Update Products
              </Link>
              <Link className="pl-3" to="/login">
                Login
              </Link>
              <Link className="pl-3" to="/register">
                Register
              </Link>
            </>
          )}
        </Nav>
        {localStorage.getItem("user-details") ? (
          <Nav>
            <NavDropdown title={users && users.name}>
              <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}
      </Navbar>
    </div>
  );
};

export default Header;
