import React, { useState } from "react";
import img1 from '../assets/choice.jpeg'
import img2 from '../assets/fieedback.jpeg'
import img3 from '../assets/from.jpeg'
import img4 from '../assets/oder.jpeg'
import img5 from '../assets/ngofeed.jpeg'
import img6 from '../assets/engolive.jpeg'
import img7 from '../assets/quinety.jpeg'
import imge8 from '../assets/57c59365-1a04-4dfb-807b-3985704b18b5.jpeg'
import { Typewriter } from "react-simple-typewriter";


export default function HowItWork() {
  const [activeTab, setActiveTab] = useState("donors");
  return (
    <section className="py-12">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
      <Typewriter
    words={['How It Works?']}
    loop={0}
    cursor
    cursorStyle={<span style={{ color: 'red', fontSize: '30px' }}>|</span>}
    typeSpeed={50}
    deleteSpeed={50}
    delaySpeed={1000}
  />
      </h2>
      <div className="text-center space-x-6 mb-10">
        {/* Toggle Buttons */}
        <button
          onClick={() => setActiveTab("donors")}
          className={`px-6 py-2 font-bold border-b-4 transition ${
            activeTab === "donors"
              ? "text-orange-600 border-orange-600"
              : "text-gray-500 hover:text-orange-600 hover:border-orange-600"
          }`}
        >
          For Donors
        </button>
        <button
          onClick={() => setActiveTab("ngos")}
          className={`px-6 py-2 font-bold border-b-4 transition ${
            activeTab === "ngos"
              ? "text-purple-600 border-purple-600"
              : "text-gray-500 hover:text-purple-600 hover:border-purple-600"
          }`}
        >
          For NGOs
        </button>
      </div>
      {activeTab === "donors" && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <div className="flex justify-center items-center mb-6 w-16 h-16 bg-orange-100 rounded-full">
              <img src={img1} alt="Choose a Cause" />
            </div>
            <h3 className="font-bold text-lg text-orange-600 mb-2">CHOOSE A CAUSE</h3>
            <p className="text-gray-700">Browse different campaigns and select a cause.</p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <div className="flex justify-center items-center mb-6 w-16 h-16 bg-purple-100 rounded-full">
              <img src={img7} alt="Select Products" />
            </div>
            <h3 className="font-bold text-lg text-purple-600 mb-2">SELECT PRODUCTS</h3>
            <p className="text-gray-700">Select products and quantity you wish to donate.</p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <div className="flex justify-center items-center mb-6 w-16 h-16 bg-green-100 rounded-full">
              <img src={img4} alt="Order Processing" />
            </div>
            <h3 className="font-bold text-lg text-green-600 mb-2">ORDER PROCESSING</h3>
            <p className="text-gray-700">Checkout and pay for your contributions.</p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <div className="flex justify-center items-center mb-6 w-16 h-16 bg-red-100 rounded-full">
              <img src={img2} alt="Final Feedback" />
            </div>
            <h3 className="font-bold text-lg text-red-600 mb-2">FINAL FEEDBACK</h3>
            <p className="text-gray-700">Provide your valuable feedback.</p>
          </div>
        </div>
      )}
      {activeTab === "ngos" && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <div className="flex justify-center items-center mb-6 w-16 h-16 bg-orange-100 rounded-full">
              <img src={img3} alt="Fill Form Icon" />
            </div>
            <h3 className="font-bold text-lg text-orange-600 mb-2">FILL THE FORM</h3>
            <p className="text-gray-700">Fill <a href="#" className="text-orange-600 font-bold">Start A Campaign</a> form and send us your requirement.</p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <div className="flex justify-center items-center mb-6 w-16 h-16 bg-green-100 rounded-full">
              <img src={img6} alt="Campaign Is Live" />
            </div>
            <h3 className="font-bold text-lg text-green-600 mb-2">CAMPAIGN IS LIVE</h3>
            <p className="text-gray-700">Your campaign goes live with all the details.</p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <div className="flex justify-center items-center mb-6 w-16 h-16 bg-blue-100 rounded-full">
              <img src={imge8} alt="Campaign Updates Icon" />
            </div>
            <h3 className="font-bold text-lg text-blue-600 mb-2">CAMPAIGN UPDATES</h3>
            <p className="text-gray-700">Donors will get updates about the distribution.</p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <div className="flex justify-center items-center mb-6 w-16 h-16 bg-red-100 rounded-full">
              <img src={img5} alt="NGO Feedback" />
            </div>
            <h3 className="font-bold text-lg text-red-600 mb-2">NGO FEEDBACK</h3>
            <p className="text-gray-700">Provide feedback about the campaign process.</p>
          </div>
        </div>
      )}
    </section>
  );
}
