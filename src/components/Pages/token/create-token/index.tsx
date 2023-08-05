import React from 'react';
import { FormProvider } from 'react-hook-form';

import { Button } from 'antd';
import { ConnectWallet } from '@thirdweb-dev/react';

import CustomModal from 'components/AppModal';
import FormItem from 'components/FormItem';
import TextInput from 'components/FormItem/components/TextInput';
import { useConnectionIsConnected } from 'store/connection/selector';

import { useCreateToken } from './hooks/useCreateToken';
import { CREATE_TOKEN_ENUM } from './constant';

const { NAME, SYMBOL, DECIMALS, TOTAL_SUPPLY } = CREATE_TOKEN_ENUM;

const CreateTokenPage = () => {
  const { methods, visibleModal, setVisibleModal, onSubmit } = useCreateToken();
  const { reset, handleSubmit } = methods;

  const isConnected = useConnectionIsConnected();

  return (
    <div className='create-token-container'>
      <div className='title'>Create Token</div>

      <FormProvider {...methods}>
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='create-token-form'>
          <FormItem name={NAME} label='Name'>
            <TextInput placeholder='Ex: Ethereum' />
          </FormItem>

          <FormItem name={SYMBOL} label='Symbol'>
            <TextInput placeholder='Ex: ETH' />
          </FormItem>

          <FormItem name={DECIMALS} label='Decimals'>
            <TextInput type='number' placeholder='Ex: 18' />
          </FormItem>

          <FormItem name={TOTAL_SUPPLY} label='Total Supply'>
            <TextInput placeholder='Ex: 1000000000000' />
          </FormItem>

          {isConnected ? (
            <Button htmlType='submit' className='app-button'>
              Create Token
            </Button>
          ) : (
            <ConnectWallet />
          )}
        </form>
      </FormProvider>

      <CustomModal
        visible={visibleModal}
        setVisible={setVisibleModal}
        type='success'
        title='Create Token Successful'
        content='You create successfully token'
        useMethod
        footer={false}
      />
    </div>
  );
};

export default CreateTokenPage;
