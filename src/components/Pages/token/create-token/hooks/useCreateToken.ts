import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { number, string, z } from 'zod';

import CustomModal from 'components/AppModal';

import { CREATE_TOKEN_ENUM, CREATE_TOKEN_TYPE } from '../constant';

const DEFAULT_CREATE_TOKEN_VALUES: CREATE_TOKEN_TYPE = {
  [CREATE_TOKEN_ENUM.NAME]: '',
  [CREATE_TOKEN_ENUM.SYMBOL]: '',
  [CREATE_TOKEN_ENUM.DECIMALS]: 0,
  [CREATE_TOKEN_ENUM.TOTAL_SUPPLY]: '',
};

const schema = () =>
  z.object({
    [CREATE_TOKEN_ENUM.NAME]: string()
      .trim()
      .min(1, { message: 'This field is required' })
      .max(18, { message: 'Token name must be less than 18 characters' }),

    [CREATE_TOKEN_ENUM.SYMBOL]: string()
      .trim()
      .min(1, { message: 'This field is required' })
      .max(5, { message: 'Token symbol must be less than 5 characters' }),

    [CREATE_TOKEN_ENUM.DECIMALS]: string()
      // .positive('Please enter a valid positive number')
      .min(1, { message: 'Token decimals must be greater than 1' })
      .max(18, { message: 'Token decimals must be less than 18' }),
    // .nullable(),

    [CREATE_TOKEN_ENUM.TOTAL_SUPPLY]: string()
      .trim()
      .min(1, { message: 'This field is required' })
      .max(30, 'Invalid total supply'),
  });

export const useCreateToken = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  const methods = useForm({ defaultValues: DEFAULT_CREATE_TOKEN_VALUES, resolver: zodResolver(schema()) });

  const onSubmit = () => {
    setVisibleModal(true);
  };

  return { visibleModal, methods, setVisibleModal, onSubmit };
};
