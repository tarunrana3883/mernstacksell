import React from 'react';
import Addpecs from './AddSpecs';

export default function AllDetails() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="flex justify-between items-center px-10 py-6 bg-white shadow-md">
        <h1 className="text-6xl font-extrabold text-gray-800">Lenskart</h1>
        <img
          src="https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/entrackr/media/post_attachments/wp-content/uploads/2017/12/Lenskart-image.jpg"
          alt="Lenskart Logo"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
        />
      </div>

      {/* Dashboard Title */}
      <h1 className="text-center text-3xl font-semibold text-gray-700 mt-10 mb-6">
        Dashboard
      </h1>

      {/* Button Section */}
      <div className="flex flex-wrap justify-center gap-6 px-6 mb-10">
        <button className="bg-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Add Specs
        </button>
        <button className="bg-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Edit email
        </button>
        
        <button className="bg-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Change password
        </button>
        <button className="bg-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          View specs
        </button>
       
      </div>
      <Addpecs/>
    </div>
  );
}
