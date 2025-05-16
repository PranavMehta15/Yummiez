// OrderSummary.jsx
import React, { useEffect, useState } from 'react';
import './OrderSummary.css';
import { cartItem } from './Constant';

const initialAddresses = [
  { id: 1, label: 'Home', details: '1234, Sector 47C, Chandigarh' },
  { id: 2, label: 'Work', details: 'Cognizant, SIPCOT, Chennai' },
  { id: 3, label: 'Friends And Family', details: 'Soho Inn, Padur, Chennai' },
];

export default function OrderSummary() {
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [addresses, setAddresses] = useState(initialAddresses); // Use state for addresses
  const [newAddress, setNewAddress] = useState(''); // State for new address input
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    setCart([...cartItem.value]); // Sync with cartItem whenever it changes
  }, [cartItem.value]);

  const addNewAddress = () => {
    if (newAddress.trim()) {
      const newAddressObj = {
        id: addresses.length + 1,
        label: 'Custom Address',
        details: newAddress,
      };
      setAddresses([...addresses, newAddressObj]);
      setNewAddress('');
    }
  };

  const updateQty = (id, delta) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0
          ? { ...item, quantity: newQuantity }
          : null; // Remove item if quantity is 0
      }
      return item;
    }).filter(Boolean); // Remove null items
    cartItem.value = updatedCart; // Update global cartItem
    setCart(updatedCart); // Update local state
  };

  const removeItem = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === 'YUMMY50') {
      setDiscount(50);
    } else {
      setDiscount(0);
    }
  };

  const itemTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const finalTotal = itemTotal - discount;

  return (
    <div className="order-summary">
      <h1>Secure Checkout</h1>
      <div className="summary-container">
        {/* Address Selection */}
        <div className="address-section">
          <h2>Choose a delivery address</h2>
          <div className="address-list">
            {addresses.map(address => (
              <div
                key={address.id}
                className={`address-card ${selectedAddress === address.id ? 'selected' : ''}`}
                onClick={() => setSelectedAddress(address.id)}
              >
                <h3>{address.label}</h3>
                <p>{address.details}</p>
                <button className="deliver-btn">Deliver Here</button>
              </div>
            ))}
          </div>
          <div className="add-address">
            <input
              type="text"
              placeholder="Enter new address"
              value={newAddress}
              onChange={e => setNewAddress(e.target.value)}
              className="address-input"
            />
            <button onClick={addNewAddress} className="add-address-btn">Add Address</button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="cart-section">
          <h2>Your Cart</h2>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
              <div className="item-controls">
                <button onClick={() => updateQty(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQty(item.id, 1)}>+</button>
                <button onClick={() => updateQty(item.id, -item.quantity)} className="delete-btn">
                  🗑️
                </button>
              </div>
            </div>
          ))}

          <div className="coupon-section">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={coupon}
              onChange={e => setCoupon(e.target.value)}
            />
            <button onClick={applyCoupon}>Apply</button>
          </div>
        </div>

        {/* Bill Details */}
        <div className="bill-details">
          <h2>Bill Details</h2>
          <div className="bill-line">
            <span>Item Total</span>
            <span>₹{itemTotal}</span>
          </div>
          <div className="bill-line">
            <span>Discount</span>
            <span>-₹{discount}</span>
          </div>
          <hr />
          <div className="bill-line total">
            <span>To Pay</span>
            <span>₹{finalTotal}</span>
          </div>
          <button className="pay-btn">Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
}
