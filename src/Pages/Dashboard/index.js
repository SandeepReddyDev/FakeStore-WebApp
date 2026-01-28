
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";

import "./dashboard.css";

const Dashboard = ({ search, products, setProducts ,setProductModal}) => {
  const [category, setCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false)
    setNewProduct({
      title: "",
      price: "",
      category: "",
      image: "",
    })
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSaveProduct = async () => {
    if (!newProduct.title || !newProduct.price || !newProduct.category) {
      alert("Please fill all required fields");
      return;
    }

    const productToAdd = {
      title: newProduct.title,
      price: Number(newProduct.price),
      description: "New product",
      image: newProduct.image || "https://i.pravatar.cc",
      category: newProduct.category,
    };

    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productToAdd),
      });

      const data = await response.json();
      console.log("Product added:", data);

      // Optional: update UI after POST
      setProducts((prev) => [...prev, data]);

      closeModal();
      setNewProduct({ title: "", price: "", category: "", image: "" });

    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  const handleEdit = (product) => {
    setIsEditMode(true);
    setEditingProductId(product.id);
    setNewProduct({
      title: product.title,
      price: product.price,
      category: product.category,
      image: product.image,
    });
    openModal();
  };

  const handleUpdateProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${editingProductId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...newProduct,
            price: Number(newProduct.price),
          }),
        }
      );

      const updatedProduct = await response.json();

      // Update UI
      setProducts((prev) =>
        prev.map((item) =>
          item.id === editingProductId ? updatedProduct : item
        )
      );

      closeModal();
      setIsEditMode(false);
      setEditingProductId(null);
      setNewProduct({ title: "", price: "", category: "", image: "" });
    } catch (err) {
      console.error("Update failed", err);
      alert("Failed to update product");
    }
  };


  // ✅ FILTER LOGIC
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" ||
      product.category.toLowerCase().includes(category.toLowerCase());

    const matchesSearch =
      product.title.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      title: "New Product",
      price: 0,
      category: "electronics",
      image: "https://placehold.co/200x200?text=New+Product",
    };
    setProducts([...products, newProduct]);
  };

  // ✅ DELETE
 const handleDelete = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete product");
    }

    const deletedProduct = await res.json();
    console.log("Deleted:", deletedProduct);

    // Update UI after successful API delete
    setProducts((prev) => prev.filter((item) => item.id !== id));

  } catch (error) {
    console.error("Delete error:", error);
  }
};


  return (
    <div className="dashboard">
      <div className="dashboard-content">

        {/* LEFT SIDEBAR */}
        <aside className="left-section">
          <div className="profile-info">
            <img
              src="https://i.pinimg.com/736x/4b/a6/38/4ba638209ce7f96151d138879dbf03f6.jpg"
              alt="Profile"
              className="profile-pic"
            />
            <h2 className="username">John Doe</h2>
            <p className="role">Premium User</p>
          </div>

          {/* CATEGORY FILTER */}
          <div className="filters">
            <h4>Category</h4>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="All">All</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
          </div>

          <button className="add-product-btn" onClick={openModal}>
            Add Product +

          </button>
        </aside>

        {/* PRODUCTS */}
        <section className="product-grid">
          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="image-wrapper">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.title}/>
                  </Link>
                </div>

                <div className="card-content">
                  <h3 className="product-title" title={product.title}>
                    {product.title}
                  </h3>
                  <span className="price">${product.price}</span>

                  <div className="card-actions">
                    <button
                      className="icon-btn edit"
                      onClick={() => handleEdit(product)}
                    >
                      Edit ✎
                    </button>
                    <button
                      className="delete dlte-btn"
                      onClick={() => handleDelete(product.id)}
                    >
                      <MdDelete />
                    </button>
                    <button className="primary-btn">Add to cart</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <input
              name="title"
              placeholder="Product Title"
              value={newProduct.title}
              onChange={handleChange}
            />

            <input
              name="price"
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleChange}
            />

            <select
              name="category"
              value={newProduct.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>

            <input
              name="image"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={handleChange}
            />

            <div className="modal-actions">
              <button onClick={closeModal}>Cancel</button>
              <button
                onClick={isEditMode ? handleUpdateProduct : handleSaveProduct}
                className="primary-btn"
              >
                Save
              </button>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
