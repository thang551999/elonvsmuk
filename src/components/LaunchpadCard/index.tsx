import Image from 'next/legacy/image';

import { Card } from 'antd';

const { Meta } = Card;

const LaunchpadCard = () => {
  return (
    <div className='launchpad-card-wrapper'>
      <Card
        hoverable
        style={{ width: 360 }}
        cover={
          <Image
            alt='launchpad-thumbnail'
            quality={100}
            width={360}
            height={180}
            objectFit='cover'
            src='https://ongate-s3.s3.ap-southeast-1.amazonaws.com/99af4307-be02-4d05-8ca8-c58d3a63d80eProject%20Display%20Image%202000x1280.png'
          />
        }
      >
        <Meta
          avatar={
            <Image
              alt='avatar'
              quality={100}
              width={40}
              height={40}
              objectFit='cover'
              src='https://ongate-s3.s3.ap-southeast-1.amazonaws.com/5a0e137c-a170-4d13-9ef4-c269433bc8beOMT%20Token%20Logo%20200x200.png'
            />
          }
          title='Europe Street beat'
          description='www.instagram.com'
        />

        <div style={{ marginTop: '40px' }}>Other Attributes</div>
      </Card>
    </div>
  );
};

export default LaunchpadCard;
