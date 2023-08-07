import { FC, PropsWithChildren } from 'react';
import Image from 'next/legacy/image';

import { Grid } from 'antd';

import Expectation from './components/Expectation';
import GuessWinner from './components/GuessWinner';
import HowToBuy from './components/HowToBuy';
import MatchBox from './components/MatchBox';
import MillionsOfFan from './components/MillionsFan';
import TaticSection from './components/Tatics';
import Tokenomics from './components/Tokennomics';

const { useBreakpoint } = Grid;

const HomePage: FC<PropsWithChildren> = ({ children }) => {
  const { xs } = useBreakpoint();

  return (
    <div className='home-wrapper'>
      <div className='home-wrapper__image'>
        <Image
          src={!xs ? '/images/hero-banners.webp' : '/images/hero-banner-mobile.webp'}
          alt='hero-banner'
          layout='fill'
          quality={100}
          placeholder='blur'
          blurDataURL={!xs ? '/images/hero-banners.webp' : '/images/hero-banner-mobile.webp'}
        />
      </div>

      <MatchBox />

      <TaticSection />

      {/* <MillionsOfFan /> */}

      <GuessWinner />

      <div style={{ background: '#000' }} className='dark-background'>
        <HowToBuy />

        <Tokenomics />

        <Expectation />
      </div>
    </div>
  );
};

export default HomePage;
