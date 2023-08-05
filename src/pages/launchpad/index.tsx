import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import AppLayout from 'components/Layout/Public';
import ViewPoolsPage from 'components/Pages/launchpad/view-pools';
import { NextPageWithLayout } from 'pages/_app';

const LaunchpadPools: NextPageWithLayout = () => (
  <div className='pools-list-container'>
    <ViewPoolsPage />
  </div>
);

LaunchpadPools.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default LaunchpadPools;
