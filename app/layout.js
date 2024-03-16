"use client";
import { useEffect, useState } from 'react';
import { fetchMerchantMetadata } from '@/api/merchantMetadata';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const { theme } = await fetchMerchantMetadata();
        setTheme(theme);
      } catch (error) {
        console.error('Error fetching theme:', error);
      }
    };

    fetchTheme();
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
      {children}
    </div>
  );
};

export default Layout;
