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
      
    </div>
  );
};

export default CreateLockPage;
