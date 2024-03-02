import {create} from 'zustand';

const useFilter = create((set) => ({
  hierarchy: 'None',
  session: '',
  searchTerm: '',
  storeHierarchy: (value) => set({ hierarchy: value }),
  storeSession: (value) => set({ session: value }),
  storeSearchTerm: (value) => set({ sessionStorage: value })
}));

const useFetchExecutives = create((set) => ({
  departmentId: '',
  sessionId: '',
  level: '',
  setDepartmentId: (value) => set({ departmentId: value }),
  setSessionId: (value) => set({ sessionId : value }),
  setLevel: (value) => set({ level: value })
}))

const useSetOfficials = create((set) => ({
  defaultOfficials: [],
  departmentOfficials: [],
  facultyOfficials: [],
  setDefaultOfficials: (value) => set({ defaultOfficials: value }),
  setDepartmentOfficials: (value) => set({ departmentOfficials: value }),
  setFacultyOfficials: (value) => set({ facultyOfficials: value})
}))

export { useFilter, useFetchExecutives, useSetOfficials }