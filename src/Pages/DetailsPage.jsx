
// import React, { useContext } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../AddProvider/AuthProvider';
// import { BsCalendar2Date } from 'react-icons/bs';
// import { MdOutlineAttachMoney } from 'react-icons/md';
// import Swal from 'sweetalert2';
// import ScrollToTopOnMount from '../Components/ScrollComponent';

// export default function DetailsPage() {
//   const { user } = useContext(AuthContext);
//   // console.log(user.email)
//   const detailsData = useLoaderData();
//   // console.log(detailsData)
//   const { thumbnail, title, type, description, minDonation, deadline } = detailsData;

//   const isDeadlineOver = new Date(deadline) <= new Date();
//   const handleDonate = () => {
//     if (isDeadlineOver) {
//       Swal.fire({
//         title: 'Expired!',
//         text: 'This campaign has expired. You cannot donate!',
//         icon: 'error',
//         confirmButtonText: 'Close',
//       });
//       return;
//     }
//     const donateData = {
//       email: user?.email,
//       username: user?.displayName,
//       title,
//       description,
//       minDonation,
//       thumbnail,
//     };
// // console.log(donateData)
//     fetch('https://server-site-topaz.vercel.app/user', {
//       method: 'POST',
//       headers: {
//         'content-type':'application/json',
//       },
//       body: JSON.stringify(donateData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data)
//         if (data.insertedId) {
//           Swal.fire({
//             title: 'Success!',
//             text: 'Donate successfully!',
//             icon: 'success',
//             confirmButtonText: 'Done',
//           });
//         }
//       });
//   };
//   return (
//     <div className="flex flex-col bg-base-100 shadow-xl p-6 my-24 mx-auto max-w-4xl space-y-6">
    
//       <div className="w-full">
//         <img className="w-full h-[550px] rounded-lg" src={thumbnail} alt="Campaign" />
//       </div>
//       <div>
//         <h2 className="text-3xl font-bold mb-4">{title}</h2>
//         <p className="text-gray-600 mb-4">{description}</p>
//         <p>
//           Type: <span className="badge badge-info">{type}</span>
//         </p>
//         <p className="flex items-center gap-2 my-2 ">
//           <BsCalendar2Date /> {deadline}
//         </p>
//         <p className="flex items-center gap-2 text-xl">
//           <MdOutlineAttachMoney className="text-2xl font-bold" />
//           {minDonation} BDT
//         </p>
//       </div>
//       <div className='border-2 border-primary px-4 py-2 w-96 rounded-lg'>
//         <h1>Campaign By :</h1>
//         <div className='flex items-center gap-3'>
//         <img src={user?.photoURL} alt="user" className="rounded-full mt-3 w-16 h-16 border-4 border-secondary cursor-pointer" />
//         <div>
//         <p className='text-xl font-bold text-secondary'>{user?.displayName}</p>
//         <p className='text-xl font-bold text-secondary'>{user?.email}</p>
//         </div>
//         </div>
//       </div>
//       <div className="flex justify-end">
//         <button
//           onClick={handleDonate}
//           className="btn bg-purple-600 text-white hover:bg-[#5c4b77]"
//         >
//           Donate NOW
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AddProvider/AuthProvider';
import { BsCalendar2Date } from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';
import Swal from 'sweetalert2';
import ScrollToTopOnMount from '../Components/ScrollComponent';

export default function DetailsPage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const detailsData = useLoaderData();
  const { thumbnail, title, type, description, minDonation, deadline,email,photo,name } = detailsData;

  const isDeadlineOver = new Date(deadline) <= new Date();
  const handleDonate = () => {
    if (!user) {
      // If user is not logged in, redirect to login page
      navigate('/login');
      return;
    }

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
            text: 'Donate successfully!',
            icon: 'success',
            confirmButtonText: 'Done',
          });
        }
      });
  };

  return (
    <div className="flex flex-col bg-base-100 shadow-xl p-6 my-24 mx-auto max-w-4xl space-y-6">
      <div className="w-full">
        <img className="w-full h-[550px] rounded-lg" src={thumbnail} alt="Campaign" />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <p>
          Type: <span className="badge badge-info">{type}</span>
        </p>
        <p className="flex items-center gap-2 my-2 ">
          <BsCalendar2Date /> {deadline}
        </p>
        <p className="flex items-center gap-2 text-xl">
          <MdOutlineAttachMoney className="text-2xl font-bold" />
          {minDonation} BDT
        </p>
      </div>
      <div className="border-2 border-primary px-4 py-2 w-96 rounded-lg">
        <h1>Campaign By :</h1>
        <div className="flex items-center gap-3">
          <img
            src={photo}
            alt="user"
            className="rounded-full mt-3 w-16 h-16 border-4 border-secondary cursor-pointer"
          />
          <div>
            <p className="text-xl font-bold text-secondary">{name}</p>
            <p className="text-xl font-bold text-secondary">{email}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleDonate}
          className="btn bg-purple-600 text-white hover:bg-[#5c4b77]"
        >
          Donate NOW
        </button>
      </div>
    </div>
  );
}
