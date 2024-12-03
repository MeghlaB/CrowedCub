import React, { useContext, useState } from "react";
import { AuthContext } from "../AddProvider/AuthProvider";

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
    console.log(formData);
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

