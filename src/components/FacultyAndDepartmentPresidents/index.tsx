import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Line from '../../assets/line.svg'
import { useFetchExecutives} from '@/store'
import { useNavigate } from 'react-router-dom'
import useMedia from '@/hook/useMedia'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import {  useState } from 'react'
import {DEPARTMENT_PRESIDENTS_BY_SESSION} from '@/graphql/queries/executives'
import { useQuery } from '@apollo/client'
import { Official, Session, Department } from '@/types'

type FacultyDepartmentPresidentsProp = {
	facultyPresident: Official
	session: Session
}

const FacultyAndDepartmentPresidents = ({facultyPresident, session}: FacultyDepartmentPresidentsProp) => {
	const setSession = useFetchExecutives((state) => state.setSession)
	const setLevel = useFetchExecutives((state) => state.setLevel)
	const setLabel = useFetchExecutives((state) => state.setLabel)
	const setDepartment = useFetchExecutives((state) => state.setDepartment)
	const [deptPresident, setDeptPresident] = useState<Official>()
	const isSmallScreen = useMedia('(max-width: 600px)')
	const {loading: departmentPresidentsLoading } = useQuery(DEPARTMENT_PRESIDENTS_BY_SESSION, {
		variables: {
			sessionId: session?.id
		},
		onCompleted: (data) => {
			setDeptPresident(randomPresident(data?.departmentPresidents))
		}
	})

	const randomPresident = (array: any) => {
		if(array?.length === 0) return null
		if(array?.length === 1) return array[0]
		const index = Math.floor(Math.random() * array?.length)
		return array[index]
	}

	const navigate = useNavigate()


	console.log(departmentPresidentsLoading)

	const displayFacultyMembers = (session: Session) => {
		setSession({
			id: session?.id,
			session: session?.session
		})
		setLabel('Faculty OF Physical Sciences')
		setLevel('FACULTY')
		navigate('/executives/detail')
	}
	
	const displayDepartmentMembers = (session: Session, department: Department | undefined) => {
		if(department) {
			setSession({
				id: session?.id,
				session: session?.session
			})
			setLabel(`Department of ${department?.name}`)
			setDepartment({
				id: department?.id,
				department: department?.name
			})
			setLevel('DEPARTMENT')
			navigate('/executives/detail')
		}
	}

	const displayFacultyAccomplishment = (session: Session) => {
		setSession({
			id: session?.id,
			session: session?.session
		})
		setLabel('Faculty of Physical Sciences')
		setLevel('FACULTY')
		navigate('/department/accomplishment')
	}

	const displayDepartmentAccomplishment = (session: Session, department: Department | undefined) => {
		if(department) {
		setSession({
			id: session?.id,
			session: session?.session
		})
		setLabel(`Department of ${department?.name}`)
			setDepartment({
				id: department?.id,
				department: department?.name
			})
			setLevel('DEPARTMENT')
			navigate('/department/accomplishment')	
		}
	}
	
  return (
    <>
      <tr className="flex lg:justify-around lg:items-center justify-around items-center space-x-2 font-manrope">
											<td className="flex lg:flex-row space-x-2  lg:items-center z-20 w-[170px] items-center  lg:w-[300px] font-manrope">
												<div className="p-1 border border-[#2CC84A] rounded-full">
												<img src={facultyPresident?.studentImage} alt="" className="lg:w-16 lg:h-16 w-10 h-10 object-fill rounded-full"/>
												</div>
												<div className="flex flex-col space-y-1">
													<span className="lg:text-lg text-xs font-extrabold">{facultyPresident?.studentName}</span>
														<span className="text-gray-500 text-xs font-semibold">Faculty President</span>
												</div>
											</td>
											<td className="text-center lg:w-[80px] lg:text-sm lg:font-semibold  hidden lg:flex text-xs ">{session?.session}</td>
											<td>
											<button onClick={() => displayFacultyAccomplishment(session)} className="border-[#2CC84A] text-[#2CC84A] border lg:p-2 
							p-1 rounded-md lg:px-4 font-medium shadow-md">
												{isSmallScreen ? 'feat' : 'Accomplishment'}
											</button>
											</td>
											<td>
												<FiberManualRecordRoundedIcon className={`${session?.status ? 'text-green-500' : 'text-gray-300'}`}/>
											</td>
											<td>
												<button onClick={() => displayFacultyMembers(session)}>
												<ArrowRightAltIcon className="text-[#2CC84A]"/>
													</button>
												</td>
										</tr>
										<img src={Line} alt="" className="absolute lg:left-[65px] lg:top-[75px] lg:w-16 lg:h-14 w-14 top-[4rem] h-12 lg:flex"/>
									<tr className="flex justify-around items-center lg:pl-12 pl-6 font-manrope">
										<td className="flex space-x-2 lg:w-[250px] w-[150px] lg:flex-row items-start">
											<div className="p-1 border border-[#2CC84A] rounded-full">
											<img src={deptPresident?.studentImage} alt="" className="lg:w-16 lg:h-16 w-8 h-8 object-fill rounded-full"/>
											</div>
											<div className="lg:w-[120px]">
												<span className="lg:text-[13px] text-xs  lg:font-bold font-extrabold">{deptPresident?.studentName}</span>
												<div className="flex flex-col text-gray-500 font-medium">
													<span className="text-xs lg:text-sm">{deptPresident?.department?.name}</span>
													<span className="hidden lg:flex lg:text-sm font-sora">President</span>
												</div>
											</div>
										</td>
										<td className="text-center lg:w-[80px] lg:text-sm lg:font-semibold  hidden lg:flex text-xs">{session?.session}</td>
										<td>
											<button className="border-[#2CC84A] text-[#2CC84A] border lg:p-2 
							p-1 rounded-md lg:px-4 font-medium shadow-md" onClick={() => displayDepartmentAccomplishment( session, deptPresident?.department)}>
												{isSmallScreen ? 'feat' : 'Accomplishment'}
									</button>
								
										</td>
										<td>
												<FiberManualRecordRoundedIcon className={`${session?.status ? 'text-green-500' : 'text-gray-300'}`}/>
											</td>
										<td>
											<button onClick={() => displayDepartmentMembers(session, deptPresident?.department)}>
											<ArrowRightAltIcon className="text-[#2CC84A]"/>
												</button>
											</td>
									</tr>
    </>
    
  )
}

export default FacultyAndDepartmentPresidents