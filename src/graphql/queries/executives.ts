import { gql } from '@apollo/client'

const FACULTY_PRESIDENTS = gql`
  query {
  sessions {
    id
    session
    president {
      id
      studentImage
      studentName
    }
  }
}
`

const DEPARTMENT_PRESIDENTS_BY_SESSION = gql`
  query($sessionId: String!) {
  departmentPresidents(sessionId: $sessionId) {
    studentImage
    studentName
    department {
      id
      name
    }
  }
}
`

const SESSION_FACULTY_PRESIDENT = gql`
    query($sessionId: String!) {
  session(sessionId: $sessionId) {
    id
    session
    president {
      id
      studentImage
      studentName
    }
  }
  }
`

const DEPARTMENT_PRESIDENT_AND_VICE_PRESIDENT = gql`
  query($sessionId: String!, $departmentId: String!) {
  departmentPresidentAndVicePresident(sessionId: $sessionId, departmentId: $departmentId) {
    studentName
    studentImage
    position {
      position
    }
  }
}
`

const SESSION_AND_DEPARTMENT_IDS = gql`
  query {
  sessions {
    id
    session
    departments {
      id
      name
    }
  }
}
`

const SESSION_AND_DEPARTMENT_IDS_FILTER = gql`
  query($sessionId: String!) {
  session(sessionId: $sessionId) {
    id
    session
    departments {
      id
      name
    }
  }
}
`

const FACULTY_PRESIDENT_AND_VICE_PRESIDENTS = gql`
  query {
  sessions {
    id
    session
    president {
      id
      studentName
      studentImage
      department {
        name
      }
    }
    vicePresident {
      id
      studentName
      studentImage
      department {
        name
      }
    }
  }
}
`

const SESSION_FACULTY_PRESIDENT_AND_VICE_PRESIDENT = gql`
    query($sessionId: String!) {
  session(sessionId: $sessionId) {
    id
    session
    president {
      id
      studentName
      studentImage
      department {
        name
      }
    }
    vicePresident {
      id
      studentName
      studentImage
      department {
        name
      }
    }
  }
  }
`

const FACULTY_MEMBERS = gql`
  query($sessionId: String!) {
  session(sessionId: $sessionId) {
    id
    session
    president {
      studentName
      studentImage
      department {
        name
      }
    }
    vicePresident {
      studentName
      studentImage
      department {
        name
      }
    }
    officials {
      studentImage
      studentName
      department {
        name
      }
      position {
        position
      }
    }
  }
}
`

const DEPARTMENT_MEMBERS = gql`
 query($sessionId: String!, $departmentId: String!) {
departmentOfficials(sessionId: $sessionId, departmentId: $departmentId) {
  studentName
  studentImage
  position {
    position
  }
}
}
`

export { FACULTY_PRESIDENTS, SESSION_FACULTY_PRESIDENT_AND_VICE_PRESIDENT, FACULTY_PRESIDENT_AND_VICE_PRESIDENTS, SESSION_FACULTY_PRESIDENT, SESSION_AND_DEPARTMENT_IDS
, SESSION_AND_DEPARTMENT_IDS_FILTER,  FACULTY_MEMBERS, DEPARTMENT_MEMBERS, DEPARTMENT_PRESIDENTS_BY_SESSION, DEPARTMENT_PRESIDENT_AND_VICE_PRESIDENT }
