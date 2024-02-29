import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ExecutiveDetail = () => {
  return (
    <>
      <div className="w-full p-7 bg-white flex justify-between items-center px-10">
        <div className=" flex items-center space-x-4">
          <KeyboardBackspaceIcon className="text-[#2CC84A] border-2 border-[#2CC84A] p-1 rounded-full" fontSize="large"/>
          <span className="text-2xl font-bold pl-5">Faculty of Physical Sciences Representatives</span>
        </div>
        <div className="flex space-x-10 items-center">
          <span className="font-bold text-lg">2024/2025</span>
          <button className="border-[#2CC84A] text-[#2CC84A] border p-2 rounded-md px-4 font-medium shadow-md">
            Accomplishment
          </button>
        </div>
		</div>
    <div>
      <div>
        <span>Name and Position</span>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div>
        
      </div>
    </div>
    </>
  )
}

export default ExecutiveDetail