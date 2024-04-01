type Official = {
  id: string
  studentImage: string
  studentName: string
  department?:Department
  position?:Position
}

type Session = {
  id: string
  session: string
  status?: boolean
}

type Department = {
  id: string
  name: string
}

type Position = {
  id?: string
  position: string
}

interface UseFetchExecutiveState {
  department: { id: string; department: string }
  session: Session
  level: string
  label: string
}

interface UseFetchExecutiveAction {
  setDepartment: (value: {id: string; department: string }) => void
  setLevel: (value: string) => void
  setLabel: (value: string) => void
  setSession: (value: Session) => void
}

type useFetchExecutiveStore = UseFetchExecutiveState & UseFetchExecutiveAction

interface useFilterState {
  hierarchy: string
  session: string
  searchTerm: string
}

interface useFilterAction {
  storeHierarchy: (value: string) => void
  storeSession: (value: string) => void
  storeSearchTerm: (value: string) => void
}

type useFilterStore = useFilterState & useFilterAction

interface useSetOfficialsState {
  defaultOfficials: Official[]
  departmentOfficials: Official[]
  facultyOfficials: Official[]
}

interface useSetOfficialsAction {
  setDefaultOfficials: (value: Official[]) => void
  setDepartmentOfficials: (value: Official[]) => void
  setFacultyOfficials: (value: Official[]) => void
}

type useSetOfficialsStore = useSetOfficialsState & useSetOfficialsAction

type ExecutiveMembers = {
  president: Official | null 
  vicePresident: Official | null
  otherExecutives: Official[]
}

type AccomplishmentType = {
  id: string
  description: string
  imageUrl: string
}

export type { Official, Session, Department, Position, useFetchExecutiveStore, useFilterStore, useSetOfficialsStore, ExecutiveMembers, AccomplishmentType }