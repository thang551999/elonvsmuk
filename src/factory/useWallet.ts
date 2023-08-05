import { useAddress, useConnectionStatus } from '@thirdweb-dev/react';

export const useWallet = () => {
  const address = useAddress();
  const connectionStatus = useConnectionStatus();

  return {
    address,
    connected: connectionStatus === 'connected',
  };
};
