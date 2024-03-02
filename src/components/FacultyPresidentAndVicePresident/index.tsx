import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Line from '../../assets/line.svg'


const FacultyPresidentAndVicePresident = ({president, vicePresident, session}) => {
  return (
    <>
					<tr className="flex justify-around items-center">
						<td className="flex space-x-2 items-start z-20  w-[300px] flex-col space-y-7">
              <div className="flex items-center gap-4">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src={president?.studentImage} alt="" className="w-16  h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="text-lg font-medium">{president?.studentName}</span>
								<div>
									<span className="text-gray-500">{president?.position?.position}</span>
								</div>
							</div>
              </div>
              <img src={Line} alt="" className="absolute w-16 h-16 top-[5em]"/>
              <div className="flex pl-10 items-center gap-4">
							<div className="p-1 border border-[#2CC84A] rounded-full">
							<img src={vicePresident?.studentImage}  alt="" className="w-16  h-16 object-fill rounded-full"/>
							</div>
							<div className="">
								<span className="text-lg font-medium">{vicePresident?.studentName}</span>
								<div>
									<span className="text-gray-500">{vicePresident?.position?.position}</span>
								</div>
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
					
    </>
    
  )
}

export default FacultyPresidentAndVicePresident