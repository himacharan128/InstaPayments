export const fetchMerchantMetadata = async () => {
    try {
      const response = await fetch('https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching merchant metadata:', error);
      throw error;
    }
  };
  