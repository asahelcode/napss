import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Line from '../../assets/line.svg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DEPARTMENT_PRESIDENTS_AND_VICE_PRESIDENTS_BY_SESSION, GET_FACULTY_AND_DEPARTMENT_PRESIDENTS_BY_SESSION, GET_FACULTY_PRESIDENTS_AND_VICE_PRESIDENTS_BY_SESSION } from '@/graphql/queries/officials';
import { useFilter } from '@/store';
import FacultyAndDepartmentPresidents from '@/components/FacultyAndDepartmentPresidents';
import FacultyPresidentAndVicePresident from '@/components/FacultyPresidentAndVicePresident';

const HomePage = () => {
	const { data, loading } = useQuery(GET_FACULTY_AND_DEPARTMENT_PRESIDENTS_BY_SESSION)
	const { data: facultyPresidentAndVicePresident } = useQuery(GET_FACULTY_PRESIDENTS_AND_VICE_PRESIDENTS_BY_SESSION)
	const { data: departmentPresidentAndVicePresident } = useQuery(GET_DEPARTMENT_PRESIDENTS_AND_VICE_PRESIDENTS_BY_SESSION)
	const hierarchy = useFilter((state) => state.hierarchy)
	const session = useFilter((state) => state.session)
	const searchTerm = useFilter((state) => state.searchTerm)

	const sessionsData = data?.sessionFacultyAndDeptPresident

	const getFacultyPresident = (array) => {
		return array?.filter((hist) => hist.level === 'FACULTY' && hist.position?.position === 'President')[0]
	}

	const getFacultyVicePresident = (array) => {
		return array?.filter((hist) => hist.level === 'FACULTY' && hist.position?.position === 'Vice President')[0]
	}

	const getDepartmentPresident = (array) => {
		const presidents = array?.filter((hist) => hist.level === 'DEPARTMENT')
		const randomIndex = Math.floor(Math.random() * presidents.length);

		return presidents[randomIndex]
	}

	console.log('🤗', departmentPresidentAndVicePresident)
	return (
		<>
		<div className="w-full p-7 bg-white flex justify-between items-center px-10">
          <span className="text-2xl font-bold pl-5">Records for Faculty of Physical Sciences</span>
          <button className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
            Accomplishment
          </button>
		</div>
			<table className="w-full border-separate border-spacing-y-5 max-w-screen-lg mx-auto space-y-7">
				<thead className="w-full">
					<tr className="text-[#2CC84A] flex justify-around w-full">
						<td className="w-[320px]">Name and Position</td>
						<td className="w-[120px]">Session</td>
						<td className="w-[100px]">Record</td>
						<td className="">Status</td>
						<td className="">More</td>
					</tr>
				</thead>
				<tbody className="w-full bg-white flex p-5 py-8 flex-col space-y-5 relative rounded-xl">
					{
						(hierarchy === 'None') && sessionsData?.map((session) => {
							const facultyPresident = getFacultyPresident(session?.history)
							const departmentPresident = getDepartmentPresident(session?.history)

							if(session?.history.length > 0) {
								return (
									<>
										<FacultyAndDepartmentPresidents facultyPresident={facultyPresident} departmentPresident={departmentPresident} session={session}/>
									</>
								)
							}
						})
					}

					{
						(hierarchy === 'FACULTY') && facultyPresidentAndVicePresident?.sessionFacultyPresidentAndVice?.map((session) => {
							const facultyPresident = getFacultyPresident(session?.history)
							const facultyVicePresident = getFacultyVicePresident(session?.history)

							if(session?.history.length > 0) {
								return (
									<>
										<FacultyPresidentAndVicePresident president={facultyPresident} vicePresident={facultyVicePresident} session={session}/>
									</>
								)
							}
						})
					}

					{
						(hierarchy === 'DEPARTMENT')
					}
				</tbody>
			</table>
			<div className="flex justify-end space-x-4 max-w-screen-lg mx-auto">
				<KeyboardArrowLeftIcon className="border border-black rounded-full "/>
				<KeyboardArrowRightIcon className="border text-[#2CC84A] border-[#2CC84A] rounded-full"/>
			</div>
		</>
	)
}

export default HomePage
