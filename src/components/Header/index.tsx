import Logo from '../../assets/logo.png'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useFilter } from '@/store';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_SESSIONS } from '@/graphql/queries/officials';

const Header = () => {
  const [search, setSearch] = useState('')
  const [hierarchy, setHierarchy] = useState('None')
  const [session, setSession] = useState('')
  const storeHierarchy = useFilter((state) => state.storeHierarchy)
  const storeSession = useFilter((state) => state.storeSession)
  const storeSearchTerm = useFilter((state) => state.storeSearchTerm)
  const { data: sessions } = useQuery(GET_SESSIONS)

  useEffect(() => {
    if(hierarchy) {
      storeHierarchy(hierarchy)
    }

    if(session) {
      storeSession(session)
    }

    if(session === 'session') {
      setSession('')
      storeSession('')
    }

    // if(search) {
    //   storeSearchTerm(search)
    // }
  }, [hierarchy, session, storeHierarchy, storeSession])



  return (
    <div className="w-full p-5 bg-transparent flex items-center justify-between px-10">
          <img src={Logo} alt="" className="w-24 h-24 object-contain"/>
          <Select onValueChange={setHierarchy} value={hierarchy}>
             <SelectTrigger className="w-[180px]">
               <SelectValue placeholder="None" />
             </SelectTrigger>
             <SelectContent>
               <SelectItem value="None">None</SelectItem>
               <SelectItem value="DEPARTMENT">Department</SelectItem>
               <SelectItem value="FACULTY">Faculty</SelectItem>
             </SelectContent>
          </Select>
          <Select value={session} onValueChange={setSession}>
             <SelectTrigger className="w-[180px]">
               <SelectValue placeholder="Session" />
             </SelectTrigger>
             <SelectContent>
               <SelectItem value="session">Session</SelectItem>
               {
                sessions?.sessions?.map((session) => (
                  <SelectItem value={session?.id}>{session?.session}</SelectItem>
                ))
               }
             </SelectContent>
          </Select>
          {/* <div className="relative">
        <input type="text" placeholder="Search by name" className="p-2 pl-12 outline-none rounded-md" value={search} onChange={(e) => setSearch(e.target.value)} />
        <SearchOutlinedIcon className="absolute left-4 text-gray-400 top-[10px]" fontSize="small"/>
          </div> */}
        <button className="p-2 px-6 text-white shadow-sm font-bold shadow-[#2CC84A] rounded-lg  bg-[#2CC84A]">
          Home
        </button>
        </div>
  )
}

export default Header