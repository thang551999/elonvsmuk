import React from 'react';
import Image from 'next/legacy/image';

import { Grid } from 'antd';

const { useBreakpoint } = Grid;

const howToBuyData = [
  {
    logo: '/images/pepe/meta-mask-pepe.webp',
    step: 'Step 1',
    title: 'Create a Wallet',
    description:
      'Obtain the Metamask wallet or any wallet of your choice from the App Store/ Google Play Store. Alternatively, use the Metamask extension for Google Chrome.',
  },
  {
    logo: '/images/pepe/pancake-pepe.webp',
    step: 'Step 3',
    title: 'Go to Pancakeswap',
    description: 'Copy the address of $EVSM token and paste it into the search bar, then import the token.',
  },
  {
    logo: '/images/pepe/bnb-pepe.webp',
    step: 'Step 2',
    title: 'Prepare BNB',
    description:
      'Change the Network to BNB Smart Chain. Prepare BNB to swap for $EVSM; you can obtain BNB through the Metamask wallet or have them transferred to your wallet after buying them on other exchange platforms.',
  },
  {
    logo: '/images/pepe/e-vs-m-pepe.webp',
    step: 'Step 4',
    title: 'Purchase $EVSM Token',
    description:
      'Decide on how much BNB you want to exchange for $EVSM token, then sign the Metamask prompt. Remember to leave a little bit of BNB for future transaction fees.',
  },
];

const HowToBuy = () => {
  const { md } = useBreakpoint();

  return (
    <div className='how-to-buy' id='how-to-buy'>
      <div className='how-to-buy-background'>
        <Image
          src='/images/how-to-buy-background.webp'
          alt='how to buy background'
          quality={100}
          layout='fill'
          placeholder='blur'
          blurDataURL='/images/how-to-buy-background.webp'
        />
      </div>

      <div className='how-to-buy-container'>
        <h2 className='title'>How to buy</h2>

        <div className='how-to-buy-container-wrap'>
          {howToBuyData.map((data, idx: number) => (
            <div key={idx} className='step-wrapper'>
              <div className='step-wrapper-logo'>
                <Image
                  src={data.logo}
                  alt={data.title}
                  quality={100}
                  width={md ? 132 : 80}
                  height={md ? 132 : 80}
                  blurDataURL={data.logo}
                  placeholder='blur'
                />
              </div>

              <span>{data.step}</span>

              <h2>{data.title}</h2>

              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
