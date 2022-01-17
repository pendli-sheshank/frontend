import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Ecomm</Navbar.Brand>
        <Nav className="ml-auto mr-3 ">
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
      </Navbar>
    </div>
  );
};

export default Header;
