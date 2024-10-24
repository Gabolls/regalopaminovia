import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import brocoli from '../assets/brocoligaby.jpg';
import divinas from '../assets/divinas.jpg';
import fotofavo from '../assets/fotofavorita.jpg';
import fotomocanu from '../assets/fotomocanu.jpg';
import fotopizarra from '../assets/fotopizarra.jpg';
import fotosims from '../assets/gabysims.jpg';
import fotolosdos from '../assets/gabyyyo.jpg';
import kuchau from '../assets/kuchaugaby.jpg';
import ojitos from '../assets/ojitos.jpg';
import pijamas from '../assets/pijamas de pero.jpg';
import primerafoto from '../assets/primerafoto.jpg';








  
  export default function Compswiper() {
    return (
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop= {true}
        navigation={true} 
        autoplay= {{autoplay: true}}
       // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide ><img className="pagina-swiper" src={brocoli} alt="" /></SwiperSlide>
        <SwiperSlide ><img className="pagina-swiper" src={divinas} alt="" /></SwiperSlide>
        <SwiperSlide ><img className="pagina-swiper" src={fotofavo} alt="" /></SwiperSlide>
        <SwiperSlide ><img className="pagina-swiper" src={fotomocanu} alt="" /></SwiperSlide>
        <SwiperSlide ><img className="pagina-swiper" src={fotopizarra} alt="" /></SwiperSlide>
        <SwiperSlide ><img className="pagina-swiper" src={fotosims} alt="" /></SwiperSlide>
        <SwiperSlide ><img className="pagina-swiper" src={fotolosdos} alt="" /></SwiperSlide>
        <SwiperSlide ><img className="pagina-swiper" src={kuchau} alt="" /></SwiperSlide>
        <SwiperSlide ><img className="pagina-swiper" src={ojitos} alt="" /></SwiperSlide>
        <SwiperSlide ><img className="pagina-swiper" src={pijamas} alt="" /></SwiperSlide>
        <SwiperSlide ><img className="pagina-swiper" src={primerafoto} alt="" /></SwiperSlide>

      </Swiper>
    )
  }
  