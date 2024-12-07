import React, { useEffect } from 'react'
import img1 from '../assets/benifits.png'
import img2 from '../assets/sequire.png'
import img3 from '../assets/updare.png'
import img4 from '../assets/donate.png'
import img5 from '../assets/verified.png'
import img6 from '../assets/impcat.png'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { Typewriter } from 'react-simple-typewriter'
export default function Feauterd() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
  return (
   <div>
    <section className="py-12">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold">
    <Typewriter
    words={['Why to Choose Our Campaigns']}
    loop={0}
    cursor
    cursorStyle={<span style={{ color: 'purple', fontSize: '30px' }}>|</span>}
    typeSpeed={50}
    deleteSpeed={50}
    delaySpeed={1000}
  />

    </h2>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
    <div className=" bg-white   p-6 rounded-lg shadow hover:shadow-lg transition"
    data-aos="zoom-out-up"
    >
      <img src={img1} alt="Avail Tax Benefits" className="w-12 h-12 mx-auto mb-4"/>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Avail Tax Benefits</h3>
      <p className="text-gray-600 text-sm">Get an 80G certificate with every donation & save on tax.</p>
    </div>
    <div className="  bg-white  p-6 rounded-lg shadow hover:shadow-lg transition"
     data-aos="zoom-out-up"
   
    >
      <img src={img2} alt="Trustworthy & Secure" className="w-12 h-12 mx-auto mb-4"/>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Trustworthy & Secure</h3>
      <p className="text-gray-600 text-sm">Payment process and donors’ data is completely secure and encrypted.</p>
    </div>
    <div className="  bg-white  p-6 rounded-lg shadow hover:shadow-lg transition"
     data-aos="zoom-out-up"
  
    >
      <img src={img3} alt="Regular Updates" className="w-12 h-12 mx-auto mb-4"/>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Regular Updates</h3>
      <p className="text-gray-600 text-sm">Get regular updates about the impact you’ve created.</p>
    </div>
    <div className=" bg-white  p-6 rounded-lg shadow hover:shadow-lg transition"
     data-aos="zoom-out-up"
   
    >
      <img src={img4} alt="Donate Hassle-free" className="w-12 h-12 mx-auto mb-4"/>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Donate Hassle-free</h3>
      <p className="text-gray-600 text-sm">We accept donations via all popular payment modes.</p>
    </div>
    <div className="  bg-white   p-6 rounded-lg shadow hover:shadow-lg transition"
     data-aos="zoom-out-up"
   
    >
      <img src={img5} alt="100% Verified Campaign" className="w-12 h-12 mx-auto mb-4"/>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">100% Verified Campaign</h3>
      <p className="text-gray-600 text-sm">Rigorous and stringent due-diligence procedures.</p>
    </div>
    <div className=" bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
     data-aos="zoom-out-up"
     
    >
      <img src={img6} alt="Greater Impact" className="w-12 h-12 mx-auto mb-4"/>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Greater Impact</h3>
      <p className="text-gray-600 text-sm">Save one life at a time with every donation.</p>
    </div>
  </div>
</section>

   </div>
  )
}
