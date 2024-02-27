import Logo from '../../assets/logo.png'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = () => {
  return (
    <div className="w-full p-5 bg-transparent flex items-center justify-between px-10">
          <img src={Logo} alt="" className="w-24 h-24 object-contain"/>
          <Select>
             <SelectTrigger className="w-[180px]">
               <SelectValue placeholder="None" />
             </SelectTrigger>
             <SelectContent>
               <SelectItem value="None">None</SelectItem>
               <SelectItem value="Department">Department</SelectItem>
               <SelectItem value="Faculty">Faculty</SelectItem>
             </SelectContent>
          </Select>
          <Select>
             <SelectTrigger className="w-[180px]">
               <SelectValue placeholder="Year" />
             </SelectTrigger>
             <SelectContent>
               <SelectItem value="2024">2024</SelectItem>
               <SelectItem value="Department">2023</SelectItem>
               <SelectItem value="Faculty">2022</SelectItem>
             </SelectContent>
          </Select>
          <div className="relative">
        <input type="text" placeholder="Search by name" className="p-2 pl-12 outline-none rounded-md"/>
        <SearchOutlinedIcon className="absolute left-4 text-gray-400 top-[10px]" fontSize="small"/>
          </div>
        <button className="p-2 px-6 text-white shadow-sm font-bold shadow-[#2CC84A] rounded-lg  bg-[#2CC84A]">
          Home
        </button>
        </div>
  )
}

export default Header