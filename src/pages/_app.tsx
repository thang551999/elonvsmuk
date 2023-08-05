import { ReactElement, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import { SessionProvider as AuthProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';

import { ThirdwebProvider } from '@thirdweb-dev/react';

import AppConnectWalletWrapper from 'components/AppConnectWalletWrapper';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/_app.scss';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps<{ session: Session }> & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout | any) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <main>
      <ToastContainer limit={1} />
      <ThirdwebProvider
        activeChain='ethereum'
        // supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]}
        // activeChain={{
        //   chainId: 59140,
        //   rpc: ['<your-rpc-url-here>'],
        //   nativeCurrency: {
        //     decimals: 18,
        //     name: 'Consensys ETH',
        //     symbol: 'crETH',
        //   },
        //   shortName: 'czkevm',
        //   slug: 'consensys',
        //   testnet: true,
        //   chain: 'ConsenSys',
        //   name: 'ConsenSys zkEVM Testnet',
        // }}
      >
        <AuthProvider session={session} refetchOnWindowFocus={false}>
          <AppConnectWalletWrapper>{getLayout(<Component {...pageProps} />)}</AppConnectWalletWrapper>
        </AuthProvider>
      </ThirdwebProvider>
    </main>
  );
};

export default appWithTranslation(MyApp);
