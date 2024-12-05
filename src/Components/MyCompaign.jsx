import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../AddProvider/AuthProvider';
import Swal from 'sweetalert2';
import CompaignCard from './CompaignCard';

export default function MyCampaign() {
  const{user}= useContext(AuthContext)
  const campaignData = useLoaderData();
  // console.log(campaignData)
  const [userCampaign , setUserCampaign] = useState([])
  useEffect(()=>{
    setUserCampaign(campaignData?.filter((data) => data.email === user?.email))
 },[campaignData,setUserCampaign])

const handleDelete = (_id)=>{
    setUserCampaign((data)=>{userCampaign.filter ((data)=> data._id !== _id)

})
}
  return (
    
    <div className='conatiner mx-auto my-5'>
      <div className='grid grid-cols-1 lg:grid-cols-3  gap-5 '>
      {
        userCampaign?.map((campaign)=>{
         return <CompaignCard key={campaign._id} campaign={campaign} onClick={handleDelete}></CompaignCard>
         })
      }
    </div>
 
    </div>
  );
}
