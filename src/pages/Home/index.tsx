import { useFilter, } from '@/store';
import FacultyExecutives from '@/components/FacultyExecutives'
import DepartmentExecutive from '@/components/DepartmentExecutive'
import FacultyAndDepartmentExecutive from '@/components/FacultyAndDepartmentExecutive'
import { useQuery } from '@apollo/client';
import { FACULTY_PRESIDENTS, SESSION_FACULTY_PRESIDENT } from '@/graphql/queries/executives'
import { useEffect, useState } from 'react'
import { Official } from '@/types'

const HomePage = () => {
	const hierarchy = useFilter((state) => state.hierarchy)
	const session = useFilter((state) => state.session)

	const [defaultOfficials, setDefaultOfficials] = useState<Official[]>([])
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

	return (
		<>
		<div className="w-full p-7 bg-white flex justify-center text-center items-center px-10">
          <span className="lg:text-2xl text-xl font-bold pl-5 font-inter">
					{hierarchy === 'None' ? "" : hierarchy } EXECUTIVES RECORD
					</span>
		</div>
			<table className="w-full border-separate border-spacing-y-3 pt-7 lg:max-w-screen-lg px-4 max-w-screen-md mx-auto space-y-7">
				<thead className="lg:w-full  lg:flex">
					<tr className="text-[#2CC84A] flex lg:justify-around justify-around lg:w-full space-x-3 px-2 lg:px-0 font-inter lg:font-medium">
						<td className="lg:w-[320px] w-[50%] text-sm ">Executive</td>
						<td className="lg:w-[120px] text-sm hidden lg:flex">Session</td>
						<td className="lg:w-[100px] text-sm ">Record</td>
						<td className=" text-sm ">Status</td>
						<td className=" text-sm ">More</td>
					</tr>
				</thead>
					{
							(hierarchy === 'None') && <FacultyAndDepartmentExecutive  defaultOfficials={defaultOfficials} loading={facultyDepartmentPresidentLoading || sessionFacultyDepartmentPresidentLoading} />
					}

					{
						(hierarchy === 'FACULTY') && <FacultyExecutives session={session} hierarchy={hierarchy}/>
					}

					{
						(hierarchy === 'DEPARTMENT') && <DepartmentExecutive session={session} hierarchy={hierarchy} />
					}

			</table>
		</>
	)
}

export default HomePage
