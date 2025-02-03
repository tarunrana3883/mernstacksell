import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { localhostURL } from "./url";

export default function Login({ setOtpVerify }) {
  const navigate = useNavigate();
  const [value, setValue] = useState({ userName: "", password: "" }); // Initialize with empty object

  const ChangeValueInLogIn = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const LogInDataBase = async (e) => {
    e.preventDefault();

    try {
      const url = `${localhostURL}LogInUser`;
      const response = await axios.post(url, value);
      const { id, token, status } = response.data;

      if (!status) {
        window.alert("Invalid data");
      } else {
        sessionStorage.setItem("Userid", id);
        sessionStorage.setItem("AcessToken", token);
        navigate("/");
      }
    } catch (error) {
      window.alert(error?.response?.data?.msg || "Something went wrong");
    }
  };

  const ShopkeeperDB = async (e) => {
    e.preventDefault();

    try {
      const url = `${localhostURL}Shopkeeperlogin`;
      const response = await axios.post(url, value);
      const { id, token, status } = response.data;

      if (!status) {
        window.alert("Invalid data");
      } else {
        sessionStorage.setItem("ShopKeeperid", id);
        sessionStorage.setItem("ShopKeeperAcessToken", token);
        setOtpVerify(true);
        navigate("/ShopkeeperaddSpecs");
      }
    } catch (error) {
      window.alert(error?.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          WELCOME
        </h2>

        <form>
          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              onChange={ChangeValueInLogIn}
              name="userName"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              onChange={ChangeValueInLogIn}
              name="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Buttons */}
          <div className="mb-4">
            <button
              type="submit"
              onClick={LogInDataBase}
              className="w-full mb-2 bg-blue-600 text-white py-2 rounded-full hover:bg-cyan-600 transition duration-300 transform hover:scale-105"
            >
              User LOGIN
            </button>
            <button
              type="submit"
              onClick={ShopkeeperDB}
              className="w-full bg-blue-600 mb-2 text-white py-2 rounded-full hover:bg-cyan-600 transition duration-300 transform hover:scale-105"
            >
              Shopkeeper LOGIN
            </button>
            <button
              type="button"
              className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-cyan-600 transition duration-300 transform hover:scale-105"
              onClick={() => window.alert("Admin login not implemented yet")}
            >
              Admin LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
