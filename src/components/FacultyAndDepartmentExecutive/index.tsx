
import FacultyAndDepartmentPresidents from '@/components/FacultyAndDepartmentPresidents';
// import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


const FacultyAndDepartmentExecutive = ({ defaultOfficials, loading }: any) => {
  
  return loading ? (
         <Box sx={{ width: '100%' }}>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
            <Skeleton animation="wave" sx={{ height: 100 }}/>
          </Box>
      ) : defaultOfficials?.map((session: any) => 
               (
                <>
                  {
                    session?.president !== null && (
                    <tbody className="w-full bg-white flex lg:p-5 p-2 py-8 flex-col space-y-5 relative rounded-xl">
                      <FacultyAndDepartmentPresidents facultyPresident={session?.president} session={session}/>
                    </tbody>
                    )
                  }
                </>
              )
    )
}

export default FacultyAndDepartmentExecutive
