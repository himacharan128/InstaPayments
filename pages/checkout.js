import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CheckoutSummary from '../components/CheckoutSummary';
import { fetchOrderDetails } from '../api/orderDetails';

const CheckoutPage = () => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchOrderDetails()
      .then(data => {
        let totalPrice = 0;
        data.products.forEach(product => {
          totalPrice += product.price * product.quantity;
        });
        setTotal(totalPrice);
        setProducts(data.products);
      })
      .catch(error => console.error('Error fetching order details:', error));
  }, []);

  const handleProceedToPayment = () => {
    router.push('/payment');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutSummary total={total} onClick={handleProceedToPayment} products={products} />
    </div>
  );
};

export default CheckoutPage;
