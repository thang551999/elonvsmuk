import React from 'react';
import Image from 'next/legacy/image';

const Tokenomics = () => {
  return (
    <div className='tokenomics-container'>
      <h2 className='tokenomics-container__title'>TOKENOMICS</h2>

      <div className='tokenomics-container__supply'>
        Token Supply:
        <br />
        100,000,000,000,000
      </div>

      <div className='tokenomics-container__chart'>
        <Image
          src='/images/tokenomics-chart.webp'
          alt='tokenomics chart'
          quality={100}
          width={550}
          height={444}
          placeholder='blur'
          blurDataURL='/images/tokenomics-chart.webp'
        />

        <ul className='chart-description'>
          <li>Tax: 1/1</li>
          <li>CEX: 10%</li>
          <li>Marketing: 5%</li>
          <li>Team: 5%</li>
          <li>Presale and liquidity: 80%</li>
        </ul>
      </div>
    </div>
  );
};

export default Tokenomics;
