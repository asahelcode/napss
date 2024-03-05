import { gql } from '@apollo/client'

const GET_SESSIONS = gql`
  query {
  sessions {
    id
    session
  }
}
`

const GET_FACULTY_AND_DEPARTMENT_PRESIDENTS_BY_SESSION = gql`
  query {
    sessionFacultyAndDeptPresident {
      id
      session
      status
      history {
        studentName
        studentImage
        department {
          id
          name
        }
        position {
          position
        }
        level
      }
    }
  }
`
const GET_FACULTY_PRESIDENTS_AND_VICE_PRESIDENTS_BY_SESSION = gql`
  query {
  sessionFacultyPresidentAndVice {
    id
    session
    status
    history {
      studentName
      studentImage
      department {
        id
        name
      }
      position {
        position
      }
      level
    }
  }
}
`

const GET_DEPARTMENT_PRESIDENTS_AND_VICE_PRESIDENTS_BY_SESSION = gql`
  query {
  sessionDepartmentPresidentAndVice {
      id
    session
    status
    history {
      studentName
      studentImage
      department {
        id
        name
      }
      session {
        id
        session
      }
      position {
        position
      }
    }
  }
  }
`

const FETCH_FACULTY_AND_DEPARTMENT_PRESIDENTS_BY_SESSION_VALUE = gql`
  query($sessionId: String!) {
  getSessionFacultyAndDeptPresident(sessionId: $sessionId) {
    id
    session
    history {
      studentName
      studentImage
      department {
        id
        name
      }
      position {
        position
      }
      level
    }
  }
}
`

const FETCH_FACULTY_PRESIDENT_AND_VICE_PRESIDENT_BY_SESSION_VALUE = gql`
  query($sessionId: String!) {
  getSessionFacultyPresidentAndVice(sessionId: $sessionId) {
    id
    session
    status
    history {
      studentName
      studentImage
      department {
        id
        name
      }
      position {
        position
      }
      level
    }
  }
}
`

const FETCH_DEPARTMENT_PRESIDENT_AND_VICE_PRESIDENT_BY_SESSION_VALUE = gql`
  query($sessionId: String!) {
  getSessionDepartmentPresidentAndVice(sessionId: $sessionId) {
    id
    session
    status

    history {
      studentName
      studentImage
      department {
        id
        name
      }
      position {
        position
      }
    }
  }
}
`

const SELECTED_FACULTY_EXECUTIVE_MEMBERS = gql`
  query($sessionId: String!) {
  facultyOfficials(sessionId: $sessionId) {
    studentName
    studentImage
    department {
      id
      name
    }
    position {
      position
    }
  }
}
`

const SELECTED_DEPARTMENT_EXECUTIVE_MEMBERS = gql`
  query($departmentId: String!, $sessionId: String!) {
  departmentOfficials(departmentId: $departmentId, sessionId: $sessionId) {
    studentName
    studentImage
    position {
      position
    }
  }
}
`

const GET_DEPARTMENT_ACCOMPLISHMENTS = gql`
  query($departmentId: String!, $sessionId: String!) {
  departmentAccomplishments(departmentId: $departmentId, sessionId: $sessionId) {
    id
    description
    imageUrl
  }
}
`

const GET_FACULTY_ACCOMPLISHMENTS = gql`
  query($sessionId: String!) {
  facultyAccomplishments(sessionId: $sessionId) {
    id
    description
    imageUrl
  }
}
`
const SEARCH_OFFICIAL = gql`
  query($name: String!) {
  searchOfficials(name: $name) {
    studentName
    studentImage
    department {
      id
      name
    }
    position {
      position
    }
    session {
      id
      session
      status
    }
    level
  }
}
`

export {GET_SESSIONS,GET_FACULTY_AND_DEPARTMENT_PRESIDENTS_BY_SESSION, GET_FACULTY_PRESIDENTS_AND_VICE_PRESIDENTS_BY_SESSION, GET_DEPARTMENT_PRESIDENTS_AND_VICE_PRESIDENTS_BY_SESSION, FETCH_FACULTY_AND_DEPARTMENT_PRESIDENTS_BY_SESSION_VALUE, FETCH_FACULTY_PRESIDENT_AND_VICE_PRESIDENT_BY_SESSION_VALUE, FETCH_DEPARTMENT_PRESIDENT_AND_VICE_PRESIDENT_BY_SESSION_VALUE, SELECTED_FACULTY_EXECUTIVE_MEMBERS, SELECTED_DEPARTMENT_EXECUTIVE_MEMBERS, GET_DEPARTMENT_ACCOMPLISHMENTS, GET_FACULTY_ACCOMPLISHMENTS, SEARCH_OFFICIAL}