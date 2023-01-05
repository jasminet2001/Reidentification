import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
// import VidCard from './vidCard';
import Card from './vidCard';
// SwiperCore.use([Keyboard, Mousewheel]);

function vidsDisplay(){
  return (    
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Card></Card></SwiperSlide>
      <SwiperSlide><Card></Card></SwiperSlide>
      <SwiperSlide><Card></Card></SwiperSlide>
      <SwiperSlide><Card></Card></SwiperSlide>
      <SwiperSlide><Card></Card></SwiperSlide>
    </Swiper>

  );

};
export default vidsDisplay;