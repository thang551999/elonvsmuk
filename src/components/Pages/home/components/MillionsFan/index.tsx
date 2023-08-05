import React from 'react';
import Image from 'next/image';

import { Grid } from 'antd';

const { useBreakpoint } = Grid;

const MillionsOfFan = () => {
  const { md } = useBreakpoint();

  return (
    <div className='millions-of-fan'>
      <h2>MILLIONS OF FANS AND USERS AROUND THE GLOBE!</h2>

      <Image
        src='/images/millions-of-fan-banner.webp'
        alt='millions of fan'
        width={md ? 1580 : 450}
        height={md ? 901 : 280}
        quality={100}
        placeholder='blur'
        blurDataURL='/images/millions-of-fan-banner.webp'
      />
    </div>
  );
};

export default MillionsOfFan;
