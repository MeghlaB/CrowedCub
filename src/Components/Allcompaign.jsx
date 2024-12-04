import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import CompaignCard from './CompaignCard'

export default function Allcompaign() {
  const loaderData = useLoaderData()
  const[sortData , setSortdata] = useState(loaderData)
  useEffect(() => {
    const sorted = [...loaderData].sort((a, b) => b.minDonation - a.minDonation)
    setSortdata(sorted)
  }, [loaderData]) 
  return (
    <div className='py-5'>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-0 lg:px-10'>
     {
        sortData.map((loader)=><CompaignCard key={loader._id} loader={loader}></CompaignCard>)
      }
     </div>
    </div>
  )
}
