import { FC, PropsWithChildren } from 'react';
import Image from 'next/legacy/image';

import Expectation from './components/Expectation';
import GuessWinner from './components/GuessWinner';
import HowToBuy from './components/HowToBuy';
import MatchBox from './components/MatchBox';
import MillionsOfFan from './components/MillionsFan';
import TaticSection from './components/Tatics';
import Tokenomics from './components/Tokennomics';

const HomePage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='home-wrapper'>
      <div className='home-wrapper__image'>
        <Image
          src='/images/hero-banner.webp'
          alt='hero-banner'
          layout='fill'
          quality={100}
          placeholder='blur'
          blurDataURL='/images/hero-banner.webp'
        />
      </div>

      <MatchBox />

      <TaticSection />

      <MillionsOfFan />

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
