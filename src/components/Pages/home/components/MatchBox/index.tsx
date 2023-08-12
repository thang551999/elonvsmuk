import Image from 'next/legacy/image';
import Link from 'next/link';

import PinkSaleIcon from 'resources/icons/Socials/PinkSale';
import TelegramIcon from 'resources/icons/Socials/Telegram';
import TwitterIcon from 'resources/icons/Socials/Twitter';
import UnnameIcon from 'resources/icons/Socials/Unname';

export const matchboxItem = [
  {
    image: '/images/elon-avatars.webp',
    name: 'Elon Win',
    btnText: 'Stake $EVSM',
  },
  {
    image: '/images/mark-avatars.webp',
    name: 'Mark Win',
    btnText: 'Stake $EVSM',
  },
  {
    image: '/images/no-match-avatars.webp',
    name: 'No Match',
    btnText: 'Stake $EVSM',
  },
];

const termsAndConditions = [
  'Decide who you think the winner will be.',
  'Stake as many $EVSM tokens as you want; prices will be distributed according to the size of your staking.',
  'Once the stake is committed, there is no turning back.',
  'The result will be concluded by the end of November 2023 (or until further news from both parties).',
  'Price structures: check Whitepaper v1.',
];

const listIcon = [
  {
    component: <TelegramIcon key='telegram' />,
    url: 'https://t.me/evsmglobal',
  },
  {
    component: <TwitterIcon key='twitter' />,
    url: 'https://twitter.com/evsmtoken',
  },
  {
    component: <UnnameIcon key='unname' />,
    url: 'https://bscscan.com/address/0xFA2e178842F46Ce56098b673cBf78164a37C4a8e',
  },
  {
    component: <PinkSaleIcon key='pinksale' width={60} height={60} />,
    url: 'https://www.pinksale.finance/launchpad/0x93893306c596921944bADF1be2b401164A788FE3?chain=BSC&fbclid=IwAR0AS3GKD__2cX5YNn0LMP-1cwOTdeg_k35ud0yxmcYAMs69dGB3yQ3oPrc',
  },
  // {
  //   component: <Image src='/icons/discord-icon.webp' width={60} height={60} alt='discord' key='discord' />,
  //   url: 'https://www.evsm.org/',
  // },
];

const MatchBox = () => {
  return (
    <div className='match-box-section'>
      <div className='match-box-section__elements'>
        {matchboxItem.map((item, idx: number) => (
          <div className='element' key={idx}>
            <div className='avatar'>
              <Image src={item.image} alt={item.name} layout='fill' />
            </div>

            <p>{item.name}</p>

            <button>{item.btnText}</button>
          </div>
        ))}
      </div>

      <div className='match-box-section__terms'>
        <h2>Terms and Conditions:</h2>

        <ul>
          {termsAndConditions.map((term, idx: number) => (
            <li key={idx}>{term}</li>
          ))}
        </ul>
      </div>

      <div className='match-box-section__socials'>
        {listIcon.map((icon, idx: number) => (
          <Link key={idx} href={icon.url} target='_blank'>
            <div>{icon.component}</div>
          </Link>
        ))}
      </div>

      <div className='evsm-contract'>
        $EVSM contract:
        <br />
        0x69e8D8502e693855C9b73D7f20174A609DBC7809
      </div>
    </div>
  );
};

export default MatchBox;
