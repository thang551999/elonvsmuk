import Image from 'next/legacy/image';

import TelegramIcon from 'resources/icons/Socials/Telegram';
import TwitterIcon from 'resources/icons/Socials/Twitter';
import UnnameIcon from 'resources/icons/Socials/Unname';

export const matchboxItem = [
  {
    image: '/images/elon-avatar.webp',
    name: 'Elon Win',
    btnText: 'Stake $EVSM',
  },
  {
    image: '/images/mark-avatar.webp',
    name: 'Mark Win',
    btnText: 'Stake $EVSM',
  },
  {
    image: '/images/no-match-avatar.webp',
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
  <TelegramIcon key='telegram' />,
  <TwitterIcon key='twitter' />,
  <UnnameIcon key='unname' />,
  <Image src='/icons/discord-icon.webp' width={60} height={60} alt='discord' key='discord' />,
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
        {listIcon.map((icon) => (
          <div key={icon.key}>{icon}</div>
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
