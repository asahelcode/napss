import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Line from '../../assets/line.svg'
import { useFetchExecutives } from '@/store'
import { useNavigate } from 'react-router-dom'
import useMedia from '@/hook/useMedia'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import { Session, Official} from '@/types'

type FacultyPresidentAndVicePresidentProp = {
	president: Official
	vicePresident: Official
	session: Session
}

const FacultyPresidentAndVicePresident = ({president, vicePresident, session}: FacultyPresidentAndVicePresidentProp) => {
	const setSession = useFetchExecutives((state) => state.setSession)
	const setLevel = useFetchExecutives((state) => state.setLevel)
	const setLabel = useFetchExecutives((state) => state.setLabel)
	const isSmallScreen = useMedia('(max-width: 600px)');
	const navigate = useNavigate()

	const displayFacultyMembers = (session: Session) => {
		setSession({
			id: session?.id,
			session: session?.session
		})
		setLabel('Faculty of Physical Sciences')
		setLevel('FACULTY')
		navigate('/executives/detail')
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

  return (
    <>
					<tr className="flex  lg:items-center justify-around items-center lg:space-x-2 font-manrope">
						<td className="flex space-x-2 items-start z-20 w-[170px] lg:w-[300px] flex-col lg:space-y-7 space-y-3">
              <div className="flex items-start  lg:items-center gap-4">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src={president?.studentImage} alt="" className="lg:w-16 w-10 h-10 lg:h-16 object-fill rounded-full z-20"/>
							</div>
							<div className="">
								<span className="lg:text-lg  text-xs lg:font-semibold font-bold">{president?.studentName}</span>
								<div className="flex flex-col">
									<span className="text-gray-500 text-xs lg:text-sm lg:font-semibold">{president?.department?.name}</span>
									<span className="text-gray-500 text-xs lg:text-sm lg:font-semibold font-sora">President</span>
								</div>
							</div>
              </div>
              <img src={Line} alt="" className="absolute h-14 w-16 left-[14px] top-[60px] lg:left-[3.2rem] lg:flex lg:w-16 lg:h-16 lg:top-[5em] -z-20"/>
              <div className="flex lg:pl-10 pl-7 lg:items-center items-start z-20 lg:gap-4 gap-2">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src={vicePresident?.studentImage}  alt="" className="lg:w-16 w-10 h-10 lg:h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="lg:text-lg text-xs lg:font-medium font-bold">{vicePresident?.studentName}</span>
								<div className="flex flex-col">
									<span className="text-gray-500 text-xs lg:text-sm lg:font-semibold">{vicePresident?.department?.name}</span>
									<span className="text-gray-500 text-xs lg:text-sm lg:font-semibold font-sora">Vice President</span>
								</div>
							</div>
              </div>
      
						</td>
						<td className="text-center lg:flex lg:w-[80px] lg:font-bold font-bold ">
							<span className="text-[9px] lg:text-lg whitespace-normal h-full w-full">
								{session?.session}
							</span>
						</td>
						<td className="lg:flex hidden">
							<button onClick={() => displayFacultyAccomplishment(session)} className="border-[#2CC84A] text-[#2CC84A] border lg:p-2 
							p-1 rounded-md lg:px-4 font-medium shadow-md" >
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
					
    </>
    
  )
}

export default FacultyPresidentAndVicePresident