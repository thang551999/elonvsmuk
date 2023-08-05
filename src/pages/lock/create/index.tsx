import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import AppLayout from 'components/Layout/Public';
import CreateLockPage from 'components/Pages/lock/create';
import { NextPageWithLayout } from 'pages/_app';

const CreateLock: NextPageWithLayout = () => (
  <div className='create-lock-container'>
    <CreateLockPage />
  </div>
);

CreateLock.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default CreateLock;
