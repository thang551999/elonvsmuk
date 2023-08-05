import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import AppLayout from 'components/Layout/Public';
import CreateTokenPage from 'components/Pages/token/create-token';
import { NextPageWithLayout } from 'pages/_app';

const CreateTokens: NextPageWithLayout = () => (
  <div className='create-tokens-page'>
    <CreateTokenPage />
  </div>
);

CreateTokens.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default CreateTokens;
