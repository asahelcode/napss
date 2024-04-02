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


export { FACULTY_PRESIDENTS, SESSION_FACULTY_PRESIDENT_AND_VICE_PRESIDENT, FACULTY_PRESIDENT_AND_VICE_PRESIDENTS, SESSION_FACULTY_PRESIDENT, FACULTY_MEMBERS }
