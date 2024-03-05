import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Line from '../../assets/line.svg'
import { useFetchExecutives } from '@/store'
import { useNavigate } from 'react-router-dom'
import useMedia from '@/hook/useMedia'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import { Session } from '@/types'

const DepartmentPresidentAndVicePresident = ({president, vicePresident, session, sessionId}: any) => {
	const setSession = useFetchExecutives((state: any) => state.setSession)
	const setLevel = useFetchExecutives((state: any) => state.setLevel)
	const setLabel = useFetchExecutives((state: any) => state.setLabel)
	const setDepartment = useFetchExecutives((state: any) => state.setDepartment)
	const isSmallScreen = useMedia('(max-width: 600px)');
	const navigate = useNavigate()

	const displayDepartment = (session: Session, departmentId: string) => {
		setSession({
			id: sessionId,
			session
		})
		setLabel(`DEPARTMENT OF ${president?.department?.name}`)
		setDepartment({
			id: departmentId,
			department: president?.department?.name
		})
		setLevel('DEPARTMENT')
		navigate('/executives/detail')
	}

	const displayDepartmentAccomplishment = (session: Session, departmentId: string) => {
		setSession({
			id: session?.id,
			session: session?.session
		})
		setLabel(`DEPARTMENT OF ${president?.department?.name}`)
		setDepartment({
			id: departmentId,
			department: president?.department?.name
		})
		setLevel('DEPARTMENT')
		navigate('/department/accomplishment')	
	}

  return (
    <>
     <tr className="flex lg:justify-around lg:items-center justify-around items-center space-x-2">
						<td className="flex space-x-2 items-start z-20 w-[170px] lg:w-[300px] flex-col lg:space-y-7 space-y-3">
              <div className="flex items-start  lg:items-center gap-4">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src={president?.studentImage} className="lg:w-16 w-10 h-10 lg:h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="lg:text-lg text-xs lg:font-medium font-bold">{president?.studentName}</span>
								<div className="flex flex-col">
									<span className="text-gray-500 text-xs lg:text-lg">{president?.position?.position}</span>
									<span className="text-gray-500 text-xs lg:text-sm font-medium">{president?.department?.name}</span>
								</div>
							</div>
              </div>
              <img src={Line} alt="" className="absolute h-16 w-16 left-[10px] top-[50px] lg:left-[3.2rem] lg:flex lg:w-16 lg:h-16 lg:top-[5em]"/>
              <div className="flex lg:pl-10 pl-7 lg:items-center items-start lg:gap-4 gap-2">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src={vicePresident?.studentImage} alt="" className="lg:w-16 w-10 h-10 lg:h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="lg:text-lg text-xs lg:font-medium font-bold">{vicePresident?.studentName}</span>
								<div className="flex flex-col">
									<span className="text-gray-500 text-xs lg:text-lg">{vicePresident?.position?.position}</span>
									<span className="text-gray-500 text-xs lg:text-sm font-medium">{vicePresident?.department?.name}</span>
								</div>
							</div>
              </div>
      
						</td>
						<td className="text-center w-[80px] hidden lg:flex">{session}</td>
						<td>
							<button className="border-[#2CC84A] text-[#2CC84A] border lg:p-2 
							p-1 rounded-md lg:px-4 font-medium shadow-md" onClick={() => displayDepartmentAccomplishment(president?.session, president?.department?.id)}>
								{isSmallScreen ? 'feat' : 'Accomplishment'}
							</button>
						</td>
						<td>
							<FiberManualRecordRoundedIcon className={`${president?.session?.status ? 'text-green-500' : 'text-gray-300'}`}/>
						</td>
						<td>
							<button onClick={() => displayDepartment(session, president?.department?.id)}>
									<ArrowRightAltIcon className="text-[#2CC84A]"/>
								</button>
							</td>
					</tr>
    </>
  )
}

export default DepartmentPresidentAndVicePresident