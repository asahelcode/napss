import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Line from '../../assets/line.svg'


const FacultyPresidentAndVicePresident = ({president, vicePresident, session}) => {
  return (
    <>
      <tr className="flex justify-around items-center">
											<td className="flex space-x-2 items-center z-20  w-[300px] ">
												<div className="p-1 border border-[#2CC84A] rounded-full">
												<img src={president?.studentImage} alt="" className="w-16  h-16 object-fill rounded-full"/>
												</div>
												<div className="">
													<span className="text-lg font-medium">{president?.studentName}</span>
													<div className="flex flex-col text-gray-500">
													<span className="">{president?.position?.position}</span>
													<span className="text-xs font-medium">{president?.department?.name}</span>
												</div>
												</div>
											</td>
											<td className="text-center w-[80px]">{session?.session}</td>
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
											<img src={vicePresident?.studentImage} alt="" className="w-16  h-16 object-fill rounded-full"/>
											</div>
											<div className="">
												<span className="text-lg font-medium">{vicePresident?.studentName}</span>
												<div className="flex flex-col text-gray-500">
													<span className="">{vicePresident?.position?.position}</span>
													<span className="text-xs font-medium">{vicePresident?.department?.name}</span>
												</div>
											</div>
										</td>
										<td className="text-center w-[80px]">{session?.session}</td>
										<td>
											<button className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
										Accomplishment
									</button>
										</td>
										<td>Active</td>
										<td><ArrowRightAltIcon className="text-[#2CC84A]"/></td>
									</tr>
    </>
    
  )
}

export default FacultyPresidentAndVicePresident