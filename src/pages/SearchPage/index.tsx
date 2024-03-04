import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useFilter } from '@/store';
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { SEARCH_OFFICIAL } from '@/graphql/queries/officials';
import { useNavigate } from 'react-router-dom'
import { useFetchExecutives } from '@/store'

const SearchPage = () => {
  const searchTerm = useFilter(state => state.searchTerm)
  const { data } = useQuery(SEARCH_OFFICIAL, { variables: { name: searchTerm }})
  const setSession = useFetchExecutives(state => state.setSession)
	const setLevel = useFetchExecutives(state => state.setLevel)
	const setLabel = useFetchExecutives(state => state.setLabel)
  const setDepartment = useFetchExecutives(state => state.setDepartment)
  const navigate = useNavigate()

  useEffect(()=> {
    if(searchTerm == ''){
      navigate("/")
    }
  }, [navigate, searchTerm])

  const displayFacultyMembers = (session) => {
		setSession({
			id: session?.id,
			session: session?.session
		})
		setLabel('FACULTY OF PHYSICAL SCIENCES')
		setLevel('FACULTY')
		navigate('/executives/detail')
	}

	const displayDepartment = (session, departmentId, departmentName) => {
		setSession({
			id: session?.id,
			session: session?.session
		})
		setLabel(`DEPARTMENT OF ${departmentName}`)
		setDepartment({
			id: departmentId,
			department: departmentName
		})
		setLevel('DEPARTMENT')
		navigate('/executives/detail')
	}

  const displayFacultyAccomplishment = (session) => {
		setSession({
			id: session?.id,
			session: session?.session
		})
		setLabel('FACULTY OF PHYSICAL SCIENCES')
		setLevel('FACULTY')
		navigate('/department/accomplishment')
	}

  const displayDepartmentAccomplishment = (session, departmentId, departmentName) => {
		setSession({
			id: session?.id,
			session: session?.session
		})
		setLabel(`DEPARTMENT OF ${departmentName}`)
		setDepartment({
			id: departmentId,
			department: departmentName
		})
		setLevel('DEPARTMENT')
		navigate('/department/accomplishment')	
	}


  return (
    <>
    <div className="w-full p-7 bg-white flex justify-center items-center px-10">
        <span className="text-2xl font-bold pl-5">Search Result</span>
		</div>
			<table className="w-full border-separate border-spacing-y-5 max-w-screen-lg mx-auto space-y-7">
				<thead className="w-full">
					<tr className="text-[#2CC84A] flex justify-around w-full">
						<td className="w-[320px]">Name and Position</td>
						<td className="w-[120px]">Session</td>
						<td className="w-[100px]">Record</td>
						<td className="">Status</td>
						<td className="">More</td>
					</tr>
				</thead>
        {
          data?.searchOfficials?.map((official) => (
				<tbody className="w-full bg-white flex p-5 py-8 flex-col gap-4 relative rounded-xl">
					<tr className="flex justify-around items-center">
						<td className="flex space-x-2 items-start z-20  w-[300px] flex-col space-y-7">
              <div className="flex items-center gap-4">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src={official?.studentImage} alt="" className="w-16  h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="text-lg font-medium">{official?.studentName}</span>
								<div className="flex flex-col">
									<span className="text-gray-500">{official?.position?.position}</span>
									<div className="text-gray-500 text-xs font-semibold">
                    {official?.level === 'FACULTY' && "FACULTY" }
                    {official?.level === 'DEPARTMENT' && `${official?.department?.name}`}
                    </div>
								</div>
							</div>
              </div>
      
						</td>
						<td className="text-center w-[80px]">{official?.session?.session}</td>
						<td>
              {
                official?.level == 'FACULTY' && (
                  <button onClick={() => displayFacultyAccomplishment(official?.session)} className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
												Accomplishment
							    </button>
                )
              }

              {
                official?.level == 'DEPARTMENT' && (
                  <button className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md" onClick={() => displayDepartmentAccomplishment(official?.session, official?.department?.id, official?.department?.name)}>
								Accomplishment
							</button>
                )
              }
						</td>
						<td>Active</td>
						<td>
              {
                official?.level == 'FACULTY' && (
                  <button onClick={() => displayFacultyMembers(official?.session)}>
									<ArrowRightAltIcon className="text-[#2CC84A]"/>
							    </button>
                )
              }
              {
                official?.level === 'DEPARTMENT' && (
                   <button onClick={() => displayDepartment(official?.session, official?.department?.id, official?.department?.name)}>
                    <ArrowRightAltIcon className="text-[#2CC84A]"/>
                  </button>
                )
              }
              </td>
					</tr>
				</tbody>
          ))
        }
			</table>
		
		</>
  )
}

export default SearchPage