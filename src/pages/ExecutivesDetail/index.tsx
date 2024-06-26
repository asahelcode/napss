import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useFetchExecutives } from '@/store'
// import { FACULTY_MEMBERS } from '@/graphql/queries/executives'
// import { useLazyQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import useMedia from '@/hook/useMedia'
import { Box, Skeleton } from '@mui/material';
import { ExecutiveMembers, Official, Session } from '@/types'
import useSWR from 'swr';


const ExecutiveDetail = () => {
  const setSession = useFetchExecutives((state) => state.setSession)
	const setLevel = useFetchExecutives((state) => state.setLevel)
	const setLabel = useFetchExecutives((state) => state.setLabel)
  const session = useFetchExecutives((state) => state.session)
  const level = useFetchExecutives((state) => state.level)
  const label = useFetchExecutives((state) => state.label)
  const [executives, setExecutives] = useState<ExecutiveMembers>({
    president: null,
    vicePresident: null,
    otherExecutives: [],
  })
  const { data: facultyExecutives, isLoading } = useSWR(`faculty/session/${session?.id}/leaders/all`)

	const isSmallScreen = useMedia('(max-width: 600px)');

  console.log('🙂', executives)

  useEffect(() => {
    const president = facultyExecutives?.filter((executive: any) => executive?.position?.position === 'President')[0]
    const vicePresident = facultyExecutives?.filter((executive: any) => executive?.position?.position === 'Vice President')[0]
    const otherExecutives = facultyExecutives?.filter((executive: any) => executive?.position?.position !== 'President' && executive?.position?.position !== 'Vice President')

    setExecutives({
      president,
      vicePresident,
      otherExecutives
    })
  }, [facultyExecutives])



  const navigate = useNavigate()

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
      <div className="w-full p-7 bg-white flex lg:justify-between justify-around items-center lg:px-10  font-manrope">
        <div className=" flex items-center lg:space-x-4 space-x-2">
          <button onClick={() => navigate('/')}>
          <KeyboardBackspaceIcon className="text-[#2CC84A] border-2 border-[#2CC84A] p-1 rounded-full" fontSize={`${isSmallScreen ? "medium" : "large"}`}/>
            </button>
          <div className="lg:text-2xl text-sm font-bold pl-5 w-44  flex lg:hidden lg:w-full">{session?.session}</div>
          <div className="lg:text-2xl text-sm font-bold pl-5 w-44 hidden lg:flex lg:w-full">{label}</div>
        </div>
        <div className="flex lg:space-x-10 items-center">
          <span className="font-bold hidden lg:flex text-sm lg:text-lg">{session?.session}</span>
          <button onClick={() => displayFacultyAccomplishment(session) } className="border-[#2CC84A] lg:flex text-[#2CC84A] border p-2 rounded-md lg:px-4 px-2 font-medium text-sm shadow-md">
            Accomplishment
          </button>
        </div>
		</div>
    <div className="lg:px-20 px-5 font-manrope">
    <div className="flex lg:flex-row flex-col lg:justify-between lg:py-10 py-5">
      <div className="flex flex-col space-y-3">
      <span className="font-semibold hidden lg:flex">Name and Position</span>
      {
        ( isLoading ) ? <Skeleton animation="wave" sx={{ height: 100, width: '100%'}}/> : (
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
        ( isLoading ) ? <Skeleton animation="wave" sx={{ height: 100, width: '100%'}}/> : (
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

    <table className="w-full border-separate border-spacing-y-4">
        <thead>
          <tr className="w-full flex justify-between text-[#2CC84A] lg:px-16 px-2">
            <th className="lg:w-3/5 flex justify-start">Members and Positions</th>
            <th className="">Session</th>
            <th className="">Status</th>
          </tr>
        </thead>
        {
          ( isLoading ) ? (
          <Box sx={{ width: '100%' }}>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
          </Box>
          ) : (
          <tbody className="flex space-y-4 flex-col">
            {
              executives?.otherExecutives?.map((executive: Official) => (
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