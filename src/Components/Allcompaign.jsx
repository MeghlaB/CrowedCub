import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CompaignCard from './CompaignCard'
import { AuthContext } from '../AddProvider/AuthProvider'
import { FiSliders } from "react-icons/fi";
export default function Allcompaign() {
  const loaderData = useLoaderData()
  const{setLoading,loading} = useContext(AuthContext)
  const[sortData , setSortdata] = useState(loaderData)


const handletoggolebtn = ()=>{

    setLoading(true)
    const sorted = [...loaderData].sort((a, b) => b.minDonation - a.minDonation)
    setSortdata(sorted)
      setLoading(false)
}
  

  return (
    <div className="container mx-auto my-28">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">All Campaigns</h2>
        <button
          onClick={handletoggolebtn}
          className="btn bg-purple-600 text-white px-4 py-2 rounded"
        >
          Sort by MinDonation <FiSliders></FiSliders>
        </button>
      </div>
      {loading ? (
  <div className="flex justify-center items-center h-40">
    <div className="spinner border-4 border-purple-600 border-t-transparent rounded-full w-10 h-10 animate-spin"></div>
  </div>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortData.map((campaign) => (
              <div
                key={campaign._id}
                className="card bg-base-100 shadow-xl p-4 border border-primary"
              >
                <figure>
                  <img
                    src={campaign.thumbnail}
                    alt={campaign.title}
                    className="h-40 w-full object-cover"
                  />
                </figure>
                <div className="card-body p-2">
                  <h2 className="card-title">{campaign.title}</h2>
                  <p className="text-sm text-gray-700">
                    {campaign.description.slice(0, 100)}...
                  </p>
                  <p className="font-bold mt-2">
                    Minimum Donation: {campaign.minDonation} BDT
                  </p>
                  <p className="text-sm text-gray-500">
                    Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                  </p>
                  <div className="card-actions justify-end mt-4">
                    <Link
                      to={`/details/${campaign._id}`}
                      className="btn bg-purple-600 text-white"
                    >
                      See More
                    </Link>
                  </div>
                </div>
              </div>
              
            ))}
          </div>
  // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  //   {sortData.map((data, index) => (
  //     <div key={data._id} className="card bg-white shadow-lg p-6 rounded-lg overflow-hidden h-[350px] hover:scale-105 transition-transform duration-300">
  //       <h3 className="font-bold text-lg mb-2">{data.title.slice(0, 30)}...</h3>
  //       <p className="text-gray-600 mb-2">Type: {data.type}</p>
  //       <p className="text-gray-500 mb-2">Deadline: {new Date(data.deadline).toLocaleDateString()}</p>
  //       <p className="font-semibold text-gray-800 mb-4">Min Donation: {data.minDonation} BDT</p>
  //       <div className="flex justify-end">
  //         <Link
  //           to={`/details/${data._id}`}
  //           className="btn bg-purple-600 text-white"
  //         >
  //           See More
  //         </Link>
  //       </div>
  //     </div>
  //   ))}
  // </div>
)}

    </div>
  )
}
