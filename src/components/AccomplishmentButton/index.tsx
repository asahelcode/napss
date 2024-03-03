import { useFetchExecutives} from '@/store'
import { useNavigate } from 'react-router-dom'


const AccomplishmentButton = ({ level, session, departmentId, departmentName }) => {
  const setSession = useFetchExecutives(state => state.setSession)
	const setLevel = useFetchExecutives(state => state.setLevel)
	const setLabel = useFetchExecutives(state => state.setLabel)
	const setDepartment = useFetchExecutives(state => state.setDepartment)
  const navigate = useNavigate()

  const displayFacultyAccomplishment = (session) => {
		setSession({
			id: session?.id,
			session: session?.session
		})
		setLabel('FACULTY OF PHYSICAL SCIENCES')
		setLevel('FACULTY')
		navigate('/department/accomplishment')
	}

	const displayDepartmentAccomplishment = (session, departmentId) => {
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
		// navigate('/department/accomplishment')	
  }
  

  return (
    <>
    {
      (level === 'DEPARTMENT') && (
        <button onClick={() => displayDepartmentAccomplishment(session)} className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
          Accomplishment
        </button>
      )
    }
    </>
  )
}

export default AccomplishmentButton