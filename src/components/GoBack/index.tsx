import React, { FC } from 'react';

import { Space } from 'antd';

import GoBackIcon from 'resources/icons/GoBack';

const GoBack: FC<{
  text?: string;
  spaceSize?: number | any;
  goBackUrl?: string;
  goBack: () => void;
}> = ({ text, spaceSize, goBack, ...props }) => {
  return (
    <Space
      className='go-back-header'
      size={spaceSize || 8}
      align='center'
      style={{ cursor: 'pointer' }}
      onClick={goBack}
      {...props}
    >
      <GoBackIcon style={{ display: 'flex', alignItems: 'center' }} />
      {text || 'Back to list'}
    </Space>
  );
};

export default GoBack;
