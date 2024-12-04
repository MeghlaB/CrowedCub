import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import CompaignCard from './CompaignCard'

export default function Allcompaign() {
  const loaderData = useLoaderData()
  const[sortData , setSortdata] = useState(loaderData)
  const[isAsending,setIsAsending] = useState(true)
  const handleAscending =()=>{
    const sorted = [...loaderData].sort((a, b) => a.minDonation - b.minDonation);
    setSortdata(sorted)
  }
  const handleDescending =()=>{
    const sorted = [...loaderData].sort((a, b) => b.minDonation - a.minDonation);
    setSortdata(sorted)
  }
  // console.log(loaderData)
  return (
    <div className='py-5'>
       {/* Sort Button */}
      <div className="text-center mb-4 space-x-5">
       <button onClick={handleAscending} className='btn btn-primary '>Ascending</button>
       <button onClick={handleDescending} className='btn btn-primary'>Descending</button>
      </div>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-0 lg:px-10'>
     {
        sortData.map((loader)=><CompaignCard key={loader._id} loader={loader}></CompaignCard>)
      }
     
     </div>
    </div>
  )
}
