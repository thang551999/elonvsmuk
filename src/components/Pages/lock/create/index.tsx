import { FormProvider } from 'react-hook-form';

import { Button } from 'antd';
import { ConnectWallet } from '@thirdweb-dev/react';

import FormItem from 'components/FormItem';
import TextInput from 'components/FormItem/components/TextInput';
import { useCreateToken } from 'components/Pages/token/create-token/hooks/useCreateToken';
import { useConnectionIsConnected } from 'store/connection/selector';

import { CREATE_LOCK_ENUM } from './hooks/constant';

const { TOKEN_ADDRESS, TOKEN_OWNER_ADDRESS, TITLE, AMOUNT, LOCK_UNTIL } = CREATE_LOCK_ENUM;

const CreateLockPage = () => {
  const { methods, onSubmit } = useCreateToken();
  const { reset, handleSubmit } = methods;

  const isConnected = useConnectionIsConnected();

  return (
    <div className='create-lock-wrapper'>
      <h1>Create Lock</h1>

      <FormProvider {...methods}>
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='create-token-form'>
          <FormItem name={TOKEN_ADDRESS} label='Name'>
            <TextInput placeholder='Ex: Ethereum' />
          </FormItem>

          <FormItem name={TOKEN_OWNER_ADDRESS} label='Symbol'>
            <TextInput placeholder='Ex: ETH' />
          </FormItem>

          {isConnected ? (
            <Button htmlType='submit' className='app-button'>
              Lock
            </Button>
          ) : (
            <ConnectWallet />
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateLockPage;
