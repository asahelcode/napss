import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, A11y} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Accomplishment = () => {
  return (
    <>
      <div className="w-full p-7 bg-white flex justify-between items-center px-10">
        <div className=" flex items-center space-x-4">
          <KeyboardBackspaceIcon className="text-[#2CC84A] border-2 border-[#2CC84A] p-1 rounded-full" fontSize="large"/>
          <span className="text-2xl font-bold pl-5">Department of Computer Science Accomplishement</span>
        </div>
        <div className="flex space-x-10 items-center">
          <span className="font-bold text-lg">2024/2025</span>
        </div>
		</div>


    <div className="pt-10">
      <div className="w-full h-[450px] bg-white flex p-5 flex-col space-y-5" >
        <span>Project Team name: Department of Computer Science</span>
        <span>Session and Date: Oct 2023(2022/2023)</span>
        <div>
         <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            // pagination={{
            // clickable: true,
            // }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
      <SwiperSlide>
        <div className="flex justify-center items-center flex-col w-[300px] space-y-2">
          <img src="https://i.pinimg.com/236x/15/2c/86/152c8675eaf6c5cd2ac00c380260f5f6.jpg" alt="" className="w-[20rem] h-52 object-cover rounded-lg"/>
          <span className="text-center w-full text-sm">Sponsored scholarship to 20 student in the Faculty...</span>
        </div>
      </SwiperSlide>
     <SwiperSlide>
        <div className="flex justify-center items-center flex-col w-[300px] space-y-2">
          <img src="https://i.pinimg.com/236x/95/fb/a3/95fba352d68162e50cddda1fc5670cc6.jpg" alt="" className="w-[20rem] h-52 object-cover rounded-lg"/>
          <span className="text-center w-full text-sm">Sponsored scholarship to 20 student in the Faculty...</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center flex-col w-[300px] space-y-2">
          <img src="https://i.pinimg.com/236x/15/2c/86/152c8675eaf6c5cd2ac00c380260f5f6.jpg" alt="" className="w-[20rem] h-52 object-cover rounded-lg"/>
          <span className="text-center w-full text-sm">Sponsored scholarship to 20 student in the Faculty...</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center flex-col w-[300px] space-y-2">
          <img src="https://i.pinimg.com/236x/71/9b/1a/719b1a119c6595bd82f7281c256ffb6a.jpg" alt="" className="w-[20rem] h-52 object-cover rounded-lg"/>
          <span className="text-center w-full text-sm">Sponsored scholarship to 20 student in the Faculty...</span>
        </div>
      </SwiperSlide>
        </Swiper>
        </div>
		</div>
    </div>

    <div className="pt-10">
      <div className="w-full h-[450px] bg-white flex p-5 flex-col space-y-5" >
        <span>Project Team name: Department of Computer Science</span>
        <span>Session and Date: Oct 2023(2022/2023)</span>
        <div>
         <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            // pagination={{
            // clickable: true,
            // }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
      <SwiperSlide>
        <div className="flex justify-center items-center flex-col lg:w-[300px] w-full space-y-2">
          <img src="https://i.pinimg.com/236x/15/2c/86/152c8675eaf6c5cd2ac00c380260f5f6.jpg" alt="" className="w-[20rem] h-52 object-cover rounded-lg"/>
          <span className="text-center w-full text-sm">Sponsored scholarship to 20 student in the Faculty...</span>
        </div>
      </SwiperSlide>
     <SwiperSlide>
        <div className="flex justify-center items-center flex-col w-[300px] space-y-2">
          <img src="https://i.pinimg.com/236x/95/fb/a3/95fba352d68162e50cddda1fc5670cc6.jpg" alt="" className="w-[20rem] h-52 object-cover rounded-lg"/>
          <span className="text-center w-full text-sm">Sponsored scholarship to 20 student in the Faculty...</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center flex-col w-[300px] space-y-2">
          <img src="https://i.pinimg.com/236x/15/2c/86/152c8675eaf6c5cd2ac00c380260f5f6.jpg" alt="" className="w-[20rem] h-52 object-cover rounded-lg"/>
          <span className="text-center w-full text-sm">Sponsored scholarship to 20 student in the Faculty...</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center flex-col w-[300px] space-y-2">
          <img src="https://i.pinimg.com/236x/71/9b/1a/719b1a119c6595bd82f7281c256ffb6a.jpg" alt="" className="w-[20rem] h-52 object-cover rounded-lg"/>
          <span className="text-center w-full text-sm">Sponsored scholarship to 20 student in the Faculty...</span>
        </div>
      </SwiperSlide>
        </Swiper>
        </div>
		</div>
    </div>
    </>
  )
}

export default Accomplishment