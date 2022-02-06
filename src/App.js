import "./App.css";
import Register from "./components/Users/Register";
import Login from "./components/Users/Login";
import AddProducts from "./components/Products/AddProducts";
import UpdateProducts from "./components/Products/UpdateProducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protected from "./components/Protected/Protected";
import ProductsList from "./components/Products/ProductsList";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/add"
            element={<Protected Component={AddProducts} />}
          ></Route>
          <Route
            path="/update/:id"
            element={<Protected Component={UpdateProducts} />}
          ></Route>
          <Route
            path="/"
            element={<Protected Component={ProductsList} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
