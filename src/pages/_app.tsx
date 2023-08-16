import { ReactElement, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import { SessionProvider as AuthProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';

import AppConnectWalletWrapper from 'components/AppConnectWalletWrapper';
import ThirdwebProviderWrapper from 'components/WalletConnectProvider';

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
      <ThirdwebProviderWrapper>
        <AuthProvider session={session} refetchOnWindowFocus={false}>
          <AppConnectWalletWrapper>
            {getLayout(<Component {...pageProps} />)}
          </AppConnectWalletWrapper>
        </AuthProvider>
      </ThirdwebProviderWrapper>
    </main>
  );
};

export default appWithTranslation(MyApp);
