import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Line from '../../assets/line.svg'
import { useFetchExecutives } from '@/store'
import { useNavigate } from 'react-router-dom'


const FacultyAndDepartmentPresidents = ({facultyPresident, departmentPresident, session}) => {
	const setSessionId = useFetchExecutives(state => state.setSessionId)
	const setLevel = useFetchExecutives(state => state.setLevel)

	const navigate = useNavigate()

	const displayFaculty = (sessionId) => {
		setSessionId(sessionId)
		setLevel('FACULTY')
		navigate('/executives/detail')
	}

	// console.log(departmentPresident)

	const displayDepartment = (sessionId, departmentId) => {
		console.log(sessionId)
		console.log('&&&', departmentId)
	}
	
  return (
    <>
      <tr className="flex justify-around items-center">
											<td className="flex space-x-2 items-center z-20  w-[300px] ">
												<div className="p-1 border border-[#2CC84A] rounded-full">
												<img src={facultyPresident?.studentImage} alt="" className="w-16  h-16 object-fill rounded-full"/>
												</div>
												<div className="">
													<span className="text-lg font-medium">{facultyPresident?.studentName}</span>
													<div>
														<span className="text-gray-500">Faculty {facultyPresident?.position?.position}</span>
													</div>
												</div>
											</td>
											<td className="text-center w-[80px]">{session?.session}</td>
											<td>
												<button className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
											Accomplishment</button>
											</td>
											<td>Active</td>
											<td>
												<button onClick={() => displayFaculty(session?.id)}>
												<ArrowRightAltIcon className="text-[#2CC84A]"/>
													</button>
												</td>
										</tr>
										<img src={Line} alt="" className="absolute left-[70px] top-[90px] w-16 h-14"/>
									<tr className="flex justify-around items-center pl-12">
										<td className="flex space-x-2 w-[250px] ">
											<div className="p-1 border border-[#2CC84A] rounded-full">
											<img src={departmentPresident?.studentImage} alt="" className="w-16  h-16 object-fill rounded-full"/>
											</div>
											<div className="">
												<span className="text-lg font-medium">{departmentPresident?.studentName}</span>
												<div className="flex flex-col text-gray-500">
													<span className="">{departmentPresident?.position?.position}</span>
													<span className="text-xs font-medium">{departmentPresident?.department?.name}</span>
												</div>
											</div>
										</td>
										<td className="text-center w-[80px]">{session?.session}</td>
										<td>
											<button className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
										Accomplishment
									</button>
										</td>
										<td>Active</td>
										<td>
											<button onClick={() => displayDepartment(session?.id, departmentPresident?.department?.id)}>
											<ArrowRightAltIcon className="text-[#2CC84A]"/>
												</button>
											</td>
									</tr>
    </>
    
  )
}

export default FacultyAndDepartmentPresidents