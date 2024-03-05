import {create} from 'zustand';

interface ValueI {
  value: string
}


interface Department {
  id: string
  department: string
}

interface Session {
  id: string
  session: string
}


const useFilter = create((set) => ({
  hierarchy: 'None',
  session: '',
  searchTerm: '',
  storeHierarchy: (value: ValueI) => set({ hierarchy: value }),
  storeSession: (value: ValueI) => set({ session: value }),
  storeSearchTerm: (value: ValueI) => set({ searchTerm : value })
}));

const useFetchExecutives = create((set) => ({
  department: { id: '', department: ''},
  session: {id: '', session: ''},
  level: '',
  label: '',
  setDepartment: (value: Department) => set({ department: value }),
  setLevel: (value: ValueI) => set({ level: value }),
  setLabel: (value: ValueI) => set({ label: value }),
  setSession: (value: Session) => set({ session: value })
}))

const useSetOfficials = create((set) => ({
  defaultOfficials: [],
  departmentOfficials: [],
  facultyOfficials: [],
  setDefaultOfficials: (value: any) => set({ defaultOfficials: value }),
  setDepartmentOfficials: (value: any) => set({ departmentOfficials: value }),
  setFacultyOfficials: (value: any) => set({ facultyOfficials: value})
}))


export { useFilter, useFetchExecutives, useSetOfficials }