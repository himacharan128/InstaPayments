import React from 'react';

const CheckoutSummary = ({ total, onClick, products }) => {
  return (
    <div>
      <h2>Order Summary</h2>
      {/* Location Details */}
      <div>
        <h3>Delhivery Details</h3>
        <div>
          <img src="/location_icon.png" alt="Location Icon" style={{ width: '20px', marginRight: '10px' }} />
          <p>303, 6-84, Dsnr.</p>
        </div>
        <div>
          <p>Mobile Number: 9911223344</p>
        </div>
      </div>

      {/* Order List */}
      <div>
        <h3>Order List</h3>
        {products.map(product => (
          <div key={product.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100px', marginRight: '20px' }} />
            <div>
              <p><strong>{product.title}</strong></p>
              <p>Quantity: {product.quantity}</p>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Promo Code */}
      <div>
        <h3>Promo Code</h3>
        <input type="text" placeholder="Enter promo code" style={{ border: '1px solid black', padding: '5px', marginRight: '10px' }} />
        <a href="#">APPLY</a>
      </div>

      {/* Order Summary */}
      <div>
        <h3>Order Summary</h3>
        <p>Order Amount: ${total}</p>
      </div>

      {/* Bottom Navigation */}
      <div style={{ position: 'fixed', bottom: '0', left: '0', width: '100%', background: 'lightgrey', padding: '10px' }}>
        <p>Total Amount: ${total}</p>
        <button onClick={onClick}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
