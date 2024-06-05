import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useFetchExecutives } from '@/store'
import { useQuery } from '@apollo/client'
import { FACULTY_MEMBERS } from '@/graphql/queries/executives'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import useMedia from '@/hook/useMedia'
import { Box, Skeleton } from '@mui/material';


const ExecutiveDetail = () => {
  const setSession = useFetchExecutives((state: any) => state.setSession)
	const setLevel = useFetchExecutives((state: any) => state.setLevel)
	const setLabel = useFetchExecutives((state: any) => state.setLabel)
	// const setDepartment = useFetchExecutives((state: any) => state.setDepartment)
  const session = useFetchExecutives((state: any) => state.session)
  const level = useFetchExecutives((state: any) => state.level)
  const label = useFetchExecutives((state: any) => state.label)
  const department = useFetchExecutives((state: any) => state.department)
  const [executives, setExecutives] = useState<any>({
    president: {},
    vicePresident: {},
    otherExecutives: [],
    legislatives: []
  })

  const { loading: facultyExecutivesLoading } = useQuery(FACULTY_MEMBERS, {
    variables: { sessionId: session?.id },
    onCompleted: (data) => {
      console.log(data)
      if (level === 'FACULTY') {
        setExecutives({
          president: data?.session?.president,
          vicePresident: data?.session?.vicePresident,
          otherExecutives: data?.session?.officials,
          legislatives: data?.session?.legislatives
        });
      }
    },
  });


	const isSmallScreen = useMedia('(max-width: 600px)');

  const navigate = useNavigate()

  const displayFacultyAccomplishment = (session: any) => {
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
      <div className="w-full p-7 bg-white flex justify-between items-center px-10 font-manrope">
        <div className=" flex items-center lg:space-x-4 space-x-2">
          <button onClick={() => navigate('/')}>
          <KeyboardBackspaceIcon className="text-[#2CC84A] border-2 border-[#2CC84A] p-1 rounded-full" fontSize={`${isSmallScreen ? "medium" : "large"}`}/>
            </button>
          <span className="lg:text-2xl text-sm font-bold pl-5 w-44 lg:w-full">{label}</span>
        </div>
        <div className="flex space-x-10 items-center">
          <span className="font-bold text-sm lg:text-lg">{session?.session}</span>
          <button onClick={() => displayFacultyAccomplishment(session)} className="border-[#2CC84A] hidden lg:flex text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
            Accomplishment
          </button>
        </div>
		</div>
    <div className="lg:px-20 px-5 font-manrope">
    <div className="flex lg:flex-row flex-col lg:justify-between lg:py-10 py-5">
      <div className="flex flex-col space-y-3">
      <span className="font-semibold hidden lg:flex">Name and Position</span>
      {
        (facultyExecutivesLoading) ? <Skeleton animation="wave" sx={{ height: 100, width: '100%'}}/> : (
        <>
          <div className="bg-white p-4 flex w-[350px] rounded-lg space-x-4 items-center">
                <div className="p-1 border border-[#2CC84A] rounded-full">

            <img src={executives?.president?.studentImage} alt="" className="w-16 h-16 rounded-full object-cover"/>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-medium">{executives?.president?.studentName}</span>
              {
                level === 'FACULTY' && <span className="text-sm font-semibold">{executives?.president?.department?.name}</span>
              }
              <span className="text-sm text-gray-500 font-medium">President</span>
            </div>
          </div>
        </>
        )
      }
      </div>
      <div className="flex flex-col space-y-3 items-end justify-center">
        <span className="font-semibold hidden lg:flex">Name and Position</span>
      {
        (facultyExecutivesLoading) ? <Skeleton animation="wave" sx={{ height: 100, width: '100%'}}/> : (
        <>
            <div className="bg-white p-4 flex w-[350px] rounded-lg space-x-4 justify-end items-center">
              <div className="flex flex-col items-end">
                <span className="text-lg font-medium">{executives?.vicePresident?.studentName}</span>
                {
                  level === 'FACULTY' && <span className="text-sm font-semibold">{executives?.vicePresident?.department?.name}</span>
                }
                <span className="text-sm text-gray-500 font-medium">Vice President</span>
              </div>
                  <div className="p-1 border border-[#2CC84A] rounded-full">
              <img src={executives?.vicePresident?.studentImage} alt="" className="w-16 h-16 rounded-full object-cover"/>
              </div>
            </div>
        </>
        )
      }
          </div>
    </div>
      <div className='text-center font-semibold'>
        <span>Executive Members</span>
      </div>
    <table className="w-full border-separate border-spacing-y-4">
        <thead>
          <tr className="w-full flex justify-between text-[#2CC84A] lg:px-16 px-2">
            <th className="lg:w-3/5 flex justify-start">Members and Positions</th>
            <th className="">Session</th>
            <th className="">Status</th>
          </tr>
        </thead>
        {
          ( facultyExecutivesLoading) ? (
          <Box sx={{ width: '100%' }}>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
          </Box>
          ) : (
          <tbody className="flex space-y-4 flex-col">
            {
              executives?.otherExecutives?.map((executive: any) => (
              <tr className=" flex lg:justify-between  bg-white lg:p-5 p-3 items-center rounded-xl lg:px-16">
                <td className="lg:w-3/5 w-[200px] flex lg:flex-row flex-col justify-center lg:justify-start space-x-3 items-start lg:items-center">
                <div className="p-1 border border-[#2CC84A] rounded-full ml-8 lg:ml-0">
                  <img src={executive?.studentImage} alt="" className="lg:w-16 lg:h-16 w-12 h-12 object-cover rounded-full"/>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-lg font-medium">{executive?.studentName}</span>
              {
                level === 'FACULTY' && <span className="text-sm font-semibold">{executive?.department?.name}</span>
              }
                    <span className="text-sm text-gray-600">{executive?.position?.position}</span>
                  </div>
                </td>
                <td className="lg:w-32 w-24 lg:font-medium font-bold lg:text-lg text-xs">
                  {session?.session}
                </td>
                <td className="">
                  <FiberManualRecordRoundedIcon className="text-green-500"/>
                </td>
              </tr>
              ))
            }
          </tbody>
          )
        }
    </table>
    <div className='text-center font-semibold pt-5'>
      <span>Legislative Members</span>
    </div>
    <table className="w-full border-separate border-spacing-y-4">
        <thead>
          <tr className="w-full flex justify-between text-[#2CC84A] lg:px-16 px-2">
            <th className="lg:w-3/5 flex justify-start">Members and Positions</th>
            <th className="">Session</th>
            <th className="">Status</th>
          </tr>
        </thead>
        {
          ( facultyExecutivesLoading) ? (
          <Box sx={{ width: '100%' }}>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
          </Box>
          ) : (
          <tbody className="flex space-y-4 flex-col">
            {
              executives?.legislatives?.map((executive: any) => (
              <tr className=" flex lg:justify-between  bg-white lg:p-5 p-3 items-center rounded-xl lg:px-16">
                <td className="lg:w-3/5 w-[200px] flex lg:flex-row flex-col justify-center lg:justify-start space-x-3 items-start lg:items-center">
                <div className="p-1 border border-[#2CC84A] rounded-full ml-8 lg:ml-0">
                  <img src={executive?.studentImage} alt="" className="lg:w-16 lg:h-16 w-12 h-12 object-cover rounded-full"/>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-lg font-medium">{executive?.studentName}</span>
              {
                level === 'FACULTY' && <span className="text-sm font-semibold">{executive?.department?.name}</span>
              }
                    <span className="text-sm text-gray-600">{executive?.position?.position}</span>
                  </div>
                </td>
                <td className="lg:w-32 w-24 lg:font-medium font-bold lg:text-lg text-xs">
                  {session?.session}
                </td>
                <td className="">
                  <FiberManualRecordRoundedIcon className="text-green-500"/>
                </td>
              </tr>
              ))
            }
          </tbody>
          )
        }
    </table>
    </div>
    </>
  )
}

export default ExecutiveDetail