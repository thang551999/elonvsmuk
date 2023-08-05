import React from 'react';
import Image from 'next/legacy/image';

import { Grid } from 'antd';

import ClosingIcon from 'resources/icons/ClosingIcon';
import ClosingV2Icon from 'resources/icons/ClosingV2Icon';

const { useBreakpoint } = Grid;

const TaticSection = () => {
  const { xl } = useBreakpoint();

  return (
    <div className='tatic-section'>
      <div className='heading'>
        <ClosingIcon className='svg-1' />

        <div className='heading__description'>
          <p>
            HEADS UP BETWEEN <br /> TWO FAMOUS BILLIONAIRES:
            <div>
              ELON MUSK VS <br /> MARK ZUCKERBERG
            </div>
          </p>
        </div>

        <ClosingV2Icon className='svg-2' />
      </div>

      <div className='tatic-section__image'>
        <Image
          src='/images/musk-vs-zuck-tatic.webp'
          alt='musk vs zuck'
          width={xl ? 1028 : 350}
          height={xl ? 1028 : 350}
          quality={100}
          placeholder='blur'
          blurDataURL='/images/musk-vs-zuck-tatic.webp'
          objectFit='cover'
        />
      </div>
    </div>
  );
};

export default TaticSection;
