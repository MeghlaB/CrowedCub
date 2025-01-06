
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AddProvider/AuthProvider";
import Swal from "sweetalert2";

export default function MyCampaign() {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`http://localhost:5000/addCompaign?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCampaigns(data);
          setLoading(false); 
        })
        .catch((error) => {
          console.error("Error fetching campaigns:", error);
          setLoading(false); 
        });
    }
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Campaign card will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addCompaign/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Campaign has been deleted.", "success");

              const remaining = campaigns.filter((campaign) => campaign._id !== _id);
              setCampaigns(remaining); 
            }
          })
          .catch((error) => {
            console.error("Error deleting campaign:", error);
          });
      }
    });
  };

  return (
    <div className="container mx-auto my-5">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="spinner-border border-4 border-violet-500 border-t-transparent rounded-full w-10 h-10 animate-spin"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
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
              {campaigns.map((data, index) => (
                <tr key={data._id}>
                  <th>{index + 1}</th>
                  <td>{data.title}</td>
                  <td>{data.deadline}</td>
                  <td>{data.minDonation}</td>
                  <td>
                    <Link to={`/update/${data._id}`} className="btn bg-[#796B96] text-white">
                      Update
                    </Link>
                  </td>
                  <td>
                    <Link onClick={() => handleDelete(data._id)} className="btn bg-red-400 text-white">
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
