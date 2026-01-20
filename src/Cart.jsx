import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div style={{border: '1px solid #ccc', padding: '20px', margin: '20px 0'}}>
      <h2>Shopping Cart (Redux Toolkit)</h2>
      {cartItems.length === 0 ? (
        <div style={{padding: '20px', textAlign: 'center', border: '1px solid #eee'}}>
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div>
          <div style={{marginBottom: '20px'}}>
            {cartItems.map(item => (
              <div key={item.id} style={{border: '1px solid #eee', margin: '10px 0', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity} × ${item.price} = ${item.price * item.quantity}</p>
                </div>
                <button 
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{padding: '8px 15px', backgroundColor: '#f44336', color: 'white'}}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div style={{border: '2px solid #333', padding: '15px', textAlign: 'center'}}>
            <h3>Total Amount: ${total.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;