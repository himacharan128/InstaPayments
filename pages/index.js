import React from 'react';
import Link from 'next/link';
import { fetchMerchantMetadata } from '../api/merchantMetadata';

const IndexPage = ({ merchantName }) => {
  return (
    <div>
      <h1>WELCOME TO {merchantName}</h1>
      <Link href="/checkout">
        <button>Start Checkout</button>
      </Link>
    </div>
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
