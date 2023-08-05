import { FormProvider } from 'react-hook-form';
import { useRouter } from 'next/router';

import { Button } from 'antd';
import { ConnectWallet } from '@thirdweb-dev/react';

import FormItem from 'components/FormItem';
import FormCheckbox from 'components/FormItem/components/Checkbox';
import TextInput from 'components/FormItem/components/TextInput';
import GoBack from 'components/GoBack';
import { useConnectionIsConnected } from 'store/connection/selector';

import { CREATE_LAUNCHPAD_ENUM } from './hooks/constant';
import { useCreateLaunchpad } from './hooks';

const { TOKEN_ADDRESS, CURRENCY, FEE_OPTIONS, LISTING_OPTIONS } = CREATE_LAUNCHPAD_ENUM;

const CreateLaunchpadPage = () => {
  const router = useRouter();

  const { methods, onSubmit } = useCreateLaunchpad();
  const { reset, handleSubmit } = methods;

  const isConnected = useConnectionIsConnected();

  const handleGoBackList = () => router.push('/launchpad');

  return (
    <div className='create-launchpad-page'>
      <GoBack goBack={handleGoBackList} />

      <div className='title'>Verify Token</div>
      <div className='sub-title'>Enter the token address and verify</div>

      <FormProvider {...methods}>
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='create-token-form'>
          <FormItem name={TOKEN_ADDRESS} label='Token Address'>
            <TextInput placeholder='Address' />
          </FormItem>

          <FormItem name={CURRENCY} label='Currency'>
            <FormCheckbox />
          </FormItem>

          {isConnected ? (
            <Button htmlType='submit' className='app-button'>
              Next
            </Button>
          ) : (
            <ConnectWallet />
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateLaunchpadPage;
