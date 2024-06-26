import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useFilter } from '@/store';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetchExecutives } from '@/store'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import useSWR from 'swr';
import useMedia from '@/hook/useMedia'
import { Session } from '@/types'

const SearchPage = () => {
  const searchTerm = useFilter((state) => state.searchTerm)
  const setSession = useFetchExecutives((state) => state.setSession)
	const setLevel = useFetchExecutives((state) => state.setLevel)
	const setLabel = useFetchExecutives((state) => state.setLabel)
  const navigate = useNavigate()
	const isSmallScreen = useMedia('(max-width: 600px)');
	const { data: searchResult, isLoading } = useSWR(`faculty/session/leader?name=${searchTerm}`)

	console.log(searchResult)
  useEffect(()=> {
    if(searchTerm == ''){
      navigate("/")
    }
  }, [navigate, searchTerm])

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
    <div className="w-full p-7 bg-white flex justify-center items-center px-10 font-sora">
        <span className="text-2xl font-bold pl-5">Search Result</span>
		</div>
			<table className="w-full border-separate border-spacing-y-5 lg:max-w-screen-lg lg:mx-auto lg:space-y-7 px-5 space-y-4 font-manrope">
				<thead className="w-full">
					<tr className="text-[#2CC84A] flex lg:justify-around justify-around lg:w-full space-x-3 px-2 lg:px-0">
						<td className="lg:w-[320px] w-[50%] text-sm ">Executive</td>
						<td className="lg:w-[120px] text-sm lg:flex hidden">Session</td>
						<td className="lg:w-[100px] text-sm hidden lg:flex">Record</td>
						<td className=" text-sm ">Status</td>
						<td className=" text-sm ">More</td>
					</tr>
				</thead>
        {
          (isLoading) ? (
						<Box sx={{ width: '100%' }}>
							<Skeleton animation="wave" sx={{ height: 100}}/>
							<Skeleton animation="wave" sx={{ height: 100}}/>
							<Skeleton animation="wave" sx={{ height: 100}}/>
						</Box>
					) : 
					(
						searchResult?.map((official: any) => (
					<tbody className="w-full bg-white flex lg:p-5 py-8 flex-col gap-4 relative rounded-xl">
						<tr className="flex lg:justify-around lg:items-center p-2 justify-around items-center space-x-2">
							<td className="flex space-x-2 items-start z-20 w-[170px] lg:w-[300px] flex-col space-y-7">
								<div className="flex items-center gap-4">
								<div className="p-1 border border-[#2CC84A] rounded-full">
								<img src={official?.studentImage} alt="" className="lg:w-16 lg:h-16 w-10 h-10 object-fill rounded-full"/>
								</div>
								<div className="">
									<span className="lg:text-lg text-xs font-extrabold">{official?.studentName}</span>
									<div className="flex flex-col">
										<span className="text-gray-500 text-xs lg:text-lg font-semibold">{official?.position?.position}</span>
										<span className="text-gray-500 text-xs lg:text-sm font-bold">{official?.department?.name}</span>
									</div>
								</div>
								</div>
				
							</td>
							<td className="text-center lg:flex lg:w-[80px] text-xs lg:text-sm font-bold hidden">{official?.session?.session}</td>
							<td>
										<button onClick={() => displayFacultyAccomplishment(official?.session)} className="border-[#2CC84A] hidden lg:flex text-[#2CC84A] border lg:p-2 
								p-1 rounded-md lg:px-4 font-medium shadow-md">
													{isSmallScreen ? 'feat' : 'Accomplishment'}
										</button>
							</td>
							<td>
								<FiberManualRecordRoundedIcon className={`${official?.session?.status ? 'text-green-500' : 'text-gray-300'}`}/>
							</td>
							<td>
										<button onClick={() => displayFacultyMembers(official?.session)}>
											<ArrowRightAltIcon className="text-[#2CC84A]"/>
										</button>
								</td>
						</tr>
					</tbody>
						))
					)
        }
			</table>
		
		</>
  )
}

export default SearchPage