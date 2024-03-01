import { gql } from '@apollo/client'

const GET_FACULTY_AND_DEPARTMENT_PRESIDENTS_BY_SESSION = gql`
  query {
    sessionFacultyAndDeptPresident {
      session
      history {
        studentName
        studentImage
        department {
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
    session
    history {
      studentName
      studentImage
      department {
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
    session
    history {
      studentName
      studentImage
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

export {GET_FACULTY_AND_DEPARTMENT_PRESIDENTS_BY_SESSION, GET_FACULTY_PRESIDENTS_AND_VICE_PRESIDENTS_BY_SESSION, GET_DEPARTMENT_PRESIDENTS_AND_VICE_PRESIDENTS_BY_SESSION}