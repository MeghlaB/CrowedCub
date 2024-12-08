
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AddProvider/AuthProvider';

export default function MyDonation() {
  const { user } = useContext(AuthContext);
  // const donationUser = useLoaderData();
  const [userCampaigns, setUserCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserCampaigns = async () => {
      if (user?.email) {
        const response = await fetch(`https://server-site-topaz.vercel.app/user/${user.email}`);
        const data = await response.json();
        setUserCampaigns(data);
      }
      setLoading(false);
    };

    fetchUserCampaigns();
  }, [user]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="spinner border-4 border-violet-500 border-t-transparent rounded-full w-10 h-10 animate-spin"></div>
        </div>
      ) : userCampaigns.length === 0 ? (
        <p className="text-center text-2xl font-bold text-violet-700 bg-base-200 h-80 flex items-center justify-center">
          No donations found!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4 container mx-auto">
          {userCampaigns.map((donation) => (
            <div
              key={donation._id}
              className="card bg-base-100 shadow-xl p-4 border"
            >
              <figure>
                <img
                  src={donation.thumbnail || 'default-thumbnail.png'}
                  alt={donation.title}
                  className="h-40 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{donation.title}</h2>
                <p>{donation.description}</p>
                <p className="font-bold">
                  Minimum Donation: {donation.minDonation} BDT
                </p>
                <p>Donated By: {donation.username}</p>
                <p>Email: {donation.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
