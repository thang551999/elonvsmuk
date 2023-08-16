import { FC, PropsWithChildren } from 'react';

import { Binance, BinanceTestnet, Ethereum, Polygon } from '@thirdweb-dev/chains';
import {
  coinbaseWallet,
  metamaskWallet,
  ThirdwebProvider,
  walletConnect,
} from '@thirdweb-dev/react';

import { SUPPORTING_CHAIN } from './contants';

const ThirdwebProviderWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThirdwebProvider
      activeChain={BinanceTestnet}
      // activeChain={SUPPORTING_CHAIN.ETHEREUM}
      //   clientId={process.env.APP_CLIENT_ID}
      supportedWallets={[metamaskWallet()]}
      supportedChains={[Ethereum, Polygon, Binance, BinanceTestnet]}
      // autoConnect={false}
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
      //  // dApp Meta Data
      //   dAppMeta={{
      //     name: 'EVSM AppMeta',
      //     description: 'EVSM description',
      //     logoUrl: 'https://example.com/logo.png',
      //     url: 'https://example.com',
      //     isDarkMode: true,
      //   }}
    >
      {children}
    </ThirdwebProvider>
  );
};

export default ThirdwebProviderWrapper;
