import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { localhostURL } from './url';

export default function OtpVerification() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const otpRefs = useRef([]);
  const navigate = useNavigate();
  const { id } = useParams();

  // Focus management for OTP inputs
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (value.length <= 1 && !isNaN(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      // Move to the next input
      if (index < otp.length - 1 && value) {
        otpRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1].focus(); // Move to the previous input
    }
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredOtp = otp.join('');
    if (enteredOtp.length < otp.length) {
      setError('Please enter all the OTP digits.');
      return;
    }

    setError('');
    try {
      const url = `${localhostURL}OtpVerification/${id}`;
      const response = await axios.post(url, { otp: enteredOtp });
     
      if (response.data.success) {
        navigate('/Login'); 
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setError(error.response?.data?.msg || 'Something went wrong. Please try again.');
    }
  };

  // Resend OTP Functionality
  const handleResendOtp = async () => {
    setError('');
    try {
      const url = `${localhostURL}ResendOtp/${id}`;
      await axios.post(url);
      alert('OTP resent successfully.');
    } catch (error) {
      setError(error.response?.data?.msg || 'Failed to resend OTP. Please try again.');
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md px-6 py-8 mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          OTP Verification
        </h2>

        {error && (
          <div className="mb-4 text-red-600 text-center">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-between items-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength="1"
                ref={(el) => (otpRefs.current[index] = el)}
                className={`w-12 h-12 text-xl text-center border ${
                  error ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 transition duration-200`}
                placeholder="-"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-500"
          >
            Submit
          </button>
        </form>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
          Didn't receive the OTP?{' '}
          <button onClick={handleResendOtp} className="text-blue-600 hover:underline">
            Resend OTP
          </button>
        </p>
      </div>
    </section>
  );
}
