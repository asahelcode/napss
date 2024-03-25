import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Line from '../../assets/line.svg'
import { useFetchExecutives } from '@/store'
import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import useMedia from '@/hook/useMedia'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import { DEPARTMENT_PRESIDENT_AND_VICE_PRESIDENT } from '@/graphql/queries/executives'
import { useQuery } from '@apollo/client'
import { Department } from '@/types'

interface DepartmentPresidentAndVicePresidentProp {
	department: Department
	session: string
	sessionId: string
}

const DepartmentPresidentAndVicePresident = ({department, session, sessionId}: DepartmentPresidentAndVicePresidentProp) => {
	const setSession = useFetchExecutives((state) => state.setSession)
	const setLevel = useFetchExecutives((state) => state.setLevel)
	const setLabel = useFetchExecutives((state) => state.setLabel)
	const setDepartment = useFetchExecutives((state) => state.setDepartment)
	const isSmallScreen = useMedia('(max-width: 600px)');
	const navigate = useNavigate()

	const { data } = useQuery(DEPARTMENT_PRESIDENT_AND_VICE_PRESIDENT, {
		variables: {
			sessionId,
			departmentId: department?.id
		}	
	})
	

	const president = useMemo(() => data?.departmentPresidentAndVicePresident?.filter((member: any) => member?.position?.position === 'President')[0], [data?.departmentPresidentAndVicePresident])
	const vicePresident = useMemo(() => data?.departmentPresidentAndVicePresident?.filter((member: any) => member?.position?.position === 'Vice President')[0], [data?.departmentPresidentAndVicePresident])
	
	const displayDepartment = (department: Department) => {
		console.log(department)
		setSession({
			id: sessionId,
			session
		})
		setLabel(`Department of ${department?.name}`)
		setDepartment({
			id: department?.id,
			department: department?.name
		})
		setLevel('DEPARTMENT')
		navigate('/executives/detail')
	}

	const displayDepartmentAccomplishment = (department: Department) => {
		setSession({
			id: sessionId,
			session
		})
		setLabel(`Department of ${department?.name}`)
		setDepartment({
			id: department?.id,
			department: department?.name
		})
		setLevel('DEPARTMENT')
		navigate('/department/accomplishment')	
	}

  return (
    <>
						<tbody className="w-full bg-white flex p-5 py-8 flex-col space-y-5 relative rounded-xl font-manrope">
						<tr className="flex lg:justify-around lg:items-center justify-around items-center space-x-2  z-20">
						<td className="flex space-x-2 items-start w-[170px] lg:w-[300px] flex-col lg:space-y-7 space-y-3">
              <div className="flex items-start  lg:items-center gap-4">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src={president?.studentImage} className="lg:w-16 w-10 h-10 lg:h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="lg:text-lg text-xs lg:font-semibold font-bold">{president?.studentName}</span>
								<div className="flex flex-col">
									<span className="text-gray-500 text-xs lg:text-sm font-medium">{department?.name}</span>
									<span className="text-gray-500 text-xs lg:text-sm font-sora font-bold lg:font-medium">{president?.position?.position}</span>
								</div>
							</div>
              </div>
              <img src={Line} alt="" className="absolute h-16 w-16 left-[10px] top-[55px] lg:left-[3.2rem] lg:flex lg:w-16 lg:h-16 lg:top-[5em] -z-20"/>
              <div className="flex lg:pl-10 pl-7 lg:items-center items-start lg:gap-4 gap-2">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src={vicePresident?.studentImage} alt="" className="lg:w-16 w-10 h-10 lg:h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="lg:text-lg text-xs lg:font-semibold font-bold">{vicePresident?.studentName}</span>
								<div className="flex flex-col">
									<span className="text-gray-500 text-xs lg:text-sm font-medium">{department?.name}</span>
									<span className="text-gray-500 text-xs lg:text-sm font-sora font-bold lg:font-medium">{vicePresident?.position?.position}</span>
								</div>
							</div>
              </div>
      
						</td>
						<td className="text-center w-[80px] font-bold hidden lg:flex">{session}</td>
						<td>
							<button className="border-[#2CC84A] text-[#2CC84A] border lg:p-2 
							p-1 rounded-md lg:px-4 font-medium shadow-md" onClick={() => displayDepartmentAccomplishment(department)}>
								{isSmallScreen ? 'feat' : 'Accomplishment'}
							</button>
						</td>
						<td>
							<FiberManualRecordRoundedIcon className={`${president?.session?.status ? 'text-green-500' : 'text-gray-300'}`}/>
						</td>
						<td>
							<button onClick={() => displayDepartment(department)}>
									<ArrowRightAltIcon className="text-[#2CC84A]"/>
								</button>
							</td>
					</tr>
					</tbody>
    </>
  )
}

export default DepartmentPresidentAndVicePresident