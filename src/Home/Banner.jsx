import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'
import AOS from 'aos';
// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";


export default function Banner() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out' });
      }, []);
  return (
    <div className="w-full h-auto mb-6">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      spaceBetween={30}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="relative" data-aos="fade-up">
          <img
            className="w-full h-[520px] object-cover"
            src={banner1}
            alt=" Campaign 1"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white px-4">
          <h2 className="text-2xl font-bold text-center mb-4">Raise Funds for Medical Expenses</h2>
          <p className="text-center">Collect funds to support medical expenses. Your small contribution can bring a significant change to someone's life.</p>
            <button
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-lg hover:bg-red-600 transition-all duration-300"
              data-aos="fade-up"
            >
              Donate Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative" data-aos="fade-right">
          <img
            className="w-full h-[520px] object-cover"
            src={banner2}
            alt="Campaign 2"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white px-4">
          <h2 className="text-2xl font-bold text-center mb-4">Support Creative Projects</h2>
<p className="text-center">Provide financial assistance for creating small businesses, films, apps, and more.</p>
            <button
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-lg hover:bg-red-600 transition-all duration-300"
              data-aos="fade-up"
            >
              Donate Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative" data-aos="fade-left">
          <img
            className="w-full h-[520px] object-cover"
            src={banner3}
            alt="Winter Campaign 3"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white px-4">
          <h2 className="text-2xl font-bold text-center mb-4">Support Business Initiatives</h2>
        <p className="text-center">Help raise funds to launch new products or services.</p>
            <button
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-lg hover:bg-red-600 transition-all duration-300"
              data-aos="fade-up"
            >
              Donate Now
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
   
  );
};
   