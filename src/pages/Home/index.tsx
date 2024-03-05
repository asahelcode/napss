// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_DEPARTMENT_PRESIDENT_AND_VICE_PRESIDENT_BY_SESSION_VALUE, FETCH_FACULTY_AND_DEPARTMENT_PRESIDENTS_BY_SESSION_VALUE, FETCH_FACULTY_PRESIDENT_AND_VICE_PRESIDENT_BY_SESSION_VALUE, GET_DEPARTMENT_PRESIDENTS_AND_VICE_PRESIDENTS_BY_SESSION, GET_FACULTY_AND_DEPARTMENT_PRESIDENTS_BY_SESSION, GET_FACULTY_PRESIDENTS_AND_VICE_PRESIDENTS_BY_SESSION } from '@/graphql/queries/officials';
import { useFilter, useSetOfficials } from '@/store';
import FacultyAndDepartmentPresidents from '@/components/FacultyAndDepartmentPresidents';
import FacultyPresidentAndVicePresident from '@/components/FacultyPresidentAndVicePresident';
import DepartmentPresidentAndVicePresident from '@/components/DepartmentPresidentAndVicePresident';

const HomePage = () => {
	const session = useFilter((state) => state.session)
	const searchTerm = useFilter((state) => state.searchTerm)
	const setDefaultOfficials = useSetOfficials(state => state.setDefaultOfficials)
	const setDepartmentOfficials = useSetOfficials(state => state.setDepartmentOfficials)
	const setFacultyOfficials = useSetOfficials(state => state.setFacultyOfficials)
	const defaultOfficials = useSetOfficials(state => state.defaultOfficials)
	const departmentOfficials = useSetOfficials(state => state.departmentOfficials)
	const facultyOfficials = useSetOfficials(state => state.facultyOfficials)

	const { data, loading } = useQuery(GET_FACULTY_AND_DEPARTMENT_PRESIDENTS_BY_SESSION)
	const { data: facultyPresidentAndVicePresident } = useQuery(GET_FACULTY_PRESIDENTS_AND_VICE_PRESIDENTS_BY_SESSION)
	const { data: departmentPresidentAndVicePresident } = useQuery(GET_DEPARTMENT_PRESIDENTS_AND_VICE_PRESIDENTS_BY_SESSION)
	const { data: fetchFacultyDeptPresidents } = useQuery(FETCH_FACULTY_AND_DEPARTMENT_PRESIDENTS_BY_SESSION_VALUE, {
		variables: { sessionId: session },
	})
	const { data: fetchFacultyPresidentAndVice } = useQuery(FETCH_FACULTY_PRESIDENT_AND_VICE_PRESIDENT_BY_SESSION_VALUE, {
		variables: { sessionId: session }
	})
	const { data: getDeptPresidentAndVice } = useQuery(FETCH_DEPARTMENT_PRESIDENT_AND_VICE_PRESIDENT_BY_SESSION_VALUE, {
		variables: { sessionId: session }
	})

	const hierarchy = useFilter((state) => state.hierarchy)


	const getFacultyPresident = (array) => {
		return array?.filter((hist) => hist.level === 'FACULTY' && hist.position?.position === 'President')[0]
	}

	const getFacultyVicePresident = (array) => {
		return array?.filter((hist) => hist.level === 'FACULTY' && hist.position?.position === 'Vice President')[0]
	}

	const getRandomDepartmentPresident = (array) => {
		const presidents = array?.filter((hist) => hist.level === 'DEPARTMENT' && hist.position?.position === 'President')
		const randomIndex = Math.floor(Math.random() * presidents.length);

		return presidents[randomIndex]
	}

	const getDepartmentPresident = (array) => {
		return array?.filter((hist) => hist.position?.position === 'President')[0]
	}

	const getDepartmentVicePresident = (array) => {
		return array?.filter((hist) => hist.position?.position === 'Vice President')[0]
	}

	useEffect(() => {
		if( hierarchy === 'DEPARTMENT' && session === '') {
			if(departmentOfficials?.length == 0 || departmentOfficials == undefined) {
				setDepartmentOfficials(departmentPresidentAndVicePresident?.sessionDepartmentPresidentAndVice)
			}
		}else if(session !== '' && hierarchy === 'DEPARTMENT') {
			setDepartmentOfficials(getDeptPresidentAndVice?.getSessionDepartmentPresidentAndVice)
		}
	}, [departmentOfficials, departmentPresidentAndVicePresident?.sessionDepartmentPresidentAndVice, getDeptPresidentAndVice?.getSessionDepartmentPresidentAndVice, hierarchy, session, setDepartmentOfficials])


	const departmentBySessionOfficials: { [key: string]: any } = {};


	if(hierarchy === 'DEPARTMENT') {
		departmentOfficials?.map((session) => {
			const sessionValue = session?.session
			departmentBySessionOfficials[sessionValue] = {}
		session?.history?.map((hist) => {
			const departmentName = hist?.department?.name
			if (departmentName) {
				if (departmentBySessionOfficials[sessionValue][departmentName]) {
					departmentBySessionOfficials[sessionValue][departmentName].push(hist)
				} else {
					departmentBySessionOfficials[sessionValue][departmentName] = [hist]
				}
			}
		});
	});
}

const departmentOfficialsSession = Object.keys(departmentBySessionOfficials)

	useEffect(() => {
		if(hierarchy === 'None' && session !== '') {
			setDefaultOfficials(fetchFacultyDeptPresidents?.getSessionFacultyAndDeptPresident)
		}else if(session === '' && hierarchy === 'None') {
			if(defaultOfficials?.length == 0 || defaultOfficials == undefined) {
				setDefaultOfficials(data?.sessionFacultyAndDeptPresident)
			}
		}
	}, [data, defaultOfficials, fetchFacultyDeptPresidents, hierarchy, session, setDefaultOfficials])

	useEffect(() => {
		if( hierarchy === 'FACULTY' && session === '') {
			setFacultyOfficials(facultyPresidentAndVicePresident?.sessionFacultyPresidentAndVice)
		}else if(session !== '' && hierarchy === 'FACULTY') {
			const temp = []
			temp.push(fetchFacultyPresidentAndVice?.getSessionFacultyPresidentAndVice)
			setFacultyOfficials(temp)
		}
	}, [facultyPresidentAndVicePresident?.sessionFacultyPresidentAndVice, fetchFacultyPresidentAndVice, fetchFacultyPresidentAndVice?.getSessionFacultyPresidentAndVice, hierarchy, session, setFacultyOfficials])

	console.log('🙃', data)

	return (
		<>
		<div className="w-full p-7 bg-white flex justify-center text-center items-center px-10">
          <span className="lg:text-2xl text-xl font-bold pl-5">
						{/* {hierarchy == 'None' && "Records for Faculty of Physical Sciences"} */}
						{hierarchy === 'None' ? "" : hierarchy } EXECUTIVES RECORD
 					</span>
		</div>
			<table className="w-full border-separate border-spacing-y-3 pt-7 lg:max-w-screen-lg px-4 max-w-screen-md mx-auto space-y-7">
				<thead className="lg:w-full  lg:flex">
					<tr className="text-[#2CC84A] flex lg:justify-around justify-around lg:w-full space-x-3 px-2 lg:px-0">
						<td className="lg:w-[320px] w-[50%] text-sm ">Executive</td>
						<td className="lg:w-[120px] text-sm hidden lg:flex">Session</td>
						<td className="lg:w-[100px] text-sm ">Record</td>
						<td className=" text-sm ">Status</td>
						<td className=" text-sm ">More</td>
					</tr>
				</thead>
					{
						(hierarchy === 'None') && (
								defaultOfficials?.map((session) => {
									console.log(session)
							const facultyPresident = getFacultyPresident(session?.history)
							const departmentPresident = getRandomDepartmentPresident(session?.history)

							console.log(facultyPresident)
							console.log(departmentPresident)

							if(session?.history.length > 0) {
								return (
									<>
									<tbody className="w-full bg-white flex lg:p-5 p-2 py-8 flex-col space-y-5 relative rounded-xl">
										<FacultyAndDepartmentPresidents facultyPresident={facultyPresident} departmentPresident={departmentPresident} session={session}/>
										</tbody>
									</>
								)
							}
						})
						)
					}

					{
						(hierarchy === 'FACULTY') && facultyOfficials?.map((session) => {
							const facultyPresident = getFacultyPresident(session?.history)
							const facultyVicePresident = getFacultyVicePresident(session?.history)

							console.log(facultyPresident)
							console.log(facultyVicePresident)

							if(session?.history.length > 0) {
								return (
									<>
										<tbody className="w-full bg-white flex p-5 py-8 flex-col space-y-5 relative rounded-xl">
										<FacultyPresidentAndVicePresident president={facultyPresident} vicePresident={facultyVicePresident} session={session}/>
										</tbody>
									</>
								)
							}
						})
					}

					{
						(hierarchy === 'DEPARTMENT') && departmentOfficialsSession?.map((session) => {
  if (Object.keys(departmentBySessionOfficials[session]).length > 0) {
    const departments = Object.keys(departmentBySessionOfficials[session]);
    return departments?.map((department) => {
      const departmentHistory = departmentBySessionOfficials[session][department];

      const departmentPresident = getDepartmentPresident(departmentHistory);
      const departmentVicePresident = getDepartmentVicePresident(departmentHistory);
			
      return (
				<tbody className="w-full bg-white flex p-5 py-8 flex-col space-y-5 relative rounded-xl">
        <DepartmentPresidentAndVicePresident
          key={`${session}-${department}`}
          president={departmentPresident}
          vicePresident={departmentVicePresident}
          session={session}
					sessionId={departmentPresident?.session?.id}
        />
				</tbody>
      )
    });
  }
  return null; // or return an empty array if you prefer
						})
					}

			</table>
		</>
	)
}

export default HomePage
