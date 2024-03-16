import React from 'react';

const OrderConfirmation = ({ orderDetails, selectedMethod, status, total }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Order Confirmation</h1>
      <hr style={{ margin: '20px auto', width: '50%' }} />
      <div>
        <h3>Order Details:</h3>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {orderDetails.map((product, index) => (
            <li key={index} style={{ margin: '0 10px 10px 0', border: '1px solid #ccc' }}>
              <div style={{ padding: '10px' }}>
                <p>{product.title}</p>
                <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <h3>Order Total : {total}</h3>
      <h3>Payment Method: {selectedMethod}</h3>
      <h3>Status: {status}</h3>
    </div>
  );
};

export default OrderConfirmation;
