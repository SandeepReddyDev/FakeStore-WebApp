import React from 'react';
import { useParams,Link } from 'react-router-dom';
import "./productmodal.css";

const ProductModal = ({ products, setProductModal }) => {
  const { id } = useParams();

  const selectedProduct = products.find(
    (product) => product.id === Number(id)
  );
  
  if (!selectedProduct) return null;

  const similarProducts = products.filter(
    (product) =>
      product.category === selectedProduct.category &&
      product.id !== selectedProduct.id
  );

  return (
    <div className="modal-overlay" onClick={() => setProductModal(false)}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <Link to="/dashboard">
        <button className="close-btn" onClick={() => setProductModal(false)}>
          ✕
        </button>
        </Link>

        {/* Main Product */}
        <div className="product-section">
          <img src={selectedProduct.image} alt={selectedProduct.title} />
          <div>
            <h2>{selectedProduct.title}</h2>
          <p style={{"fontWeight":"bold"}}>₹ {selectedProduct.price}</p>
          <p>{selectedProduct.description}</p>
          </div>
          
        </div>

        {/* Similar Products */}
        <div className="similar-section">
          <h3>Similar Products</h3>
          <div className="similar-grid">
            {similarProducts.map((product) => (
              <div key={product.id} className="similar-card">
                <img src={product.image} alt={product.title} />
                <p className='product-title'>{product.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
