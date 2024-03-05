interface IState {
  storeHierarchy: (hierarchy: string) => void,
  storeSession: (session: string) => void,
  storeSearchTerm: (searchTerm: string) => void
}

interface Session {
  id: string
  session: string
  status ?: boolean
}



export type { IState, Session }