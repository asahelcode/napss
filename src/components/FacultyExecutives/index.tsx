import { useEffect, useState } from 'react'
import FacultyPresidentAndVicePresident from '@/components/FacultyPresidentAndVicePresident'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import useSWR from 'swr';

interface FacultyExecutivesProp {
	session: string
	hierarchy: string
}

const FacultyExecutives = ({ session, hierarchy }: FacultyExecutivesProp ) => {
	const [facultyOfficials, setFacultyOfficials] = useState<any>()
	const {data: testData, isLoading } = useSWR('faculty/sessions/leaders')

	console.log(testData)
	useEffect(() => {
		if( hierarchy === 'FACULTY' && session === '') {
			setFacultyOfficials(testData)
		}else if(session !== '' && hierarchy === 'FACULTY') {
			const currentOfficials = testData?.filter((officials: any) => officials?.id === session)
			setFacultyOfficials(currentOfficials)
			// console.log(currentOfficials)
		}
	}, [ hierarchy, session, testData])

	// console.log(facultyOfficials)sessions
	return (isLoading) ? (
		<Box sx={{ width: '100%' }}>
			<Skeleton animation="wave" sx={{ height: 100 }}/>
			<Skeleton animation="wave" sx={{ height: 100 }}/>
			<Skeleton animation="wave" sx={{ height: 100 }}/>
			<Skeleton animation="wave" sx={{ height: 100 }}/>
		</Box>
	) : facultyOfficials?.map((session: any) => {
						const president = session.history.filter((h: any) => h.position.position === 'President')[0]
						const vicePresident = session.history.filter((h: any) => h.position.position === 'Vice President')[0]
								return (
									<>
										<tbody className="w-full bg-white flex p-5 py-8 flex-col space-y-5 relative rounded-xl">
										<FacultyPresidentAndVicePresident president={president} vicePresident={vicePresident} session={session}/>
										</tbody>
									</>
								)
						})
}



export default FacultyExecutives

