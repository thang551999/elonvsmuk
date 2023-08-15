import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import AppLayout from 'components/Layout/Public';
import CreateLaunchpadPage from 'components/Pages/launchpad/create';
import { NextPageWithLayout } from 'pages/_app';

const CreateLaunchpad: NextPageWithLayout = () => (
  <div className='create-launchpad-container' style={{ marginTop: '100px' }}>
    <CreateLaunchpadPage />
  </div>
);

CreateLaunchpad.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default CreateLaunchpad;
