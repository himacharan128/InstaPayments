import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PaymentOptions from '../components/PaymentOptions';
import Layout from '@/components/Layout';
import { fetchOrderDetails } from '../api/orderDetails';

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const { total, products } = router.query;
    if (total) {
      setTotal(parseFloat(total));
    }
    if (products) {
      setProducts(JSON.parse(products));
    }

    fetchOrderDetails()
      .then(data => {
        setPaymentMethods(data.paymentMethods);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching payment methods:', error);
        setLoading(false);
      });

  }, [router.query.total, router.query.products]);

  const handleSelectPaymentMethod = method => {
    setSelectedMethod(method);
  };

  const handleMakePayment = () => {
    if (selectedMethod) {
      router.push({
        pathname: '/confirmation',
        query:{ total, products: JSON.stringify(products), selectedMethod }
      });
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <Layout>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div className="loader"></div>
          <h2 style={{ marginLeft: '10px' }}>Please wait while we load payment...</h2>
        </div>
      ) : (
        <div>
          <h1 style={{ textAlign: 'center' }}>Payment</h1>
          <hr style={{ margin: '20px auto', width: '50%' }}/>
          <PaymentOptions
            paymentMethods={paymentMethods}
            selectedMethod={selectedMethod}
            onSelect={handleSelectPaymentMethod}
            total={total}
            handleMakePayment={handleMakePayment}
          />
        </div>
      )}
    </Layout>
  );
};

export default PaymentPage;
