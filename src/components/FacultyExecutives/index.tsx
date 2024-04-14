import { useLazyQuery } from '@apollo/client';
import { FACULTY_PRESIDENT_AND_VICE_PRESIDENTS, SESSION_FACULTY_PRESIDENT_AND_VICE_PRESIDENT } from '@/graphql/queries/executives'
import { useEffect, useState } from 'react'
import FacultyPresidentAndVicePresident from '@/components/FacultyPresidentAndVicePresident'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

interface FacultyExecutivesProp {
	session: string
	hierarchy: string
}

const FacultyExecutives = ({ session, hierarchy }: FacultyExecutivesProp ) => {
	const [facultyOfficials, setFacultyOfficials] = useState<any>()

	const [
        getFacultyPresidentAndVicePresidents,
        { data: facultyPresidentAndVicePresident, loading: facultyPresidentAndVicePresidentLoading }
    ] = useLazyQuery(FACULTY_PRESIDENT_AND_VICE_PRESIDENTS);

    // Lazy load the second query with variables
    const [
        getFacultyPresidentAndVicePresidentsFilter,
        { data: facultyPresidentAndVicePresidentFilter, loading: facultyPresidentAndVicePresidentFilterLoading }
    ] = useLazyQuery(SESSION_FACULTY_PRESIDENT_AND_VICE_PRESIDENT, {
        variables: { sessionId: session }
    });
		
		useEffect(() => {
			getFacultyPresidentAndVicePresidents();
			getFacultyPresidentAndVicePresidentsFilter();
		}, [getFacultyPresidentAndVicePresidents, getFacultyPresidentAndVicePresidentsFilter])
  
		useEffect(() => {
		if( hierarchy === 'FACULTY' && session === '') {
			setFacultyOfficials(facultyPresidentAndVicePresident?.sessions)
		}else if(session !== '' && hierarchy === 'FACULTY') {
			const temp = []
			temp.push(facultyPresidentAndVicePresidentFilter?.session)
			setFacultyOfficials(temp)
		}
	}, [hierarchy, session, facultyPresidentAndVicePresident?.sessions, facultyPresidentAndVicePresidentFilter?.session])

	// console.log(facultyOfficials)
	return (facultyPresidentAndVicePresidentLoading ||  facultyPresidentAndVicePresidentFilterLoading) ? (
		<Box sx={{ width: '100%' }}>
			<Skeleton animation="wave" sx={{ height: 100 }}/>
			<Skeleton animation="wave" sx={{ height: 100 }}/>
			<Skeleton animation="wave" sx={{ height: 100 }}/>
			<Skeleton animation="wave" sx={{ height: 100 }}/>
		</Box>
	) : facultyOfficials?.map((session: any) => {
								return (
									<>
										<tbody className="w-full bg-white flex p-5 py-8 flex-col space-y-5 relative rounded-xl">
										<FacultyPresidentAndVicePresident president={session?.president} vicePresident={session?.vicePresident} session={session}/>
										</tbody>
									</>
								)
						})
}



export default FacultyExecutives

