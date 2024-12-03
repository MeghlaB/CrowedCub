import React, { useContext, useState } from "react";
import { AuthContext } from "../AddProvider/AuthProvider";
import Swal from "sweetalert2";

export default function AddCampaign() {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    thumbnail: "",
    title: "",
    type: "personal issue",
    description: "",
    minDonation: "",
    deadline: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   const from = e.target
   const thumbnail = from.thumbnail.value;
   const title = from.title.value;
   const type = from.type.value;
   const description = from.description.value;
   const minDonation = from.minDonation.value;
   const deadline = from.deadline.value;
   const addInfo ={thumbnail,title,type,description,minDonation,deadline}
   console.log(addInfo)
  //  send data with server site

  fetch(`http://localhost:5000/addCompaign`,{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(addInfo)
  })
  .then((res)=> res.json())
  .then((data)=>{
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

  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Add New Campaign</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 rounded shadow-md"
      >
        <div className="mb-4">
          <label className=" text-left flex justify-start text-gray-700 font-bold mb-2 ">Image URL</label>
          <input
            type="url"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            placeholder="Enter image URL"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="text-left flex justify-start text-gray-700 font-bold mb-2">Campaign Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter campaign title"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="text-left flex justify-start text-gray-700 font-bold mb-2">Campaign Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="personal issue">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative ideas">Creative Ideas</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="text-left flex justify-start text-gray-700 font-bold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter campaign description"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className=" text-left flex justify-start text-gray-700 font-bold mb-2">Minimum Donation Amount</label>
          <input
            type="number"
            name="minDonation"
            value={formData.minDonation}
            onChange={handleChange}
            placeholder="Enter minimum donation amount"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="text-left flex justify-start text-gray-700 font-bold mb-2">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="text-left flex justify-start text-gray-700 font-bold mb-2">User Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full px-3 py-2 border rounded bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="text-left flex justify-start text-gray-700 font-bold mb-2">User Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="w-full px-3 py-2 border rounded bg-gray-100"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

