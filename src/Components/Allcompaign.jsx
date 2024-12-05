import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CompaignCard from './CompaignCard'

export default function Allcompaign() {
  const loaderData = useLoaderData()
  const[sortData , setSortdata] = useState(loaderData)
  useEffect(() => {
    const sorted = [...loaderData].sort((a, b) => b.minDonation - a.minDonation)
    setSortdata(sorted)
  }, [loaderData]) 
  return (
    <div className="container mx-auto my-5">
    <div className="overflow-x-auto">
      <table className="table ">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>MinDonation</th>
          </tr>
        </thead>
        <tbody>
          {sortData.map((data, index) => (
            <tr key={data._id}> 
              <th>{index + 1}</th>
              <td>{data.title}</td>
              <td>{data.description.slice(0,50)}</td>
              <td>{data.deadline}</td>
              <td>{data.minDonation}</td>
              <td>
                <Link to={`/details/${data._id}`} className="btn btn-primary">See More</Link>
              </td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}
