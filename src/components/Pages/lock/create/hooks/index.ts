import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { number, string, z } from 'zod';

import { CREATE_LOCK_ENUM, CREATE_LOCK_TYPE } from './constant';

const DEFAULT_CREATE_LOCK_VALUES: CREATE_LOCK_TYPE = {
  [CREATE_LOCK_ENUM.TOKEN_ADDRESS]: '',
  [CREATE_LOCK_ENUM.TOKEN_OWNER_ADDRESS]: '',
  [CREATE_LOCK_ENUM.TITLE]: '',
  [CREATE_LOCK_ENUM.AMOUNT]: '',
  [CREATE_LOCK_ENUM.LOCK_UNTIL]: '',
};

const schema = () =>
  z.object({
    [CREATE_LOCK_ENUM.TOKEN_ADDRESS]: string()
      .trim()
      .min(1, { message: 'This field is required' })
      .max(18, { message: 'Token name must be less than 18 characters' }),

    [CREATE_LOCK_ENUM.TOKEN_OWNER_ADDRESS]: string()
      .trim()
      .min(1, { message: 'This field is required' })
      .max(18, { message: 'Token name must be less than 18 characters' }),

    [CREATE_LOCK_ENUM.TITLE]: string()
      .trim()
      .min(1, { message: 'This field is required' })
      .max(5, { message: 'Token symbol must be less than 5 characters' }),

    [CREATE_LOCK_ENUM.AMOUNT]: number()
      .positive('Please enter a valid positive number')
      .min(1, { message: 'Token decimals must be greater than 1' })
      .max(18, { message: 'Token decimals must be less than 18' })
      .nullable(),

    [CREATE_LOCK_ENUM.LOCK_UNTIL]: string()
      .trim()
      .min(1, { message: 'This field is required' })
      .max(30, 'Invalid total supply'),
  });

export const useCreateLook = () => {
  const methods = useForm({ defaultValues: DEFAULT_CREATE_LOCK_VALUES, resolver: zodResolver(schema()) });

  const onSubmit = () => {};

  return { methods, onSubmit };
};
