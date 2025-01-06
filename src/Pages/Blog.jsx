import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
   <>

   <section className="py-10 bg-gradient-to-r ">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-secondary mb-8">Explore Our Categories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Education Category */}
      <div className="category-card bg-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_iRK0c4zQNhCqy1Fe_AzubyG6Vb6r_3Uvw&s" alt="Education" className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-secondary" />
        <h4 className="font-semibold text-xl text-secondary">Education</h4>
        <p className="text-gray-500 mt-2">Empower students with the right tools for learning and growth.</p>
      </div>
      
      {/* Healthcare Category */}
      <div className="category-card bg-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmmiRWQj5KD_1J7VFORc8cyd1Cx-kC5Aybg&s" alt="Healthcare" className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-secondary" />
        <h4 className="font-semibold text-xl text-secondary">Healthcare</h4>
        <p className="text-gray-500 mt-2">Support healthcare initiatives to improve lives and wellness.</p>
      </div>

      {/* Additional Categories */}
      <div className="category-card bg-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlj9JogStdKXF1Tl_q4reDjU5K53ghhjTYsw&s0" alt="Environment" className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-secondary" />
        <h4 className="font-semibold text-xl text-secondary">Environment</h4>
        <p className="text-gray-500 mt-2">Help preserve our planet by supporting environmental causes.</p>
      </div>

      <div className="category-card bg-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lHxEtThNdEGf-rrLtJK_-oaO1ugYoWL-6mtpIVT4ZLwXNCgLDidD6t6JtHQn1UWIc2E&usqp=CAU" alt="Animal Welfare" className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-secondary" />
        <h4 className="font-semibold text-xl text-secondary">Animal Welfare</h4>
        <p className="text-gray-500 mt-2">Join us in protecting and advocating for animals in need.</p>
      </div>
    </div>
  </div>
</section>


   </>
  )
}
