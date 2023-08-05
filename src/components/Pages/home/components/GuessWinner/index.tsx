import Image from 'next/image';

import { Grid } from 'antd';

import { matchboxItem } from '../MatchBox';

const { useBreakpoint } = Grid;

const GuessWinner = () => {
  const { md } = useBreakpoint();

  return (
    <div className='guess-winner'>
      <div className='guess-winner-guesser'>
        <Image
          src='/images/send-location.webp'
          alt='send-location'
          width={369}
          height={602}
          quality={100}
          placeholder='blur'
          blurDataURL='/images/send-location.webp'
        />

        <div className='guess-winner-guesser-right'>
          <div className='guess-winner-guesser-right-top'>
            {matchboxItem.map((item, idx: number) => (
              <div className='element' key={idx}>
                <Image src={item.image} alt={item.name} width={140} height={160} />

                <p>{item.name}</p>

                <button>{item.btnText}</button>
              </div>
            ))}
          </div>

          <div className='guess-winner-guesser-right-bottom'>
            <p>WHO WILL WIN? YOU GUESS!</p>
          </div>
        </div>
      </div>

      <div className='guess-winner-soldier'>
        <Image
          src='/images/elon-vs-mark-01.webp'
          alt='elon-vs-mark-01'
          width={md ? 1170 : 370}
          height={md ? 658 : 210}
          quality={100}
          placeholder='blur'
          blurDataURL='/images/elon-vs-mark-01.webp'
        />

        <p>
          WILL $EVSM BE THE SYMBOL OF THE MATCH OF THE CENTURY? YOU DECIDE!
          <br />
          <br /> WILL THE GRUDGE BETWEEN THESE TWO ONLY STOP AT THE BATTLEFIELD?
        </p>
      </div>

      <div className='guess-winner-soldier'>
        <div className='guess-winner-soldier-img'>
          <Image
            src='/images/elon-vs-mark-02.webp'
            alt='elon-vs-mark-02'
            width={md ? 1170 : 370}
            height={md ? 658 : 210}
            quality={100}
            placeholder='blur'
            blurDataURL='/images/elon-vs-mark-02.webp'
          />
        </div>

        <p>
          CAN THREADS OVERTHROW TWITTER? <br />
          YET, THERE ARE SO MANY UNANSWERED QUESTIONS.
          <br />
          <br />
          BUY $EVSM, SUPPORT, AND FOLLOW $EVSM TO KNOW MORE!
        </p>
      </div>
    </div>
  );
};

export default GuessWinner;
