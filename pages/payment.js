import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PaymentOptions from '../components/PaymentOptions';

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const paymentMethods = ['Card', 'UPI', 'E-Wallet', 'Cash on Delivery'];
  const router = useRouter();

  useEffect(() => {
    const { total, products } = router.query;
    if (total) {
      setTotal(parseFloat(total));
    }
    if (products) {
      setProducts(JSON.parse(products));
    }
  }, [router.query.total, router.query.products]);

  const handleSelectPaymentMethod = method => {
    setSelectedMethod(method);
  };

  const handleMakePayment = () => {
    router.push({
      pathname: '/confirmation',
      query:{ total, products: JSON.stringify(products), selectedMethod }
    });
  };

  return (
    <div>
      <h1>Payment</h1>
      <PaymentOptions
        paymentMethods={paymentMethods}
        selectedMethod={selectedMethod}
        onSelect={handleSelectPaymentMethod}
        total={total}
        handleMakePayment={handleMakePayment}
      />
    </div>
  );
};

export default PaymentPage;
