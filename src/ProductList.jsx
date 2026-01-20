import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addProduct, updateProduct, removeProduct } from './productsSlice';
import { addToCart } from './cartSlice';
import { useAuth } from './AuthContext';

function ProductList() {
  const products = useSelector(state => state.products.items);
  const dispatch = useDispatch();
  const { role } = useAuth();
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price) {
      dispatch(addProduct({ 
        name: newProduct.name, 
        price: Number(newProduct.price) 
      }));
      setNewProduct({ name: '', price: '' });
    }
  };

  return (
    <div style={{border: '1px solid #ccc', padding: '20px', margin: '20px 0'}}>
      <h2>Product Management (Redux Toolkit)</h2>
      
      {role === 'admin' && (
        <div style={{border: '1px solid #ddd', padding: '15px', marginBottom: '20px'}}>
          <h3>Add New Product (Admin Only)</h3>
          <form onSubmit={handleAddProduct}>
            <div style={{marginBottom: '10px'}}>
              <input
                placeholder="Product name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                style={{padding: '8px', marginRight: '10px', width: '200px'}}
              />
            </div>
            <div style={{marginBottom: '10px'}}>
              <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                style={{padding: '8px', marginRight: '10px', width: '200px'}}
              />
            </div>
            <button type="submit" style={{padding: '8px 15px'}}>Add Product</button>
          </form>
        </div>
      )}

      <div>
        <h3>Product Catalog</h3>
        {products.map(product => (
          <div key={product.id} style={{border: '1px solid #eee', margin: '10px 0', padding: '15px'}}>
            <h4>{product.name}</h4>
            <p><strong>Price: ${product.price}</strong></p>
            <div>
              <button 
                onClick={() => dispatch(addToCart(product))}
                style={{padding: '8px 15px', marginRight: '10px'}}
              >
                Add to Cart
              </button>
              {role === 'admin' && (
                <button 
                  onClick={() => dispatch(removeProduct(product.id))}
                  style={{padding: '8px 15px', backgroundColor: '#f44336', color: 'white'}}
                >
                  Remove Product
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;