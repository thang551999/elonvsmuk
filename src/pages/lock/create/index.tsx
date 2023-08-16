import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import { Web3Button } from '@thirdweb-dev/react';

import AppLayout from 'components/Layout/Public';
import CreateLockPage from 'components/Pages/lock/create';
import { NextPageWithLayout } from 'pages/_app';

import stake from '../../../constant/idl/stake.json';

const CreateLock: NextPageWithLayout = () => (
  <div className='create-lock-container'>
    <Web3Button
      contractAddress='0x8d6E0C69cAa6Aa2FACb30aEf285Cd5dC49D63d74'
      action={async (contract) => console.log('contract :>> ', contract)}
    >
      Call myFunctionName from the connected wallet
    </Web3Button>

    <Web3Button
      contractAddress='0x8d6E0C69cAa6Aa2FACb30aEf285Cd5dC49D63d74'
      contractAbi={stake}
      action={async (contract) => {
        console.log('contract :>> ', contract);
      }}
      onSuccess={(result) => alert('Success!')}
      onError={(error) => alert('Something went wrong!')}
      onSubmit={() => console.log('Transaction submitted')}
    >
      Execute Action
    </Web3Button>
  </div>
);

// CreateLock.getLayout = function getLayout(page: ReactElement) {
//   return <AppLayout>{page}</AppLayout>;
// };

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default CreateLock;
