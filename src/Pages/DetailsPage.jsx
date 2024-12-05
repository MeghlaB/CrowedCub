import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AddProvider/AuthProvider';
import { BsCalendar2Date } from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';
import Swal from 'sweetalert2';

export default function DetailsPage() {
  const { user } = useContext(AuthContext);
  const detailsData = useLoaderData();
  const { thumbnail, title, type, description, minDonation, deadline } = detailsData;

  const isDeadlineOver = new Date(deadline) < new Date();
  const handleDonate = () => {
    if (isDeadlineOver) {
      Swal.fire({
        title: 'Expired!',
        text: 'This campaign has expired. You cannot donate!',
        icon: 'error',
        confirmButtonText: 'Close',
      });
      return; 
    }
    const donateData = {
      email: user?.email,
      username: user?.displayName,
      title,
      description,
      minDonation,
      thumbnail,
    };

    fetch('https://server-site-topaz.vercel.app/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(donateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Campaign added successfully!',
            icon: 'success',
            confirmButtonText: 'Done',
          });
        }
      });
  };

  return (
    <div className="flex card lg:card-side bg-base-100 shadow-xl px-4 py-4 my-10 mx-10">
  <div className="flex-[1] p-4">
    <img className="w-full h-auto" src={thumbnail} alt="Campaign" />
  </div>
  <div className="flex-[2] p-4">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <p>Type: <button className="badge badge-info my-2">{type}</button></p>
    <p className="flex items-center gap-4">
      <BsCalendar2Date /> {deadline}
    </p>
    <p className="flex items-center">
      <MdOutlineAttachMoney className="font-bold text-xl" />
      <span className="text-xl">{minDonation}</span>
      <span className="font-bold text-xl space-x-3">BDT</span>
    </p>
    <div className="card-actions justify-end">
      <button
     
        onClick={handleDonate}
        className=" btn bg-[#796B96] text-white"
      >
        Donate NOW
      </button>
    </div>
  </div>
</div>
  );
}
