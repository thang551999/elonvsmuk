import { type FC, useState } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Drawer, Grid, Layout } from 'antd';
import { ConnectWallet } from '@thirdweb-dev/react';

import ToggleDrawer from 'resources/icons/ToggleDrawer';

import { MenuData } from './constant';

const { Header: HeaderAntd } = Layout;

const { useBreakpoint } = Grid;

const Header: FC = () => {
  const router = useRouter();
  const { xl } = useBreakpoint();

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  return (
    <HeaderAntd className='app-header'>
      {xl ? (
        <>
          <div className='app-header__navigation'>
            {MenuData.map((menu, idx: number) => (
              <Link href={menu.url} key={idx} className={menu.url === router?.pathname ? 'active' : ''}>
                <span>{menu.label}</span>
              </Link>
            ))}
          </div>

          <div className='app-header__wallet-btn'>
            <ConnectWallet />
          </div>
        </>
      ) : (
        <div className='mobile-header-container'>
          <Image src='/images/pepe/e-vs-m-pepe.webp' alt='E VS M' width={40} height={40} />

          <ToggleDrawer onClick={toggleDrawer} />
        </div>
      )}

      <Drawer
        placement='right'
        onClose={toggleDrawer}
        title={
          <div className='mobile-header-container'>
            <Image src='/images/pepe/e-vs-m-pepe.webp' alt='E VS M' width={40} height={40} />

            <ToggleDrawer onClick={toggleDrawer} />
          </div>
        }
        open={openDrawer}
        className='mobile-drawer'
        size='large'
      >
        <div className='app-header__navigation'>
          {MenuData.map((menu, idx: number) => (
            <Link href={menu.url} key={idx} className={menu.url === router?.pathname ? 'active' : ''}>
              <span>{menu.label}</span>
            </Link>
          ))}
        </div>
      </Drawer>
    </HeaderAntd>
  );
};
export default Header;
