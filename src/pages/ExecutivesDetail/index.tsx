import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useFetchExecutives } from '@/store'
import { useQuery } from '@apollo/client'
import { SELECTED_FACULTY_EXECUTIVE_MEMBERS, SELECTED_DEPARTMENT_EXECUTIVE_MEMBERS } from '@/graphql/queries/officials'
import { useNavigate } from 'react-router-dom'
import { useState, useMemo } from 'react'

const ExecutiveDetail = () => {
  const session = useFetchExecutives(state => state.session)
  const level = useFetchExecutives(state => state.level)
  const label = useFetchExecutives(state => state.label)
  const department = useFetchExecutives(state => state.department)
  const [executives, setExecutives] = useState([])
  const { data: facultyExecutives } = useQuery(SELECTED_FACULTY_EXECUTIVE_MEMBERS, {
    variables: { sessionId: session?.id },
    onCompleted: (data) => {
      if (level === 'FACULTY') {
        setExecutives(data?.facultyOfficials);
      }
    },
  });

  const { data: departmentExecutives } = useQuery(SELECTED_DEPARTMENT_EXECUTIVE_MEMBERS, {
    variables: { sessionId: session?.id, departmentId: department?.id },
    onCompleted: (data) => {
      if (level === 'DEPARTMENT') {
        setExecutives(data?.departmentOfficials);
      }
    },
  });
  const navigate = useNavigate()

  // if(level === 'FACULTY') {
  //   setExecutives(facultyExecutives?.facultyOfficials)
  // }else if(level === 'DEPARTMENT') {
  //   setExecutives(DepartmentExecutives?.departmentOfficials)
  // }

  const { president, vicePresident, otherExecutives } = useMemo(() => {
    const president = executives?.find((exec) => exec?.position?.position === 'President');
    const vicePresident = executives?.find((exec) => exec?.position?.position === 'Vice President');
    const otherExecutives = executives?.filter((exec) => exec?.position?.position !== 'President' && exec?.position?.position !== 'Vice President');

    return { president, vicePresident, otherExecutives}
  }, [executives])


  // console.log(president)
  // console.log(vicePresident)
  // console.log(executives)
  console.log('😀', executives)
  return (
    <>
      <div className="w-full p-7 bg-white flex justify-between items-center px-10">
        <div className=" flex items-center space-x-4">
          <button onClick={() => navigate('/')}>
          <KeyboardBackspaceIcon className="text-[#2CC84A] border-2 border-[#2CC84A] p-1 rounded-full" fontSize="large"/>
            </button>
          <span className="text-2xl font-bold pl-5">{label}</span>
        </div>
        <div className="flex space-x-10 items-center">
          <span className="font-bold text-lg">{session?.session}</span>
          <button className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
            Accomplishment
          </button>
        </div>
		</div>
    <div className="px-20">
    <div className="flex justify-between py-10">
      <div className="flex flex-col space-y-3">
        <span className="font-semibold">Name and Position</span>
        <div className="bg-white p-4 flex w-[350px] rounded-lg space-x-4 items-center">
          <img src={president?.studentImage} alt="" className="w-16 h-16 rounded-full object-cover"/>
          <div className="flex flex-col">
            <span className="text-lg font-medium">{president?.studentName}</span>
            <span className="text-sm text-gray-500 font-medium">President</span>
            {
              level === 'FACULTY' && <span className="text-sm font-semibold">{president?.department?.name}</span>
            }
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-3 items-end justify-center">
        <span className="font-semibold">Name and Position</span>
        <div className="bg-white p-4 flex w-[350px] rounded-lg space-x-4 justify-end items-center">
          <div className="flex flex-col items-end">
            <span className="text-lg font-medium">{vicePresident?.studentName}</span>
            <span className="text-sm text-gray-500 font-medium">Vice President</span>
            {
              level === 'FACULTY' && <span className="text-sm font-semibold">{vicePresident?.department?.name}</span>
            }
          </div>
          <img src={vicePresident?.studentImage} alt="" className="w-16 h-16 rounded-full object-cover"/>
        </div>
      </div>
    </div>

    <table className="w-full border-separate border-spacing-y-4">
        <thead>
          <tr className="w-full flex justify-between text-[#2CC84A] px-16">
            <th className="w-3/5 flex justify-start">Members and Positions</th>
            <th className="">Session</th>
            <th className="">Status</th>
          </tr>
        </thead>
        <tbody className="flex space-y-4 flex-col">
          {
            otherExecutives?.map((executive) => (
            <tr className=" flex justify-between   bg-white p-5 items-center rounded-xl px-16">
              <td className="w-3/5 flex  justify-start space-x-3 items-center">
                <img src={executive?.studentImage} alt="" className="w-16 h-16 object-cover rounded-full"/>
                <div className="flex flex-col space-y-1">
                  <span className="text-lg font-medium">{executive?.studentName}</span>
                  <span className="text-sm text-gray-600">{executive?.position?.position}</span>
             {
              level === 'FACULTY' && <span className="text-sm font-semibold">{executive?.department?.name}</span>
            }
                </div>
              </td>
              <td className="">
                {session?.session}
              </td>
              <td className="">
                Inactive
              </td>
            </tr>
            ))
          }
        </tbody>
    </table>
    </div>
    {/* <div className="flex justify-end space-x-4 pr-10">
				<KeyboardArrowLeftIcon className="border border-black rounded-full "/>
				<KeyboardArrowRightIcon className="border text-[#2CC84A] border-[#2CC84A] rounded-full"/>
			</div> */}
    </>
  )
}

export default ExecutiveDetail