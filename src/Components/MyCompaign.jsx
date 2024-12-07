import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../AddProvider/AuthProvider';
import Swal from 'sweetalert2';
import CompaignCard from './CompaignCard';

export default function MyCampaign() {
  const{user, setLoading,loading}= useContext(AuthContext)
  const campaignData = useLoaderData();
  const [comapign , setComapaign ] = useState([])
  useEffect(()=>{
    setLoading(true)
    const userCampaigns = campaignData.filter((data) => data.email === user?.email)
    setComapaign(userCampaigns)
    setLoading(false)
  },[])
const handleDelete = _id =>{

  Swal.fire({
    title: "Are you sure?",
    text: "Campaign card is Deleted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://server-site-topaz.vercel.app/addCompaign/${_id}`,{
        method:"DELETE"
      })
      .then((res)=>res.json())
      .then(data=>{
        if(data.deletedCount >0){
          Swal.fire({
            title: "Deleted!",
            text: "Campaign has deleted.",
            icon: "success"
          });
          const remaining = comapign.filter ((data)=> data._id !== _id)
          setComapaign(remaining)
        }
      })
    }
  });
}
  return (
    <div className="container mx-auto my-5">
<div className="overflow-x-auto">
  <table className="table ">
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Date</th>
        <th>MinDonation</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {comapign.map((data, index) => (
        <tr key={data._id}> 
          <th>{index + 1}</th>
          <td>{data.title}</td>
          <td>{data.deadline}</td>
          <td>{data.minDonation}</td>
          <td>
            <Link to={`/update/${data._id}`} className="btn  bg-[#796B96] text-white">Update</Link>
          </td>
          <td>
            <Link 
            onClick={()=> handleDelete(data._id)}
             className="btn bg-red-400 text-white">Delete</Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div> 
  );
}
