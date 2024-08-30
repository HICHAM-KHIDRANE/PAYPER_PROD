import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

export default function SliderHero() {
  const data = [
    { img: '/slide/Agriculture.png', title: 'Agriculture Moderne', dec: 'Vue d’ensemble des techniques agricoles avancées et des pratiques agricoles modernes.' },
    { img: '/slide/chantier-1.jpg', title: 'Chantier de Construction 1', dec: 'Les premières étapes d’un grand projet de construction, axées sur les travaux préliminaires et les phases initiales de construction.' },
    { img: '/slide/chantier-2.jpg', title: 'Chantier de Construction 2', dec: 'Mise à jour sur le chantier, mettant en avant les progrès structurels et les travaux en cours.' },
    { img: '/slide/EnergieInspection-1-.png', title: 'Inspection Énergétique', dec: 'Inspection des systèmes énergétiques pour garantir l’efficacité et la sécurité dans les environnements industriels.' },
    { img: '/slide/Spraying.png', title: 'Pulvérisation de Cultures', dec: 'Application de pesticides et d’engrais sur les cultures pour améliorer la croissance et prévenir les maladies.' }
  ];

  /*   const data = [
     '/slide/Agriculture.png',
     '/slide/chantier-1.jpg',
     '/slide/chantier-2.jpg',
     '/slide/EnergieInspection-1-.png',
      '/slide/Spraying.png',
    ]; */
  /*   const data = [
      "https://spring-slider.uiinitiative.com/images/1.jpg",
      "https://spring-slider.uiinitiative.com/images/2.jpg",
      "https://spring-slider.uiinitiative.com/images/3.jpg",
      "https://spring-slider.uiinitiative.com/images/4.jpg",
      "https://spring-slider.uiinitiative.com/images/5.jpg",
      "https://spring-slider.uiinitiative.com/images/6.jpg",
      "https://spring-slider.uiinitiative.com/images/7.jpg",
      "https://spring-slider.uiinitiative.com/images/8.jpg",
    ]; */

  return (
    <Swiper
      navigation={true} modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={0}
      slidesPerView={1}
      loop={true} // Enable loop
      //onSlideChange={() => console.log('slide change')}
      //onSwiper={(swiper) => console.log(swiper)}
      className="w-full aspect-[9/4] "
    //data-aos="zoom-in"
    >
      {data.map((item, i) => (
        <SwiperSlide key={i} className="relative flex items-center justify-center aspect-[9/4] mb-12 overflow-hidden">
          <div className="relative z-30 p-5 bg-gradient-to-t from-black/50 to-transparent  h-full w-full flex justify-center items-center">
            <div data-aos="fade-up">
              <div  className=" text-center --text-blue-600 text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text ">{item.title}</div>
              <div className="text-center text-white text-2xl">{item.dec}</div>
            </div>

          </div>
          <img src={item.img} className="absolute z-10 w-full  h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

