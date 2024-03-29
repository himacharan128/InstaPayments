import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import OrderConfirmation from '../components/OrderConfirmation';
import Layout from '@/components/Layout';

const ConfirmationPage = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [status, setStatus] = useState('');
  const [total, setTotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const { total, products, selectedMethod } = router.query;
    if (total) {
      setTotal(parseFloat(total));
    }
    if (products) {
      try {
        const parsedProducts = JSON.parse(products);
        setOrderDetails(parsedProducts);
      } catch (error) {
        console.error('Error parsing products:', error);
        setOrderDetails([]);
      }
    } else {
      setOrderDetails([]);
    }
    if (selectedMethod) {
      setSelectedMethod(selectedMethod);
    }
    
    const randomStatus = ['Success', 'Failure', 'Pending'][Math.floor(Math.random() * 3)];
    setStatus(randomStatus);
  }, [router.query]);  
  
  return (
    <Layout>
      <div>
        <OrderConfirmation orderDetails={orderDetails} selectedMethod={selectedMethod} status={status} total={total} />
      </div>
    </Layout>    
  );
};

export default ConfirmationPage;
