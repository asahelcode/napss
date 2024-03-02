import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useFetchExecutives, useSetOfficials } from '@/store'
import { useQuery } from '@apollo/client'
import { SELECTED_FACULTY_EXECUTIVE_MEMBERS } from '@/graphql/queries/officials'
import { useNavigate } from 'react-router-dom'

const ExecutiveDetail = () => {
  const sessionId = useFetchExecutives(state => state.sessionId)
  const level = useFetchExecutives(state => state.level)
  const { data } = useQuery(SELECTED_FACULTY_EXECUTIVE_MEMBERS, { variables: { sessionId }})
  const navigate = useNavigate()
  const defaultOfficials = useSetOfficials(state => state.defaultOfficials)


  console.log(defaultOfficials)
  return (
    <>
      <div className="w-full p-7 bg-white flex justify-between items-center px-10">
        <div className=" flex items-center space-x-4">
          <button onClick={() => navigate('/')}>
          <KeyboardBackspaceIcon className="text-[#2CC84A] border-2 border-[#2CC84A] p-1 rounded-full" fontSize="large"/>
            </button>
          <span className="text-2xl font-bold pl-5">Department of Computer Science Executives</span>
        </div>
        <div className="flex space-x-10 items-center">
          <span className="font-bold text-lg">2024/2025</span>
          <button className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
            Accomplishment
          </button>
        </div>
		</div>
    <div className="flex justify-between px-10 py-10">
      <div className="flex flex-col space-y-3">
        <span className="font-semibold">Name and Position</span>
        <div className="bg-white p-4 flex w-[350px] rounded-lg space-x-4 items-center">
          <img src="https://i.pinimg.com/236x/67/db/7e/67db7ec2aacb7a7730589d21d0d03d52.jpg" alt="" className="w-16 h-16 rounded-full object-cover"/>
          <div className="flex flex-col">
            <span className="text-lg font-medium">Odi Lucky Nnamdi</span>
            <span className="text-sm text-gray-500 font-medium">President</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-3 items-end justify-center">
        <span className="font-semibold">Name and Position</span>
        <div className="bg-white p-4 flex w-[350px] rounded-lg space-x-4 justify-end items-center">
          <div className="flex flex-col items-end">
            <span className="text-lg font-medium">Anita Gloria Ifebuiche</span>
            <span className="text-sm text-gray-500 font-medium">Vice President</span>
          </div>
          <img src="https://i.pinimg.com/236x/d0/f9/f3/d0f9f3c1289d4122cd0969d32b4cb855.jpg" alt="" className="w-16 h-16 rounded-full object-cover"/>
        </div>
      </div>
    </div>

    <table className="w-full max-w-screen-xl mx-auto border-separate border-spacing-y-4">
        <thead>
          <tr className="w-full flex justify-between text-[#2CC84A] px-16">
            <th className="w-3/5 flex justify-start">Members and Positions</th>
            <th className="">Session</th>
            <th className="">Status</th>
          </tr>
        </thead>
        <tbody className="flex space-y-4 flex-col">
            <tr className="w-full flex justify-between  bg-white p-5 items-center rounded-xl px-16">
              <td className="w-3/5 flex  justify-start space-x-3 items-center">
                <img src="https://i.pinimg.com/236x/1e/8e/61/1e8e618a058dfa82a780872b3fd0bf0b.jpg" alt="" className="w-16 h-16 object-cover rounded-full"/>
                <div className="flex flex-col space-y-1">
                  <span className="text-lg font-medium">Jane Venita</span>
                  <span className="text-sm text-gray-600">Financial Secretary</span>
                </div>
              </td>
              <td className="">
                2022/2023
              </td>
              <td className="">
                Inactive
              </td>
            </tr>
             <tr className="w-full flex justify-between  bg-white p-5 items-center rounded-xl px-16">
              <td className="w-3/5 flex  justify-start space-x-3 items-center">
                <img src="https://i.pinimg.com/236x/00/a7/32/00a732d4af3ddb7fe55631490b90abb0.jpg" alt="" className="w-16 h-16 object-cover rounded-full"/>
                <div className="flex flex-col space-y-1">
                  <span className="text-lg font-medium">Benita Divine</span>
                  <span className="text-sm text-gray-600">General Secretary</span>
                </div>
              </td>
              <td className="">
                2022/2023
              </td>
              <td className="">
                Inactive
              </td>
            </tr>
             <tr className="w-full flex justify-between  bg-white p-5 items-center rounded-xl px-16">
              <td className="w-3/5 flex  justify-start space-x-3 items-center">
                <img src="https://i.pinimg.com/236x/5b/37/80/5b37801cdf77566b0c65b3812fab38b9.jpg" alt="" className="w-16 h-16 object-cover rounded-full"/>
                <div className="flex flex-col space-y-1">
                  <span className="text-lg font-medium">Andrew Pleasant</span>
                  <span className="text-sm text-gray-600">Financial Secretary</span>
                </div>
              </td>
              <td className="">
                2022/2023
              </td>
              <td className="">
                Inactive
              </td>
            </tr>
             <tr className="w-full flex justify-between  bg-white p-5 items-center rounded-xl px-16">
              <td className="w-3/5 flex  justify-start space-x-3 items-center">
                <img src="https://i.pinimg.com/236x/b3/9d/5b/b39d5bb7ee81d3f0d52010e5eeb8bd8c.jpg" alt="" className="w-16 h-16 object-cover rounded-full"/>
                <div className="flex flex-col space-y-1">
                  <span className="text-lg font-medium">Benedict Anthony</span>
                  <span className="text-sm text-gray-600">Director of Games</span>
                </div>
              </td>
              <td className="">
                2022/2023
              </td>
              <td className="">
                Inactive
              </td>
            </tr>
        </tbody>
    </table>
    <div className="flex justify-end space-x-4 pr-10">
				<KeyboardArrowLeftIcon className="border border-black rounded-full "/>
				<KeyboardArrowRightIcon className="border text-[#2CC84A] border-[#2CC84A] rounded-full"/>
			</div>
    </>
  )
}

export default ExecutiveDetail