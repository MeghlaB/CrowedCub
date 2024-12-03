import React from 'react'

export default function CompaignCard({loader}) {
    const {thumbnail,
        title,
        type,
        description,
        minDonation,
        deadline}  = loader
  return (
    
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={thumbnail}
      alt="Comapign" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {title.split(" ").slice(0, 2).join(" ")}
      <div className="badge badge-secondary">{minDonation}</div>
    </h2>
    <p className='text-left text-slate-900 font-bold'> {description.split(" ").slice(0, 6).join(" ")}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{deadline}</div>
      <div className="badge badge-outline">{minDonation}</div>
    </div>
  </div>
</div>
  )
}
