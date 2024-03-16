import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { fetchMerchantMetadata } from '@/api/merchantMetadata';

const IndexPage = ({ merchantName }) => {
  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>WELCOME TO {merchantName} INSTA-PAYMENTS</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link href="/checkout">
        <button style={{ backgroundColor: '#5076ee', fontSize: '1.5em', padding: '10px 20px', borderRadius: '5px', color: 'white' }}>
          Start Checkout
        </button>
        </Link>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { merchantName } = await fetchMerchantMetadata();
  return {
    props: {
      merchantName,
    },
  };
}

export default IndexPage;


