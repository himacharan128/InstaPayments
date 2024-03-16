export const fetchOrderDetails = async () => {
    try {
      const response = await fetch('https://groww-intern-assignment.vercel.app/v1/api/order-details');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching order details:', error);
      throw error;
    }
  };
  