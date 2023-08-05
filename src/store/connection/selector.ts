import useConnectionStore from './useConnectionStore';

export const useConnectionActions = () => useConnectionStore((state) => state.actions);
export const useConnectionIsConnected = () => useConnectionStore((state) => state.isConnected);
export const useConnectionIsLoggingIn = () => useConnectionStore((state) => state.isLoggingIn);
