import { create } from 'zustand';

interface Connection {
  isLoggingIn: boolean;
  isConnected: boolean;
}

export interface ConnectionAction {
  handleSetIsLoggingIn: (isLoggingIn: Connection['isLoggingIn']) => void;
  handleSetConnected: (isConnected: Connection['isConnected']) => void;
}

const initialState: Connection = {
  isLoggingIn: false,
  isConnected: false,
};

const useConnectionStore = create<Connection & { actions: ConnectionAction }>((set) => ({
  //States
  ...initialState,

  //Actions
  actions: {
    handleSetIsLoggingIn: (isLoggingIn) => set({ isLoggingIn }),
    handleSetConnected: (isConnected) => set({ isConnected }),
  },
}));

export default useConnectionStore;
