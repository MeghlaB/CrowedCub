import React, { useContext, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../AddProvider/AuthProvider';
import Swal from 'sweetalert2';

export default function MyCampaign() {
  const{user}= useContext(AuthContext)
  const campaignData = useLoaderData();
  
// console.log(campaignData)
const userCampaigns = campaignData.filter((data) => data.addedby === user?.email)
const [comapign , setComapaign ] = useState(userCampaigns)
// console.log(userCampaigns)
const handleDelete = _id =>{
  console.log(_id)
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
    
      fetch(`http://localhost:5000/addCompaign/${_id}`,{
        method:"DELETE"
      })
      .then((res)=>res.json())
      .then(data=>{
        if(data.deletedCount >0){
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
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
                  <Link to={`/update/${data._id}`} className="btn btn-primary">Update</Link>
                </td>
                <td>
                  <Link 
                  onClick={()=> handleDelete(data._id)}
                   className="btn btn-error">Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
