import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Line from '../../assets/line.svg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const RepresentativePage = () => {
  return (
    <>
      <div className="w-full p-7 bg-white flex justify-between items-center px-10">
          <span className="text-2xl font-bold pl-5">Faculty of Physical Sciences Representatives</span>
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
						<td className="flex space-x-2 items-start z-20  w-[300px] flex-col space-y-7">
              <div className="flex items-center gap-4">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src="https://pbs.twimg.com/profile_images/1753372896158785536/El7u1LJo_400x400.jpg" alt="" className="w-16  h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="text-lg font-medium">Odi Nnamdi</span>
								<div>
									<span className="text-gray-500">President</span>
								</div>
							</div>
              </div>
              <img src={Line} alt="" className="absolute w-16 h-16 top-[5em]"/>
              <div className="flex pl-10 items-center gap-4">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src="https://pbs.twimg.com/profile_images/1753372896158785536/El7u1LJo_400x400.jpg" alt="" className="w-16  h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="text-lg font-medium">Anita Fortunate</span>
								<div>
									<span className="text-gray-500">Vice President</span>
								</div>
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
						{/* <img src={Line} alt="" className="absolute left-[70px] top-[90px] w-16 h-14"/> */}
					
				</tbody>

			
			</table>
			<div className="flex justify-end space-x-4 max-w-screen-lg mx-auto">
				<KeyboardArrowLeftIcon className="border border-black rounded-full "/>
				<KeyboardArrowRightIcon className="border text-[#2CC84A] border-[#2CC84A] rounded-full"/>
			</div>
		</>
  )
}

export default RepresentativePage