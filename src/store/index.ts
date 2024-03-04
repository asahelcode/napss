import {create} from 'zustand';

const useFilter = create((set) => ({
  hierarchy: 'None',
  session: '',
  searchTerm: '',
  storeHierarchy: (value) => set({ hierarchy: value }),
  storeSession: (value) => set({ session: value }),
  storeSearchTerm: (value) => set({ searchTerm : value })
}));

const useFetchExecutives = create((set) => ({
  department: { id: '', department: ''},
  session: {id: '', session: ''},
  level: '',
  label: '',
  setDepartment: (value) => set({ department: value }),
  setLevel: (value) => set({ level: value }),
  setLabel: (value) => set({ label: value }),
  setSession: (value) => set({ session: value })
}))

const useSetOfficials = create((set) => ({
  defaultOfficials: [],
  departmentOfficials: [],
  facultyOfficials: [],
  setDefaultOfficials: (value) => set({ defaultOfficials: value }),
  setDepartmentOfficials: (value) => set({ departmentOfficials: value }),
  setFacultyOfficials: (value) => set({ facultyOfficials: value})
}))

// const useSetAccomplishment = create((set) => ({
//   department: { id: '', department: '' },
//   session: { id: '', session: '' },
//   level: '',
//   setDepartment: (value) => set({ department: value }),
//   setSession: (value) => set({ session: value }),
//   level: (value) => set({ level: value })
// }))

export { useFilter, useFetchExecutives, useSetOfficials }