import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { localhostURL } from './url';
import axios from 'axios';

export default function Signin({ setOtpVerify }) {
  const navigate = useNavigate();
  const [value, setValue] = useState({});
  const [imageFile, setImageFile] = useState(null);

  

  const ChangeValueInSignUp = (e) => {
    e.preventDefault();
    if (e.target.name === "profileImg") {
      setImageFile(e.target.files[0]); 
    } else {
      setValue({ ...value, [e.target.name]: e.target.value });
    }
  };

  const SignUpDataBase = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(value).forEach((key) => {
        formData.append(key, value[key]);
      });
      if (imageFile) {
        formData.append("profileImg", imageFile); 
      }

      const url = `${localhostURL}createuser`;
      const response = await axios.post(url, formData);

      const id = response.data.data;
      if (!response.data.status) {
        window.alert("Invalid data");
      } else {
        setOtpVerify(true);
        navigate(`/Otpverification/${id}`);
      }
    } catch (error) {
      window.alert(error.response?.data?.msg || "Error occurred");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 pb-[50px]">
      <div className="w-full max-w-lg px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Create an Account
        </h2>

        <form onSubmit={SignUpDataBase}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              onChange={ChangeValueInSignUp}
              name="name"
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              onChange={ChangeValueInSignUp}
              name="userName"
              type="email"
              id="userName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="mobileNo"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Mobile Number
            </label>
            <input
              onChange={ChangeValueInSignUp}
              name="mobileNo"
              type="tel"
              id="mobileNo"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              onChange={ChangeValueInSignUp}
              name="password"
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="profileImg"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Upload Image
            </label>
            <input
              onChange={ChangeValueInSignUp}
              name="profileImg"
              type="file"
              id="profileImg"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Create Account
          </button>
        </form>
      </div>
    </section>
  );
}
