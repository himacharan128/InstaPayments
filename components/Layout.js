import { useEffect, useState } from 'react';
import { fetchMerchantMetadata } from '@/api/merchantMetadata';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [merchantName, setMerchantName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { theme, merchantName } = await fetchMerchantMetadata();
        setTheme(theme);
        setMerchantName(merchantName);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const style = {
    backgroundColor: theme ? theme['--background'] : 'white',
    color: theme ? theme['--foreground'] : 'black',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    maxWidth: '800px',
  };

  return (
    <div style={style}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <img 
            src="https://groww.in/groww-logo-270.png"
            alt="Merchant Logo" 
            style={{ width: '80px' }}
          />
        </div>
        <div style={{ marginLeft: '10px', fontSize: '1.5em', fontWeight: 'bold' }}>
          {merchantName}
        </div>
      </div>
      <hr style={{ margin: '20px auto', width: '50%' }}/>
      {children}
    </div>
  );
};

export default Layout;
