import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import AppLayout from 'components/Layout/Public';
import HomePage from 'components/Pages/home';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => (
  <div className='home-container'>
    <HomePage />
  </div>
);

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Home;
