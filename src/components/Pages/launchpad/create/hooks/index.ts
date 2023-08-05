import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { number, string, z } from 'zod';

import { CREATE_LAUNCHPAD_ENUM, CREATE_LAUNCHPAD_TYPE } from './constant';

const DEFAULT_CREATE_LAUNCHPAD_VALUES: CREATE_LAUNCHPAD_TYPE = {
  [CREATE_LAUNCHPAD_ENUM.TOKEN_ADDRESS]: '',
  [CREATE_LAUNCHPAD_ENUM.CURRENCY]: [],
  [CREATE_LAUNCHPAD_ENUM.FEE_OPTIONS]: [],
  [CREATE_LAUNCHPAD_ENUM.LISTING_OPTIONS]: [],
};

const schema = () =>
  z.object({
    [CREATE_LAUNCHPAD_ENUM.TOKEN_ADDRESS]: string()
      .trim()
      .min(1, { message: 'This field is required' })
      .max(18, { message: 'Token name must be less than 18 characters' }),

    [CREATE_LAUNCHPAD_ENUM.CURRENCY]: string()
      .trim()
      .min(1, { message: 'This field is required' })
      .max(5, { message: 'Token symbol must be less than 5 characters' }),

    [CREATE_LAUNCHPAD_ENUM.FEE_OPTIONS]: number()
      .positive('Please enter a valid positive number')
      .min(1, { message: 'Token decimals must be greater than 1' })
      .max(18, { message: 'Token decimals must be less than 18' })
      .nullable(),

    [CREATE_LAUNCHPAD_ENUM.LISTING_OPTIONS]: string()
      .trim()
      .min(1, { message: 'This field is required' })
      .max(30, 'Invalid total supply'),
  });

export const useCreateLaunchpad = () => {
  const methods = useForm({ defaultValues: DEFAULT_CREATE_LAUNCHPAD_VALUES, resolver: zodResolver(schema()) });

  const onSubmit = () => {};

  return { methods, onSubmit };
};
