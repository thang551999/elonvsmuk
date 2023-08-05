import { FC, PropsWithChildren, useEffect } from 'react';

import { useWallet } from 'factory/useWallet';

import { useConnectionActions } from 'store/connection/selector';

export const AppConnectWalletWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { address, connected } = useWallet();

  const { handleSetConnected } = useConnectionActions();

  useEffect(() => {
    handleSetConnected(address ? connected : false);
  }, [address, connected]);

  return <>{children}</>;
};

export default AppConnectWalletWrapper;
