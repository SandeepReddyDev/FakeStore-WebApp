import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import FetchProducts from "./API/fetchingProducts";
import ProductModal from "./Components/ProductModal";

const App = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      const data = await FetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Navbar setSearch={setSearch} />
              <Dashboard search={search} products={products} 
              setProducts={setProducts} 
              setProductModal={setIsModalOpen}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductModal products={products}  isModalOpen={isModalOpen} setProductModal={setIsModalOpen}/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
