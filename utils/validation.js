export const validatePaymentInfo = (paymentInfo) => {
    if (paymentInfo.method === 'UPI') {
      return validateUPI(paymentInfo.upiId);
    } else if (paymentInfo.method === 'CARDS') {
      return validateCard(paymentInfo.cardNumber, paymentInfo.expiryDate, paymentInfo.cvv);
    } else {
      return false;
    }
  };
  
  const validateUPI = (upiId) => {
    return upiId.includes('@');
  };
  
  const validateCard = (cardNumber, expiryDate, cvv) => {
    return cardNumber.length === 16 && isValidExpiryDate(expiryDate) && cvv.length === 3;
  };
  
  const isValidExpiryDate = (expiryDate) => {
    const [month, year] = expiryDate.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
  
    return (
      /^\d{2}\/\d{2}$/.test(expiryDate) &&
      parseInt(month) <= 12 &&
      parseInt(month) >= currentMonth &&
      parseInt(year) >= currentYear
    );
  };
  