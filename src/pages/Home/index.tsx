import { useFilter, } from '@/store';
import FacultyExecutives from '@/components/FacultyExecutives'
import DepartmentExecutive from '@/components/DepartmentExecutive'
import FacultyAndDepartmentExecutive from '@/components/FacultyAndDepartmentExecutive'


const HomePage = () => {
	const hierarchy = useFilter((state: any) => state.hierarchy)
	const session = useFilter((state: any) => state.session)

	return (
		<>
		<div className="w-full p-7 bg-white flex justify-center text-center items-center px-10">
          <span className="lg:text-2xl text-xl font-bold pl-5 font-sora">
					{hierarchy === 'None' ? "" : hierarchy } EXECUTIVES RECORD
					</span>
		</div>
			<table className="w-full border-separate border-spacing-y-3 pt-7 lg:max-w-screen-lg px-4 max-w-screen-md mx-auto space-y-7">
				<thead className="lg:w-full  lg:flex">
					<tr className="text-[#2CC84A] flex lg:justify-around justify-around lg:w-full space-x-3 px-2 lg:px-0 font-inter lg:font-medium">
						<td className="lg:w-[320px] w-[50%] text-sm ">Executive</td>
						<td className="lg:w-[120px] text-sm hidden lg:flex">Session</td>
						<td className="lg:w-[100px] text-sm ">Record</td>
						<td className=" text-sm ">Status</td>
						<td className=" text-sm ">More</td>
					</tr>
				</thead>
					{
							(hierarchy === 'None') && <FacultyAndDepartmentExecutive  session={session} hierarchy={hierarchy} />
					}

					{
						(hierarchy === 'FACULTY') && <FacultyExecutives session={session} hierarchy={hierarchy}/>
					}

					{
						(hierarchy === 'DEPARTMENT') && <DepartmentExecutive session={session} hierarchy={hierarchy} />
					}

			</table>
		</>
	)
}

export default HomePage
