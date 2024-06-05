import { gql } from '@apollo/client'

const GET_SESSIONS = gql`
  query {
  sessions {
    id
    session
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

export { GET_SESSIONS, GET_FACULTY_ACCOMPLISHMENTS, SEARCH_OFFICIAL}