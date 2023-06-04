import { useCallback } from 'react'
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import thumbnail from '../assets/attendancewebapp/thumbnail.png'
import user1 from '../assets/attendancewebapp/user1.png'
import user2 from '../assets/attendancewebapp/user2.png'
import user3 from '../assets/attendancewebapp/user3.png'
import admin1 from '../assets/attendancewebapp/admin1.png'
import admin2 from '../assets/attendancewebapp/admin2.png'
import admin3 from '../assets/attendancewebapp/admin3.png'
import admin4 from '../assets/attendancewebapp/admin4.png'
import admin5 from '../assets/attendancewebapp/admin5.png'
import admin6 from '../assets/attendancewebapp/admin6.png'

import { useNavigate } from "react-router-dom";


const PortfolioAttendance = () => {
    const navigate = useNavigate();

    const screenSmall = useCallback(():boolean=>{
       return window.matchMedia("(max-width : 827px)").matches
    },[])

  return (
    <>
    <h1>Attendance Webapp</h1>
    <button className="back-button" onClick={()=> navigate("/portfolio")}>{"<< Back"}</button>
     <Swiper
     modules={[Navigation, Pagination, EffectCoverflow]}
     effect={'coverflow'}
     grabCursor={true}
     centeredSlides={true}
     pagination={{el:'.swiper-pagination', clickable : true}}
     loop={true}
     autoHeight={true}
     slidesPerView={screenSmall() ? 1: 2}
     coverflowEffect={{
      rotate:0,
      stretch:0,
      depth:100,
      modifier:2.5,
     }}
     className="swiper-container"
    //  navigation
    //  pagination={{clickable : true}}
    //  scrollbar={{draggable: true}}
    //  onSlideChange={() => console.log('slide change')}
    //  onSwiper={(swiper) => console.log(swiper)}
     >
      <SwiperSlide><img src={thumbnail} alt="thumbnail" className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={user1} alt="user1" className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={user2} alt="user2" className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={user3} alt="user3" className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={admin1} alt="admin1" className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={admin2} alt="admin2" className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={admin3} alt="admin3" className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={admin4} alt="admin4" className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={admin5} alt="admin5" className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={admin6} alt="admin6" className="slide-img"/></SwiperSlide>
      <div className='swiper-pagination'></div>
      </Swiper>  
    </>
  )
}

export default PortfolioAttendance