import { comma } from 'postcss/lib/list'
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

export default function RunnigComapign() {
    const [campaigns,setCamapaign] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addCompaign')
        .then(res=>res.json())
        .then((data)=>{
            const today = new Date()
            const runningCampiangs = data.filter((campaign)=>new Date(campaign.deadline)>today)
            setCamapaign(runningCampiangs.slice(0,6))

        })

    },[])
  return (
    <div className='container mx-auto py-10 px-4'>
        <h1 className="text-3xl font-bold text-center mb-8">Running Campaigns</h1>
        {
        campaigns.length === 0 ?(
                <p className='className="text-center text-gray-500"'>No running Campaigns</p>
         ):(
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                campaigns.map((campaign)=>  <div key={campaign._id} className="card bg-base-100 shadow-xl p-4 border">
                    <figure>
                        <img
                            src={campaign.thumbnail}
                            alt={campaign.title}
                            className="h-40 w-full object-cover"
                         />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">{campaign.title}</h2>
                    <p className="text-sm text-gray-700">{campaign.description.slice(0, 100)}...</p>
                    <p className="font-bold mt-2">Minimum Donation: {campaign.minDonation} BDT</p>
                    <p className="text-sm text-gray-500">Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
                    <div className="card-actions justify-end mt-4">
                    </div>
                    </div>
                    </div>
                      )
                    }
        </div>
        )
        }
      
    </div>
  )
}
