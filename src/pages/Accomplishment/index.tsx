import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Slider from "react-slick";
import { useQuery } from '@apollo/client'
import { GET_DEPARTMENT_ACCOMPLISHMENTS, GET_FACULTY_ACCOMPLISHMENTS } from '@/graphql/queries/officials'
import { useFetchExecutives } from '@/store'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Accomplishment = () => {
  const session = useFetchExecutives(state => state.session)
  const department = useFetchExecutives(state => state.department)
  const level = useFetchExecutives(state => state.level)
  const label = useFetchExecutives(state => state.label)
  const [accomplishments, setAccomplishments] = useState([])
  const { data: departmentAccomplishment } = useQuery(GET_DEPARTMENT_ACCOMPLISHMENTS, { variables: { sessionId: session?.id, departmentId: department?.id }, onCompleted: (data) => {
      if (level === 'DEPARTMENT') {
        setAccomplishments(departmentAccomplishment?.departmentAccomplishments)
      }
    }})
  const { data: facultyAccomplishment } = useQuery(GET_FACULTY_ACCOMPLISHMENTS, { variables: { sessionId: session?.id },  onCompleted: (data) => {
      if (level === 'FACULTY') {
        setAccomplishments(facultyAccomplishment?.facultyAccomplishments)
      }
    }})
  const [description, setDescription] = useState('')
  
  const navigate = useNavigate()

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    touchMove: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 400,
    bgcolor: 'background.paper',
    boxShadow: 40,
    borderRadius: 5,
    p: 4,
  };

  const [open, setOpen] = useState(false)

  const handleOpen = (description) => {
    setDescription(description)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }


  return (
    <div className="flex flex-col space-y-10">
      <div className="w-full p-7 bg-white flex justify-between items-center px-10">
        <div className=" flex items-center space-x-4">
          <button onClick={() => navigate(-1)}>
            <KeyboardBackspaceIcon className="text-[#2CC84A] border-2 border-[#2CC84A] p-1 rounded-full" fontSize="large"/>
          </button>
          <span className="text-2xl font-bold pl-5">{label} Accomplishment</span>
        </div>
        <div className="flex space-x-10 items-center">
          <span className="font-bold text-lg">{session?.session}</span>
        </div>
		  </div>
      <div className="w-full h-fit bg-white flex p-10 flex-col space-y-5 pl-20" >
        <div className="p-5">
        <Slider {...settings}>
          {
            accomplishments?.map((accomplishment) => (
              <button onClick={() => handleOpen(accomplishment?.description)}>
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