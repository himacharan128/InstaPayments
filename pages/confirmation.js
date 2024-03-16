import React, { useState, useEffect } from 'react';
import OrderConfirmation from '../components/OrderConfirmation';
import { fetchOrderDetails } from '../api/orderDetails';

const ConfirmationPage = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchOrderDetails()
      .then(data => {
        setOrderDetails(data.products.map(product => product.title).join(', '));
        setSelectedMethod(data.paymentMethods[0]);
        const randomStatus = ['Success', 'Failure', 'Pending'][Math.floor(Math.random() * 3)];
        setStatus(randomStatus);
      })
      .catch(error => console.error('Error fetching order details:', error));
  }, []);

  return (
    <div>
      <OrderConfirmation orderDetails={orderDetails} selectedMethod={selectedMethod} status={status} />
    </div>
  );
};

export default ConfirmationPage;
