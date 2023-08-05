import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { Inter } from 'next/font/google';

import AppLayout from 'components/Layout/Public';
import MyTokenPage from 'components/Pages/token/my-tokens';
import { NextPageWithLayout } from 'pages/_app';

const inter = Inter({ subsets: ['latin'] });

const MyTokens: NextPageWithLayout = () => (
  <div className='my-tokens-container'>
    <MyTokenPage />
  </div>
);

MyTokens.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default MyTokens;
