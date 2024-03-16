import React from 'react';

const PaymentOptions = ({ paymentMethods, selectedMethod, total,  onSelect, handleMakePayment}) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center'}}>Choose Payment Method</h2>
      <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid white', borderRadius: '5px', padding: '10px' }}>
        {paymentMethods.map(method => (
          <div key={method} style={{  }}>
            <button 
              onClick={() => onSelect(method)} 
              style={{ 
                backgroundColor: method === selectedMethod ? 'lightblue' : 'white',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {method}
            </button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', border: '2px solid white', borderRadius: '5px', padding: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <p style={{ flex: '1', marginRight: '10px' }}>Admin Fee:</p>
          <p style={{ textAlign: 'right' }}>$ 0.00</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <p style={{ flex: '1', marginRight: '10px' }}>Total:</p>
          <p style={{ textAlign: 'right' }}>$ {total}</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop:'20px'}}>
        <button style={{ backgroundColor: '#5076ee', fontSize: '1.5em', padding: '10px 20px', borderRadius: '5px', color: 'white' }} onClick={handleMakePayment}>
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentOptions;