import "./App.css";
import Register from "./components/Users/Register";
import Login from "./components/Users/Login";
import AddProducts from "./components/Products/AddProducts";
import UpdateProducts from "./components/Products/UpdateProducts";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products-add" element={<AddProducts />} />
          <Route path="/products-update" element={<UpdateProducts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
