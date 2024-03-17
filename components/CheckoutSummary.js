import React from 'react';
import { FaMapLocationDot, FaPhone } from "react-icons/fa6";

const CheckoutSummary = ({ total, onClick, products }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center'}}>Order Summary</h2>
{/* Location and mobile number */}
      <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid white', borderRadius: '5px', padding: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaMapLocationDot style={{ width: '20px', marginRight: '10px', color: '#5076ee' }} />
          <p style={{ margin: '0', fontSize: '16px' }}>Delivery Details: 6-84, Dsnr.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaPhone style={{ width: '20px', marginRight: '10px', color: '#5076ee' }} />
          <p style={{ margin: '0', fontSize: '16px' }}>Mobile Number: 9911223344</p>
        </div>
      </div>
{/* Order List */}
      <div  style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid white', borderRadius: '5px', padding: '10px' }}>
        <div style={{ textAlign: 'center', marginTop: "30px", marginRight:"200px" }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            {products.map(product => (
              <div key={product.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '500px' }}>
                <img src={product.image} alt={product.title} style={{ width: '100px', height: 'auto', marginRight: '20px' }} />
                <div style={{ flex: 1}}>
                  <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}><strong>{product.title}</strong></p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
{/* Promo Code */}
      {/* <div style={{display:"flex" ,justifyContent: 'space-evenly'}}>
        <h3>Promo Code</h3>
        <input type="text" placeholder=" " style={{ border: '1px solid black' }} />
      </div> */}
{/* Order Summary */}
      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', border: '2px solid white', borderRadius: '5px', padding: '10px' }}>
        <h3 style={{ marginBottom: '10px' }}>Order Summary</h3>

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
      <div style={{  position:'fixed', bottom: '0', left: '0', width: '100%', padding: '10px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <p style={{ margin: '0', fontSize: '1.5em' }}>Total Amount: $ {total}</p>
        <button style={{ backgroundColor: '#5076ee', fontSize: '1.5em', padding: '10px 20px', borderRadius: '5px', color: 'white' }} onClick={onClick}>Proceed to Payment</button>
      </div>

    </div>
  );
};
export default CheckoutSummary;