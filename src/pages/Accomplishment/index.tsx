import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { GET_FACULTY_ACCOMPLISHMENTS } from '@/graphql/queries/officials'
import Slider from "react-slick";
import { useQuery } from '@apollo/client'
import { useFetchExecutives } from '@/store'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useMedia from '@/hook/useMedia'
import Box from '@mui/material/Box';

const Accomplishment = () => {
  const session = useFetchExecutives((state: any) => state.session)
  const department = useFetchExecutives((state: any) => state.department)
  const level = useFetchExecutives((state: any) => state.level)
  const label = useFetchExecutives((state: any) => state.label)
  const isSmallScreen = useMedia('(max-width: 600px)');
  const [accomplishments, setAccomplishments] = useState([])

  const { data: facultyAccomplishment } = useQuery(GET_FACULTY_ACCOMPLISHMENTS, { variables: { sessionId: session?.id },  onCompleted: (data: any) => {
      if (level === 'FACULTY') {
        setAccomplishments(data?.facultyAccomplishments)
      }
    }})
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  console.log(facultyAccomplishment)
  const settings = {
    dots: true,
    autoplay: true,
    infinite: accomplishments.length > 3,
    touchMove: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : 3,
    slidesToScroll: isSmallScreen ? 1 : 2
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isSmallScreen ? '80%' : 500,
    height: isSmallScreen ? '50%' : 400,
    bgcolor: 'background.paper',
    boxShadow: 40,
    borderRadius: 5,
    p: 4,
  };

  const [open, setOpen] = useState(false)

  const handleOpen = (description: string) => {
    setDescription(description)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }


  return (
    <div className="flex flex-col space-y-10">
      <div className="w-full p-7 bg-white flex justify-between items-center px-5 lg:px-10">
        <div className=" flex items-center lg:space-x-4 space-x-2">
          <button onClick={() => navigate(-1)}>
             <KeyboardBackspaceIcon className="text-[#2CC84A] border-2 border-[#2CC84A] p-1 rounded-full" fontSize={`${isSmallScreen ? "medium" : "large"}`}/>
          </button>
          <span className="lg:text-2xl text-sm font-bold pl-5">{label} Accomplishment</span>
        </div>
        <div className="flex lg:space-x-10 items-center w-32">
          <span className="font-bold text-sm lg:text-lg">{session?.session}</span>
        </div>
    </div>
      <div className="w-full h-fit bg-white flex lg:p-10 flex-col space-y-5 lg:pl-20" >
        <div className="p-5">
        <Slider {...settings}>
          {
            accomplishments?.map((accomplishment: any) => (
                <button key={accomplishment?.id} onClick={() => handleOpen(accomplishment?.description)}>
                  <div className="flex flex-col space-y-3 justify-center items-center">
                  <img src={accomplishment?.imageUrl} alt="" className="w-72 h-64 object-cover  rounded-md" />
                  <span className="flex justify-center w-[70%] text-left">{accomplishment?.description?.substring(0, 80) + '...'}</span>
                </div>
                </button>
                ))
          }
        </Slider>
        </div>
      </div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      {description}
                    </Typography>
                  </Box>
                </Modal>
    </div>
  )
}

export default Accomplishment