import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Line from '../../assets/line.svg'

const HomePage = () => {
	return (
		<>
		<div className="w-full p-7 bg-white flex justify-between items-center px-10">
          <span className="text-2xl font-bold pl-5">Records for Faculty of Physical Sciences</span>
          <button className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
            Accomplishment
          </button>
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
				<tbody className="w-full bg-white flex p-5 py-8 flex-col space-y-5 relative rounded-xl">
					<tr className="flex justify-around items-center">
						<td className="flex space-x-2 items-center z-20  w-[300px] ">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src="https://pbs.twimg.com/profile_images/1753372896158785536/El7u1LJo_400x400.jpg" alt="" className="w-16  h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="text-lg font-medium">Odi Nnamdi</span>
								<div>
									<span className="text-gray-500">President</span>
								</div>
							</div>
						</td>
						<td className="text-center w-[80px]">2023/2024</td>
						<td>
							<button className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
            Accomplishment</button>
						</td>
						<td>Active</td>
						<td><ArrowRightAltIcon className="text-[#2CC84A]"/></td>
					</tr>
						<img src={Line} alt="" className="absolute left-[70px] top-[90px] w-16 h-14"/>
					<tr className="flex justify-around items-center pl-12">
						<td className="flex space-x-2 w-[250px] ">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src="https://pbs.twimg.com/profile_images/1753372896158785536/El7u1LJo_400x400.jpg" alt="" className="w-16  h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="text-lg font-medium">Anita fortune</span>
								<div>
									<span className="text-gray-500">Vice President</span>
								</div>
							</div>
						</td>
						<td className="text-center w-[80px]">2023/2024</td>
						<td>
							<button className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
            Accomplishment
          </button>
						</td>
						<td>Active</td>
						<td><ArrowRightAltIcon className="text-[#2CC84A]"/></td>
					</tr>
				</tbody>

				<tbody className="w-full bg-white flex p-5 py-8 flex-col space-y-5 relative rounded-xl">
					<tr className="flex justify-around items-center">
						<td className="flex space-x-2 items-center z-20  w-[300px] ">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src="https://pbs.twimg.com/profile_images/1753372896158785536/El7u1LJo_400x400.jpg" alt="" className="w-16  h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="text-lg font-medium">Odi Nnamdi</span>
								<div>
									<span className="text-gray-500">President</span>
								</div>
							</div>
						</td>
						<td className="text-center w-[80px]">2023/2024</td>
						<td>
							<button className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
            Accomplishment</button>
						</td>
						<td>Active</td>
						<td><ArrowRightAltIcon className="text-[#2CC84A]"/></td>
					</tr>
						<img src={Line} alt="" className="absolute left-[70px] top-[90px] w-16 h-14"/>
					<tr className="flex justify-around items-center pl-12">
						<td className="flex space-x-2 w-[250px] ">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src="https://pbs.twimg.com/profile_images/1753372896158785536/El7u1LJo_400x400.jpg" alt="" className="w-16  h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="text-lg font-medium">Anita fortune</span>
								<div>
									<span className="text-gray-500">Vice President</span>
								</div>
							</div>
						</td>
						<td className="text-center w-[80px]">2023/2024</td>
						<td>
							<button className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
            Accomplishment
          </button>
						</td>
						<td>Active</td>
						<td><ArrowRightAltIcon className="text-[#2CC84A]"/></td>
					</tr>
				</tbody>

				<tbody className="w-full bg-white flex p-5 py-8 flex-col space-y-5 relative rounded-xl">
					<tr className="flex justify-around items-center">
						<td className="flex space-x-2 items-center z-20  w-[300px] ">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src="https://pbs.twimg.com/profile_images/1753372896158785536/El7u1LJo_400x400.jpg" alt="" className="w-16  h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="text-lg font-medium">Odi Nnamdi</span>
								<div>
									<span className="text-gray-500">President</span>
								</div>
							</div>
						</td>
						<td className="text-center w-[80px]">2023/2024</td>
						<td>
							<button className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
            Accomplishment</button>
						</td>
						<td>Active</td>
						<td><ArrowRightAltIcon className="text-[#2CC84A]"/></td>
					</tr>
						<img src={Line} alt="" className="absolute left-[70px] top-[90px] w-16 h-14"/>
					<tr className="flex justify-around items-center pl-12">
						<td className="flex space-x-2 w-[250px] ">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src="https://pbs.twimg.com/profile_images/1753372896158785536/El7u1LJo_400x400.jpg" alt="" className="w-16  h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="text-lg font-medium">Anita fortune</span>
								<div>
									<span className="text-gray-500">Vice President</span>
								</div>
							</div>
						</td>
						<td className="text-center w-[80px]">2023/2024</td>
						<td>
							<button className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
            Accomplishment
          </button>
						</td>
						<td>Active</td>
						<td><ArrowRightAltIcon className="text-[#2CC84A]"/></td>
					</tr>
				</tbody>
			</table>
		</>
	)
}

export default HomePage
