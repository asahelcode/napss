import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Line from '../../assets/line.svg'
import { useFetchExecutives } from '@/store'
import { useNavigate } from 'react-router-dom'


const DepartmentPresidentAndVicePresident = ({president, vicePresident, session, sessionId}) => {
	const setSession = useFetchExecutives(state => state.setSession)
	const setLevel = useFetchExecutives(state => state.setLevel)
	const setLabel = useFetchExecutives(state => state.setLabel)
	const setDepartment = useFetchExecutives(state => state.setDepartment)
	const navigate = useNavigate()

	const displayDepartment = (session, departmentId) => {
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

	const displayDepartmentAccomplishment = (session, departmentId) => {
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
     <tr className="flex justify-around items-center">
						<td className="flex space-x-2 items-start z-20  w-[300px] flex-col space-y-7">
              <div className="flex items-center gap-4">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src={president?.studentImage} className="w-16  h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="text-lg font-medium">{president?.studentName}</span>
								<div className="flex flex-col">
									<span className="text-gray-500">{president?.position?.position}</span>
									<span className="text-gray-500 text-sm font-medium">{president?.department?.name}</span>
								</div>
							</div>
              </div>
              <img src={Line} alt="" className="absolute w-16 h-16 top-[5em]"/>
              <div className="flex pl-10 items-center gap-4">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src={vicePresident?.studentImage} alt="" className="w-16  h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="text-lg font-medium">{vicePresident?.studentName}</span>
								<div className="flex flex-col">
									<span className="text-gray-500">{vicePresident?.position?.position}</span>
									<span className="text-gray-500 text-sm font-medium">{vicePresident?.department?.name}</span>
								</div>
							</div>
              </div>
      
						</td>
						<td className="text-center w-[80px]">{session}</td>
						<td>
							<button className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md" onClick={() => displayDepartmentAccomplishment(president?.session, president?.department?.id)}>
								Accomplishment
							</button>
						</td>
						<td>Active</td>
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