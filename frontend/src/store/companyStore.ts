// store.js
import { create } from 'zustand'

interface CompanyStoreType {
    companies: any[]; // Replace 'any' with the actual type of your companies array elements
    setCompanies: (newCompanies: any[]) => void; // Replace 'any' with the actual type of your companies array elements
  }
  
  const useCompanyStore = create<CompanyStoreType>((set) => ({
    companies: [],
    setCompanies: (newCompanies) => set({ companies: newCompanies }),
  }));
  

export default useCompanyStore;
