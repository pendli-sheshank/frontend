import React, { useState } from "react";
import { useEffect } from "react";
import { Button, FormControl, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const AddProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("name", name);

    let result = await fetch("http://localhost:8000/api/addproduct", {
      method: "POST",
      body: formData,
    });
    localStorage.setItem("product", JSON.stringify(result));
    navigate("/");
  };

  return (
    <div>
      <Header />

      <form method="post" className="card  m-3  ">
        <h4 className="card-title text-center mt-2">Add Product</h4>
        <FormGroup className="card-body">
          <div className="col col-md-6 ml-auto mr-auto w-70">
            <label className="col-form-label">Name</label>
            <FormControl
              type="text"
              placeholder="enter product name"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col col-md-6 ml-auto mr-auto w-70">
            <label className="col-form-label">price</label>
            <FormControl
              type="text"
              placeholder="enter product price"
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col col-md-6 ml-auto mr-auto w-70">
            <label className="col-form-label">description</label>
            <FormControl
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="enter product description"
              className="form-control"
            />
          </div>
          <div className="col col-md-6 ml-auto mr-auto w-70">
            <label className="col-form-label">Uplode Image</label>
            <FormControl
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="form-control"
              placeholder="Upload product"
            />
          </div>
        </FormGroup>
        <div className=" col-md-6 ml-auto mr-auto w-70">
          <div className="col">
            <Button
              className="col mb-5"
              onClick={addProduct}
              variant="info"
              type="submit"
            >
              Add Product
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
