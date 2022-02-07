import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Header from "../Header/Header";
import "../../App.css";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const [data, setData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getProductList();
  }, []);

  const onDelete = async (id) => {
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE",
    });
    result = await result.product.json();
    getProductList(result);
  };

  const getProductList = async () => {
    let result = await fetch("http://localhost:8000/api/list");

    const response = await result.json();
    console.log(response);
    setData(response);
  };

  return (
    <div>
      <Header />
      <div className="m-2 p-2">
        <Row className="mt-5">
          {data.map((product, id) => {
            return (
              <Col
                key={id}
                className="col-sm-12 col-md-3 d-flex align-items-stretch "
              >
                <Card className="m-1 shadow-sm p-3 mb-5 bg-white rounded">
                  <Card.Body className="row ">
                    <div className="col">
                      <Card.Title>{product.name}</Card.Title>

                      <Card.Text>{product.description}</Card.Text>
                      <Card.Title>
                        <span class="material-icons">currency_rupee</span>{" "}
                        {product.price}
                      </Card.Title>
                      <Button
                        onClick={() => onDelete(product.id)}
                        className="btn-sm btn-danger mr-1"
                      >
                        Delete
                      </Button>
                      <Button className="btn-sm btn-info ml-1">
                        <Link className="link" to={"update/" + product.id}>
                          Update
                        </Link>
                      </Button>
                    </div>
                    <div className="col">
                      <img
                        className="image ml-2"
                        alt="produc-img"
                        src={`http://localhost:8000/` + product.file_path}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default ProductsList;
