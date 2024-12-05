import React, { useState } from "react";
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';

export default function Banner() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    { img: banner1, title: "To make the title more impactful, you can revise it to", des: "Support Medical Expenses Your Contribution Can Make a Life-Changing Differen" },
    { img: banner2, title: "Group of Friends Sharing a Light Moment Outdoors", des: "A cheerful group of four friends standing in a lush, green outdoor setting." },
    { img: banner3, title: "Support Business Initiatives", des:" Help raise funds to launch new products or services." },
    { img: banner4, title: "Support Creative Projects", des: "Provide financial assistance for creating small businesses, films, apps, and more." },
  ];

  const prevSlider = () => setCurrentSlider(currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
  const nextSlider = () => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);

  return (
    <div className="w-full h-[520px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover bg-center overflow-x-hidden" 
         style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
      <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
        <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
          </svg>
        </button>
        <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)">
            <path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
          </svg>
        </button>
      </div>
      <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
        <h1 className="lg:text-3xl font-bold  text-purple-600 mb-3">{sliders[currentSlider].title}</h1>
        <p className="text-xs sm:text-sm md:text-base font-bold lg:text-lg">{sliders[currentSlider].des}</p>
      </div>
      <div className="w-1/2 ml-auto overflow-hidden absolute -right-5 lg:-right-16 z-50 px-4 py-10">
        <div className="ease-linear duration-300 flex  items-center">
          {sliders.map((slide, inx) => (
            <img
              key={inx}
              src={slide.img}
              className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${currentSlider === inx ? 'scale-100' : 'scale-75'} drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50 object-cover`}
              alt={slide.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


