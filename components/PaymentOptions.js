import React from 'react';

const PaymentOptions = ({ paymentMethods, selectedMethod, total,  onSelect, handleMakePayment}) => {
  return (
    <div>
      <h3>Choose Payment Method</h3>
      <div>
        {paymentMethods.map(method => (
          <div key={method} style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
            <img src={`/icons/${method.toLowerCase()}.png`} alt={method} style={{ width: '30px', marginRight: '10px' }} />
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
      <div style={{ border: '1px solid black', padding: '10px', marginTop: '20px' }}>
        <p>Admin Fee: $0.00</p>
        <p>Total: ${total}</p>
        <button onClick={handleMakePayment}>Make Payment</button>
      </div>
    </div>
  );
};

export default PaymentOptions;
