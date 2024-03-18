import React from 'react';

const OrderConfirmation = ({ orderDetails, selectedMethod, status, total }) => {
  return ( 
    <div>
      <h1 style={{ textAlign: 'center' }}>Order Confirmation</h1>
      <hr style={{ margin: '20px auto', width: '50%' }} />
      <div>
        <h2 style={{ textAlign: 'center' }}>Order Details:</h2>

        <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid white', borderRadius: '5px', padding: '10px' }}>
          <div style={{ textAlign: 'center', marginTop: "30px", overflowX: 'auto', whiteSpace: 'nowrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '100%', overflowX: 'auto' }}>
              {orderDetails.map((product, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', maxWidth: '500px' }}>
                  <img src={product.image} alt={product.title} style={{ maxWidth: '100px', height: 'auto' }} />
                  <p style={{ margin: '0', fontSize: '12px' }}>{product.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', border: '2px solid white', borderRadius: '5px', padding: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <p style={{ flex: '1', marginRight: '10px' }}>Order Total :</p>
            <p style={{ textAlign: 'right' }}>$ {total}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <p style={{ flex: '1', marginRight: '10px' }}>Payment Method :</p>
            <p style={{ textAlign: 'right' }}>{selectedMethod}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <p style={{ flex: '1', marginRight: '10px' }}>Status:</p>
            <p style={{ textAlign: 'right' }}>{status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
