// store.js
import { create } from 'zustand'

interface ContractsStoreType {
    contracts: []
}

const useContractsStore = create<ContractsStoreType>((set) => ({
  contracts: []
//   increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useContractsStore;
