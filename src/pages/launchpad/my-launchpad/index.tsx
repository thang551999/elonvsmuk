import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import AppLayout from 'components/Layout/Public';
import MyLaunchpadPage from 'components/Pages/launchpad/my-launchpad';
import { NextPageWithLayout } from 'pages/_app';

const MyLaunchPad: NextPageWithLayout = () => (
  <div className='my-launchpad-container'>
    <MyLaunchpadPage />
  </div>
);

MyLaunchPad.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default MyLaunchPad;
