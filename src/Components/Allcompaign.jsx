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
    <div className="container mx-auto my-6">
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
        <div className="overflow-x-auto">
          <table className="table ">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Type</th>
                <th>Date</th>
                <th>MinDonation</th>
              </tr>
            </thead>
            <tbody>
              {sortData.map((data, index) => (
                <tr key={data._id}>
                  <th>{index + 1}</th>
                  <td>{data.title.slice(0, 30)}</td>
                  <td>{data.type}</td>
                  <td>{data.deadline}</td>
                  <td>{data.minDonation}</td>
                  <td>
                    <Link
                      to={`/details/${data._id}`}
                      className="btn bg-purple-600 text-white"
                    >
                      See More
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
