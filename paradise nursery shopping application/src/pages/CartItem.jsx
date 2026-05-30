import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice'; // Adjust path if necessary
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculation logic for overall total cost
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  return (
    <div className="cart-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#2e7d32' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      
      <div className="cart-items" style={{ margin: '20px 0' }}>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item" style={{ display: 'flex', borderBottom: '1px solid #ddd', padding: '15px 0', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img src={item.thumbnail} alt={item.name} style={{ width: '90px', height: '90px', objectFit: 'cover', borderRadius: '5px' }} />
              <div>
                <h3 style={{ margin: '0 0 5px 0' }}>{item.name}</h3>
                <p style={{ margin: '0', color: '#555' }}>Unit Price: ${item.price}</p>
                <p style={{ margin: '5px 0 0 0', fontWeight: 'bold' }}>Subtotal: ${item.price * item.quantity}</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button style={{ padding: '5px 10px', cursor: 'pointer' }} onClick={() => handleDecrement(item)}>-</button>
                <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                <button style={{ padding: '5px 10px', cursor: 'pointer' }} onClick={() => handleIncrement(item)}>+</button>
              </div>
              <button 
                style={{ padding: '5px 10px', color: 'white', backgroundColor: '#d32f2f', border: 'none', borderRadius: '4px', cursor: 'pointer' }} 
                onClick={() => dispatch(removeItem(item.id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <button style={{ padding: '10px 20px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <button style={{ padding: '10px 20px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
