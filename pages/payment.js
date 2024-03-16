import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PaymentOptions from '../components/PaymentOptions';

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const paymentMethods = ['UPI', 'CARDS'];
  const router = useRouter();

  const handleSelectPaymentMethod = method => {
    setSelectedMethod(method);
    router.push('/confirmation');
  };

  return (
    <div>
      <h1>Payment Options</h1>
      <PaymentOptions
        paymentMethods={paymentMethods}
        selectedMethod={selectedMethod}
        onSelect={handleSelectPaymentMethod}
      />
    </div>
  );
};

export default PaymentPage;
