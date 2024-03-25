import {create} from 'zustand';
import { useSetOfficialsStore, useFetchExecutiveStore, Official, useFilterStore } from '@/types'


const useFilter = create<useFilterStore>((set) => ({
  hierarchy: 'None',
  session: '',
  searchTerm: '',
  storeHierarchy: (value) => set({ hierarchy: value }),
  storeSession: (value) => set({ session: value }),
  storeSearchTerm: (value) => set({ searchTerm : value })
}));

const useFetchExecutives = create<useFetchExecutiveStore>((set) => ({
  department: { id: '', department: ''},
  session: {id: '', session: ''},
  level: '',
  label: '',
  setDepartment: (value: {id: string; department: string}) => set({ department: value }),
  setLevel: (value) => set({ level: value }),
  setLabel: (value) => set({ label: value }),
  setSession: (value) => set({ session: value })
}))

const useSetOfficials = create<useSetOfficialsStore>((set) => ({
  defaultOfficials: [],
  departmentOfficials: [],
  facultyOfficials: [],
  setDefaultOfficials: (value: Official[]) => set({ defaultOfficials: value }),
  setDepartmentOfficials: (value: Official[]) => set({ departmentOfficials: value }),
  setFacultyOfficials: (value: Official[]) => set({ facultyOfficials: value})
}))


export { useFilter, useFetchExecutives, useSetOfficials }