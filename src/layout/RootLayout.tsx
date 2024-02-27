import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
       <div className="bg-custom-bg bg-opacity-20 bg-cover bg-center bg-no-repeat min-h-screen ">
      <div className="bg-[#DFFBDF] bg-opacity-95 min-h-screen">
        <Header />
        
      <Outlet />
      </div>
      </div>
  )
}

export default RootLayout