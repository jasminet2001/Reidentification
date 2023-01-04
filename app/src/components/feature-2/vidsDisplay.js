import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import VidCard from './vidCard';
import Card from './vidCard';

function vidsDisplay(){
    return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Card></Card></SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>

    );

};
export default vidsDisplay;