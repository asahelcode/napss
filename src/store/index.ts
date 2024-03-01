import {create} from 'zustand';

export const useFilter = create((set) => ({
  hierarchy: 'None',
  session: '',
  searchTerm: '',
  storeHierarchy: (value) => set({ hierarchy: value }),
  storeSession: (value) => set({ session: value }),
  storeSearchTerm: (value) => set({ sessionStorage: value })
}));