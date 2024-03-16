import React from 'react';

const OrderConfirmation = ({ orderDetails, selectedMethod, status }) => {
  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>Order Details: {orderDetails}</p>
      <p>Payment Method: {selectedMethod}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default OrderConfirmation;
