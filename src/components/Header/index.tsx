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
import { Link, useNavigate } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const Header = () => {
  const [search, setSearch] = useState('')
  const [hierarchy, setHierarchy] = useState('None')
  const [session, setSession] = useState('')
  const storeHierarchy = useFilter((state) => state.storeHierarchy)
  const storeSession = useFilter((state) => state.storeSession)
  const storeSearchTerm = useFilter((state) => state.storeSearchTerm)
  const { data: sessions } = useQuery(GET_SESSIONS)
  const navigate = useNavigate()

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
  }, [hierarchy, navigate, search, session, storeHierarchy, storeSearchTerm, storeSession])

  // Debounce callback
  const debounced = useDebouncedCallback(
    // function
    (term) => {
      // Make your API call here with the debounced value
     storeSearchTerm(term)
     navigate('/search')
    },
    // delay in ms
    800
  );

  useEffect(() => {
    debounced(search);
  }, [search, debounced]);

  
  
  return (
    <div className="w-full p-5 bg-transparent flex justify-between items-center lg:px-10 px-5">
      <div>
        <Link  to="/">
          <img src={Logo} alt="" className="lg:w-24 lg:h-24 w-10 h-10 object-contain"/>
        </Link>
      </div>
        <div className="lg:hidden flex items-center space-x-5">
          <div className="relative px-2">
        <input type="text" placeholder="Search by name" className="p-2 w-[200px] pl-12 outline-none rounded-md" value={search} onChange={(e) => setSearch(e.target.value)} />
        <SearchOutlinedIcon className="absolute left-4 text-gray-400 top-[10px]" fontSize="small"/>
          </div>
          <div>
          <Drawer>
      <DrawerTrigger asChild>
          <FilterListIcon fontSize="large"/>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Filter</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="lg:flex space-x-10 flex w-full">
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
          </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>


          </div>
        </div>
        <div className="lg:flex space-x-10 hidden">
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
          <div className="relative">
        <input type="text" placeholder="Search by name" className="p-2 pl-12 outline-none rounded-md" value={search} onChange={(e) => setSearch(e.target.value)} />
        <SearchOutlinedIcon className="absolute left-4 text-gray-400 top-[10px]" fontSize="small"/>
          </div>
        <Link  to="/" className="p-2 px-6 text-white shadow-sm font-bold shadow-[#2CC84A] rounded-lg  bg-[#2CC84A]">
          Home
        </Link>
        </div>
        </div>
  )
}

export default Header