import { useFilter, } from '@/store';
import FacultyExecutives from '@/components/FacultyExecutives'





const HomePage = () => {
	const session = useFilter((state) => state.session)
	return (
		<>
		<div className="w-full p-7 bg-white flex justify-center text-center items-center px-10">
          <span className="lg:text-2xl text-xl font-bold pl-5 font-inter">
					EXECUTIVES RECORD
					</span>
		</div>
			<table className="w-full border-separate border-spacing-y-3 pt-7 lg:max-w-screen-lg px-4 max-w-screen-md mx-auto space-y-7">
				<thead className="lg:w-full  lg:flex">
					<tr className="text-[#2CC84A] flex lg:justify-around justify-around lg:w-full space-x-3 px-2 lg:px-0 font-inter lg:font-medium">
						<td className="lg:w-[320px] w-[50%] text-sm ">Executive</td>
						<td className="lg:w-[120px] text-sm lg:flex">Session</td>
						<td className="lg:w-[100px] text-sm hidden lg:flex">Record</td>
						<td className=" text-sm ">Status</td>
						<td className=" text-sm ">More</td>
					</tr>
				</thead>
				<FacultyExecutives session={session} hierarchy="FACULTY" />
			</table>
		</>
	)
}

export default HomePage
