import type { FC } from 'react';
import Image from 'next/legacy/image';

import { Grid, Layout } from 'antd';

const { Footer: FooterAntd } = Layout;
const { useBreakpoint } = Grid;

const AppFooter: FC = () => {
  const screens = useBreakpoint();

  return (
    <FooterAntd className='app-footer'>
      <div className='app-footer-container'>
        <Image src='/images/pepe/e-vs-m-pepe.webp' alt='E vs M' width={80} height={80} quality={100} />© 2023 Copyright
        $EVSM all rights reserved.
      </div>
    </FooterAntd>
  );
};
export default AppFooter;
