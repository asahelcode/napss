
import FacultyAndDepartmentPresidents from '@/components/FacultyAndDepartmentPresidents';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { FACULTY_PRESIDENTS, SESSION_FACULTY_PRESIDENT } from '@/graphql/queries/executives'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

interface FacultyAndDepartmentExecutiveProp {
  session: string
  hierarchy: string
}

const FacultyAndDepartmentExecutive = ({session, hierarchy}: FacultyAndDepartmentExecutiveProp) => {
  const [defaultOfficials, setDefaultOfficials] = useState<any>([])
  const { data: facultyDepartmentPresident, loading: facultyDepartmentPresidentLoading } = useQuery(FACULTY_PRESIDENTS, {
  })
  const { data: sessionFacultyDepartmentPresident, loading: sessionFacultyDepartmentPresidentLoading } = useQuery(SESSION_FACULTY_PRESIDENT, {
    variables: {
      sessionId: session
    },
  })

  useEffect(() => {
    if (hierarchy === 'None' && session === '') {
      setDefaultOfficials(facultyDepartmentPresident?.sessions)
    } else if (session !== '' && hierarchy === 'None') {
      const temp = []
      temp.push(sessionFacultyDepartmentPresident?.session)
      setDefaultOfficials(temp)
    }
  }, [facultyDepartmentPresident?.sessions, hierarchy, session, sessionFacultyDepartmentPresident?.session]);

  return (facultyDepartmentPresidentLoading || sessionFacultyDepartmentPresidentLoading) ? (
         <Box sx={{ width: '100%' }}>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
          </Box>
      ) : defaultOfficials?.map((session: any) => 
               (
                <>
                  {
                    session?.president !== null && (
                    <tbody className="w-full bg-white flex lg:p-5 p-2 py-8 flex-col space-y-5 relative rounded-xl">
                      <FacultyAndDepartmentPresidents facultyPresident={session?.president} session={session}/>
                    </tbody>
                    )
                  }
                </>
              )
    )
}

export default FacultyAndDepartmentExecutive
