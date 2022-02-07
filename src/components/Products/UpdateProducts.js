import React, { useEffect, useState } from "react";
import { Button, FormControl, FormGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header/Header";

const UpdateProducts = (props) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let result = await fetch("http://localhost:8000/api/product/" + id);
    result = await result.json();
    console.log(result);
    setData(result);
    setName(result.name);
    setPrice(result.price);
    setPrice(result.description);
    setDescription(result.file);
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("name", name);

    let result = await fetch(
      "http://localhost:8000/api/updateproduct/" + id + "?_method=PUT",
      {
        method: "post",
        body: formData,
      }
    );
    localStorage.setItem("product", JSON.stringify(result));
    navigate("/");
  };

  return (
    <div>
      <Header />

      <form className="card  m-3  ">
        <h4 className="card-title text-center mt-2">Update Product</h4>
        <FormGroup className="card-body">
          <div className="col col-md-6 ml-auto mr-auto w-70">
            <label className="col-form-label">Name</label>
            <FormControl
              type="text"
              defaultValue={data.name}
              onChange={(e) => setName(e.target.value)}
              placeholder="enter product name"
              className="form-control"
            />
          </div>
          <div className="col col-md-6 ml-auto mr-auto w-70">
            <label className="col-form-label">price</label>
            <FormControl
              type="text"
              defaultValue={data.price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="enter product price"
              className="form-control"
            />
          </div>
          <div className="col col-md-6 ml-auto mr-auto w-70">
            <label className="col-form-label">description</label>
            <FormControl
              type="text"
              defaultValue={data.description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="enter product description"
              className="form-control"
            />
          </div>
          <div className="col col-md-6 ml-auto mr-auto w-70">
            <label className="col-form-label">Uplode Image</label>
            <FormControl
              type="file"
              defaultValue={data.file_path}
              onChange={(e) => setFile(e.target.files[0])}
              className="form-control"
              placeholder="Upload product"
            />
            <img
              className="image ml-2"
              alt="preview"
              src={`http://localhost:8000/` + data.file_path}
            />
          </div>
        </FormGroup>
        <div className=" col-md-6 ml-auto mr-auto w-70">
          <div className="col">
            <Button
              className="col mb-5"
              onClick={updateProduct}
              variant="info"
              type="submit"
            >
              Update Product
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProducts;
