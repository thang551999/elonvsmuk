import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import AppLayout from 'components/Layout/Public';
import { NextPageWithLayout } from 'pages/_app';

const ListToken: NextPageWithLayout = () => <div className='list-token-container'>List Token</div>;

ListToken.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default ListToken;
