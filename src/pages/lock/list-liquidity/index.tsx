import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import AppLayout from 'components/Layout/Public';
import { NextPageWithLayout } from 'pages/_app';

const ListLiquidity: NextPageWithLayout = () => <div className='list-liquidity-container'>ListLiquidity</div>;

ListLiquidity.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default ListLiquidity;
