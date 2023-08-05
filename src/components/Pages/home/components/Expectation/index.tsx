import React from 'react';
import Image from 'next/legacy/image';

const expectationPhase = [
  {
    phase: 'Phase 1',
    desc: ['Create website and community groups.', 'Audit.', 'Launch $EVSM Presale.', 'Pinksale Launch.'],
  },
  {
    phase: 'Phase 2',
    desc: [
      'List $EVSM on Pancakeswap.',
      'Marketing push.',
      'Launch a betting competition between Elon and Mark.',
      'Coingecko listing.',
      'Coin market cap listing.',
    ],
  },
  {
    phase: 'Phase 3',
    desc: [
      'CEX listing.',
      'Finalize Elon VS Mark competition results, announce Jackpot winners.',
      'Airdrop NFT to participants.',
    ],
  },
  {
    phase: 'Phase 4',
    desc: ['Staking $EVSM program.', 'More CEX listings.', 'Community vote on the growth of $EVSM.'],
  },
  {
    phase: 'Phase 5',
    desc: ['Launch NFT P2E games, NFT marketplace.', 'To be announced (TBA).'],
  },
];

const Expectation = () => {
  return (
    <div className='expectation-container'>
      <div className='expectation-wrapper'>
        <Image
          src='/images/meme/evsm-meme.webp'
          alt='rough expectation'
          quality={100}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL='/images/meme/evsm-meme.webp'
        />

        <h4>
          Roadmap <br />
          Rough expectation:
        </h4>

        <div className='phase'>
          {expectationPhase.map((item, idx: number) => (
            <div className='phase-container' key={idx}>
              <h3>{item.phase}</h3>

              <ul>
                {item.desc.map((phase, index: number) => (
                  <li key={index}>{phase}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='disclaimer-container'>
        <Image
          src='/images/meme/evsm-meme-01.webp'
          alt='disclaimer'
          quality={100}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL='/images/meme/evsm-meme-01.webp'
        />

        <h3>Disclaimer:</h3>

        <p>
          $EVSM is an independent token not affiliated with any group, individual, or organization. It was designed
          purely to provide enjoyment for the community and should be approached as such. $EVSM is a meme coin with no
          intrinsic value or expectation of financial return. There is no formal team. The coin is completely useless
          and for entertainment purposes only.
        </p>
      </div>
    </div>
  );
};

export default Expectation;
