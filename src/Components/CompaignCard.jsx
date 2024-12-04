import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CompaignCard({loader}) {
  
    const {thumbnail,
        title,
        type,
        description,
        minDonation,
        deadline,
        _id
      }  = loader
  return (
    <div>
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={thumbnail}
            alt="Comapign" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          {title.split(" ").slice(0, 2).join(" ")}
            <div className="badge badge-secondary">{type}</div>
          </h2>
          <p className='text-left  text-slate-900'>{description.slice(0, 100)}...</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{deadline}</div>
            <div className="badge badge-outline">{minDonation}</div>
          </div>
          <div>
            <Link to={`/details/${_id}`} className='btn  btn-secondary'>See More</Link>
          </div>
        </div>
        </div>
    </div>
    
  )
}
