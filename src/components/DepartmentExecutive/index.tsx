import { useEffect,useState } from 'react';
import { useQuery } from '@apollo/client';
import { SESSION_AND_DEPARTMENT_IDS, SESSION_AND_DEPARTMENT_IDS_FILTER } from '@/graphql/queries/executives'
import DepartmentPresidentAndVicePresident from '@/components/DepartmentPresidentAndVicePresident';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

interface DepartmentExecutiveProp {
  session: string
  hierarchy: string
}

const DepartmentExecutive = ({ session, hierarchy }: DepartmentExecutiveProp) => {
	const [departmentOfficials, setDepartmentOfficials] = useState<any>([])
	const { data: sessionDepartments, loading: departmentPresidentAndVicePresidentLoading } = useQuery(SESSION_AND_DEPARTMENT_IDS)
	const { data: sessionDepartmentsFilter , loading: sessionDepartmentsFilterLoading } = useQuery(SESSION_AND_DEPARTMENT_IDS_FILTER, {
		variables: {
			sessionId: session
		},
	})


	useEffect(() => {
		if( hierarchy === 'DEPARTMENT' && session === '') {
				setDepartmentOfficials(sessionDepartments?.sessions)
		}else if(session !== '' && hierarchy === 'DEPARTMENT') {
			const temp = []
			temp.push(sessionDepartmentsFilter?.session)
			setDepartmentOfficials(temp)
		}
	}, [session, hierarchy, sessionDepartmentsFilter?.session, sessionDepartments?.sessions])

return (departmentPresidentAndVicePresidentLoading || sessionDepartmentsFilterLoading) ? (
	<Box sx={{ width: '100%' }}>
    <Skeleton animation="wave" sx={{ height: 100 }}/>
    <Skeleton animation="wave" sx={{ height: 100 }}/>
    <Skeleton animation="wave" sx={{ height: 100 }}/>
    <Skeleton animation="wave" sx={{ height: 100 }}/>
	</Box> ) : departmentOfficials?.map((session: any) => {
		return (
			<>
			{
				session?.departments?.map((department: any) => {
					return (
						<DepartmentPresidentAndVicePresident
							key={`${session}`}
							department={department}
							sessionId={session?.id}
							session={session?.session}
						/>
					)
				})
			}
			</>
		)
	})
}

export default DepartmentExecutive
