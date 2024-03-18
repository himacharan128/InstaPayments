import React from 'react';
import { FaMapLocationDot, FaPhone } from "react-icons/fa6";

const CheckoutSummary = ({ total, onClick, products, onIncrementQuantity, onDecrementQuantity }) => {

  const handleIncrement = (index) => {
    onIncrementQuantity(index);
  };

  const handleDecrement = (index) => {
    onDecrementQuantity(index);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center'}}>Order Summary</h2>
{/* Location and mobile number */}
      <div style={{ padding:'10px',marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid white', borderRadius: '5px', padding: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom:'20px'}}>
          <FaMapLocationDot style={{ width: '20px', marginRight: '10px', color: '#5076ee' }} />
          <p style={{ margin: '0', fontSize: '16px' }}>Delivery Details: 6-84, Dsnr.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaPhone style={{ width: '20px', marginRight: '10px', color: '#5076ee' }} />
          <p style={{ margin: '0', fontSize: '16px' }}>Mobile Number: 9911223344</p>
        </div>
      </div>
{/* Order List */}
<div style={{ marginBottom: '20px', border: '2px solid white', borderRadius: '5px', padding: '10px' }}>
  <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Order List</h2>
  {products.map((product, index) => (
    <div key={product.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <img src={product.image} alt={product.title} style={{ width: '100px', height: 'auto', marginRight: '20px' }} />
      <div style={{ flex: 1 }}>
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p>Quantity:</p>
          <button onClick={() => handleDecrement(index)}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => handleIncrement(index)}>+</button>
        </div>
      </div>
    </div>
  ))}
</div>



     
{/* Order Summary */}
      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', border: '2px solid white', borderRadius: '5px', padding: '10px' }}>
        <h3 style={{ marginBottom: '10px', textAlign: 'center' }}>Bill Summary</h3>

        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <p style={{ flex: '1', marginRight: '10px' }}>Order Amount:</p>
          <p style={{ textAlign: 'right' }}>$ {total}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <p style={{ flex: '1', marginRight: '10px' }}>Delivery Amount:</p>
          <p style={{ textAlign: 'right' }}>$ 10.00</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ flex: '1', marginRight: '10px' }}>Discount Amount:</p>
          <p style={{ textAlign: 'right' }}>$ 10.00</p>
        </div>
      </div>
{/* Bottom Navigation */}
      <div style={{  bottom: '0', left: '0', width: '100%', padding: '20px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <p style={{ margin: '0', fontSize: '1.5em' }}>Total Amount: $ {total}</p>
        <button style={{ backgroundColor: '#5076ee', fontSize: '1.5em', padding: '10px 20px', borderRadius: '5px', color: 'white' }} onClick={onClick}>Proceed to Payment</button>
      </div>

    </div>
  );
};

export default CheckoutSummary;
