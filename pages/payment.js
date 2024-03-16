import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PaymentOptions from '../components/PaymentOptions';

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [total, setTotal] = useState(0);
  const paymentMethods = ['Card', 'UPI', 'E-Wallet', 'Cash on Delivery'];
  const router = useRouter();

  useEffect(() => {
    const { total } = router.query;
    if (total) {
      setTotal(parseFloat(total));
    }
  }, [router.query.total]);

  const handleSelectPaymentMethod = method => {
    setSelectedMethod(method);
  };

  const handleMakePayment = () => {
    setSelectedMethod('');
    router.push('/confirmation');
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
