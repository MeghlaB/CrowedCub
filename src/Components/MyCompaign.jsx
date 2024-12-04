import React, { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../AddProvider/AuthProvider';

export default function MyCampaign() {
  const{user}= useContext(AuthContext)
  const campaignData = useLoaderData();
console.log(campaignData)
const userCampaigns = campaignData.filter((data) => data.addedby === user?.email)
console.log(userCampaigns)
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
            {userCampaigns.map((data, index) => (
              <tr key={data._id}> 
                <th>{index + 1}</th>
                <td>{data.title}</td>
                <td>{data.deadline}</td>
                <td>{data.minDonation}</td>
                <td>
                  <Link to={`/update/${data._id}`} className="btn btn-primary">Update</Link>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
