import { useCallback } from 'react'
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import thumbnail from '../assets/xmartwebapp/thumbnail.png'
import branchadmin1 from '../assets/xmartwebapp/branchadmin1.png'
import branchadmin2 from '../assets/xmartwebapp/branchadmin2.png'
import branchadmin3 from '../assets/xmartwebapp/branchadmin3.png'
import superadmin1 from '../assets/xmartwebapp/superadmin1.png'
import user1 from '../assets/xmartwebapp/user1.png'
import user2 from '../assets/xmartwebapp/user2.png'
import user3 from '../assets/xmartwebapp/user3.png'
import user4 from '../assets/xmartwebapp/user4.png'
import user5 from '../assets/xmartwebapp/user5.png'
import user6 from '../assets/xmartwebapp/user6.png'
import user7 from '../assets/xmartwebapp/user7.png'
import user8 from '../assets/xmartwebapp/user8.png'
import user9 from '../assets/xmartwebapp/user9.png'
import user10 from '../assets/xmartwebapp/user10.png'
import user11 from '../assets/xmartwebapp/user11.png'


import { useNavigate } from "react-router-dom";


const PortfolioXmart = () => {
    const navigate = useNavigate();

    const screenSmall = useCallback(():boolean=>{
       return window.matchMedia("(max-width : 827px)").matches
    },[])

  return (
    <>
    <h1>Xmart - Online Grocery Webapp</h1>
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
     >
      <SwiperSlide><img src={thumbnail} alt="thumbnail" className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={branchadmin1} alt="branchadmin1" className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={branchadmin2} alt="branchadmin2"className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={branchadmin3} alt="branchadmin3"className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={superadmin1} alt="superadmin1"className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={user1} alt="user1"className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={user2} alt="user2"className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={user3} alt="user3"className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={user4} alt="user4"className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={user5} alt="user5"className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={user6} alt="user6"className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={user7} alt="user7"className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={user8} alt="user8"className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={user9} alt="user9"className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={user10} alt="user10"className="slide-img"/></SwiperSlide>
      <SwiperSlide><img src={user11} alt="user11"className="slide-img"/></SwiperSlide>
      <div className='swiper-pagination'></div>
      </Swiper>
    </>
  )
}

export default PortfolioXmart