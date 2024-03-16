import React from 'react';

const PaymentOptions = ({ paymentMethods, selectedMethod, onSelect }) => {
  return (
    <div>
      <h2>Select Payment Method</h2>
      <div>
        {paymentMethods.map(method => (
          <button 
            key={method} 
            onClick={() => onSelect(method)} 
            style={{ backgroundColor: method === selectedMethod ? 'lightblue' : 'white' }}
          >
            {method}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentOptions;
