import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CheckoutSummary from '../components/CheckoutSummary';
import { fetchOrderDetails } from '../api/orderDetails';
import Layout from '@/components/Layout';

const CheckoutPage = () => {
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    fetchOrderDetails()
      .then(data => {
        let totalPrice = 0;
        data.products.forEach(product => {
          totalPrice += product.price * product.quantity;
        });
        const roundedTotal = totalPrice.toFixed(2);
        setTotal(roundedTotal);
        setProducts(data.products);
      })
      .catch(error => console.error('Error fetching order details:', error))
      .finally(() => setLoading(false));


    return () => clearTimeout(timer);
  }, []);

  const handleProceedToPayment = () => {
    router.push({
      pathname: '/payment',
      query: { total, products: JSON.stringify(products) }
    });
  };

  const handleIncrementQuantity = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity++;
    const updatedTotal = calculateTotal(updatedProducts);
    setProducts(updatedProducts);
    setTotal(updatedTotal);
  };

  const handleDecrementQuantity = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity--;
      const updatedTotal = calculateTotal(updatedProducts);
      setProducts(updatedProducts);
      setTotal(updatedTotal);
    }
  };

  const calculateTotal = (products) => {
    let totalPrice = 0;
    products.forEach(product => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <Layout>
      <div>
        <h1 style={{ textAlign: 'center' }}>Checkout</h1>
        <hr style={{ margin: '20px auto', width: '50%' }}/>
        {loading ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
            <h2>Please wait while we load your cart...</h2>
          </div>
        ) : (
          <CheckoutSummary
            total={total}
            onClick={handleProceedToPayment}
            products={products}
            onIncrementQuantity={handleIncrementQuantity}
            onDecrementQuantity={handleDecrementQuantity}
          />
        )}
      </div>
    </Layout>
  );
};

export default CheckoutPage;
