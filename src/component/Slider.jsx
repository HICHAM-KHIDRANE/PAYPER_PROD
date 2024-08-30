import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';

export default function Slider() {
  const data = [
    "https://spring-slider.uiinitiative.com/images/1.jpg",
    "https://spring-slider.uiinitiative.com/images/2.jpg",
    "https://spring-slider.uiinitiative.com/images/3.jpg",
    "https://spring-slider.uiinitiative.com/images/4.jpg",
    "https://spring-slider.uiinitiative.com/images/5.jpg",
    "https://spring-slider.uiinitiative.com/images/6.jpg",
    "https://spring-slider.uiinitiative.com/images/7.jpg",
    "https://spring-slider.uiinitiative.com/images/8.jpg",
  ];

  return (
    <Swiper
    navigation={true} modules={[Navigation,Autoplay]}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
      spaceBetween={10}
      slidesPerView={4}
      loop={true} // Enable loop
      //onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-full my-10"
      data-aos="zoom-in"
    >
      {data.map((item, i) => (
        <SwiperSlide  key={i} className="flex justify-center items-center">
          <img src={item} className="aspect-video rounded-lg shadow-lg" alt={`Slide ${i}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
