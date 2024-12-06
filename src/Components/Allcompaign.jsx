import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CompaignCard from './CompaignCard'
import { AuthContext } from '../AddProvider/AuthProvider'

export default function Allcompaign() {
  const loaderData = useLoaderData()
  const{setLoading,loading} = useContext(AuthContext)
  const[sortData , setSortdata] = useState(loaderData)
  useEffect(() => {
    setLoading(true)
    const sorted = [...loaderData].sort((a, b) => b.minDonation - a.minDonation)
    setSortdata(sorted)
   
  }, [loaderData,setLoading]) 
  setLoading(false)
  return (
    <div className="container mx-auto my-5">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="spinner border-4 border-purple-600 border-t-transparent rounded-full w-10 h-10 animate-spin"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
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
                  <td>{data.title.slice(0, 30)}</td>
                  <td>{data.description.slice(0, 50)}</td>
                  <td>{data.deadline}</td>
                  <td>{data.minDonation}</td>
                  <td>
                    <Link
                      to={`/details/${data._id}`}
                      className="btn bg-[#796B96] text-white"
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
//     <div className="container mx-auto my-5">
//       {
//         loading ? (
//           <div className="flex justify-center items-center h-40">
//             <div className="spinner border-4 border-purple-600 border-t-transparent rounded-full w-10 h-10 animate-spin"></div>
//           </div>
//         ) :(
// <div className="overflow-x-auto">
//       <table className="table ">
//         <thead>
//           <tr>
//             <th></th>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Date</th>
//             <th>MinDonation</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sortData.map((data, index) => (
//             <tr key={data._id}> 
//               <th>{index + 1}</th>
//               <td>{data.title.slice(0,30)}</td>
//               <td>{data.description.slice(0,50)}</td>
//               <td>{data.deadline}</td>
//               <td>{data.minDonation}</td>
//               <td>
//                 <Link to={`/details/${data._id}`} className="btn bg-[#796B96] text-white">See More</Link>
//               </td>
            
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//         )
//       }
    
//   </div>
  )
}
