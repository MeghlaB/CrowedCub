import React, { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../AddProvider/AuthProvider'
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import Swal from 'sweetalert2'

export default function DetailsPage() {
    const{user} = useContext(AuthContext)
    const detailsData = useLoaderData()
    const {thumbnail,
        title,
        type,
        description,
        minDonation,
        deadline,
        _id
      }  = detailsData
    const isDeadlineOver = new Date(deadline) < new Date();
    const handleDonate = ()=>{
      console.log('Is Deadline Over:', isDeadlineOver);
      if(isDeadlineOver){
        console.log('Expired campaign triggered'); 
        Swal.fire({
          title: 'Expired!',
          text: 'This campaign has expired. You cannot donate!',
          icon: 'error',
          confirmButtonText: 'Close'
        });
        return
      }
      else{
        const donateData ={
          email:user?.email,
          username:user?.displayName,
          title,
          description,
          minDonation,
          thumbnail
      }
      fetch('http://localhost:5000/user',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(donateData)
      })
      .then(res=> res.json())
      .then(data=>{
          if(data.insertedId){
              Swal.fire({
                title: 'Success!',
                text: 'Add Comapign SuccesFully!',
                icon: 'success',
                confirmButtonText: 'Done'
              })
            }
            console.log(data)
      })   
      }
    }
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl px-4 py-4 my-10 mx-10">
    <figure>
      <img
      className='h-[350px] w-[950px]'
        src={thumbnail}
        alt="Album" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <p>Type: <button className=' badge  badge-info py-2  '>{type}</button></p>
      <p className='flex items-center gap-4'> <BsCalendar2Date /> {deadline}</p>
      <p className='flex items-center '><MdOutlineAttachMoney className='font-bold text-xl' />
      <span className='text-xl '>{minDonation}</span> 

      <span className='font-bold text-xl space-x-3'> BDT </span></p>
      <div className="card-actions justify-end">
      <Link
  onClick={!isDeadlineOver ? handleDonate : null}
  className={`btn ${isDeadlineOver ? 'btn-disabled' : 'btn-primary'}`}
>
  {isDeadlineOver ? 'Expired' : 'Donate Now'}
</Link>
        {/* <Link onClick={handleDonate }  className="btn btn-primary">Donate Now</Link> */}
      </div>
    </div>
  </div>
  )
}
