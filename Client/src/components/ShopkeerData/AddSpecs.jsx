import React from 'react';

export default function AddSpecs() {
  return (
    <div className=' bg-gray-200  '>

      <div className="flex flex-wrap justify-center  items-center h-[1010px] ">
        <form className="flex flex-col  gap-4 bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
            Add Specifications
          </h2>

          <input
            type="text"
            placeholder="Enter title"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <input
            type="file"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <input
            type="text"
            placeholder="Sub description"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <input
            type="text"
            placeholder="Price"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <input
            type="text"
            placeholder="Model No"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <label htmlFor="description" className="text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter description"
            className="border border-gray-300 rounded-lg px-4 py-2 h-24 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>

          <label htmlFor="spec-size" className="text-sm font-medium text-gray-600">
            Choose a Specs Size:
          </label>
          <select
            id="spec-size"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="Wide">Wide</option>
            <option value="Narrow">Narrow</option>
            <option value="Medium">Medium</option>
            <option value="Extralarge">Extralarge</option>
          </select>

          <label htmlFor="spec-category" className="text-sm font-medium text-gray-600">
            Choose a Specs Category:
          </label>
          <select
            id="spec-size"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="men">men</option>
            <option value="Women">Women</option>
            <option value="kids">kids</option>
            <option value="old">old</option>
          </select>

          <select
            id="spec-category"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="sport">Sport</option>
            <option value="fashion">Fashion</option>
            <option value="classic">Classic</option>
            <option value="old">Old</option>
          </select>

          <input
            type="text"
            placeholder="Rating"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Price"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Shopkeeper id "
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>

    </div>
  );
}
