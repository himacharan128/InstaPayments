import React from 'react';

const OrderConfirmation = ({ orderDetails, selectedMethod, status, total }) => {
  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>YOUR ORDER HAS BEEN SUCCESSFULLY PLACED !</p>
      <div>
        <p>Order Details:</p>
        <ul>
          {orderDetails.map((product, index) => (
            <li key={index}>
              <p>Title: {product.title}</p>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} />
            </li>
          ))}
        </ul>
      </div>
      <p>Order Total : {total}</p>
      <p>Payment Method: {selectedMethod}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default OrderConfirmation;
