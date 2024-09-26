import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='flex justify-center items-center h-screen'>

      <form className='flex flex-col gap-5' action="">

        <input type="text" placeholder='Enter Name'/>
        <input type="text" placeholder='Enter Email'/>
        <input type="text" placeholder='Password'/>
        <div>You have not User <span className='text-blue-900'><Link to='/Signin'>SignUp</Link></span></div>
        <button className='bg-blue-700 rounded-md py-1 text-white font-semibold'>SignUp</button>
      </form>
    </div>
  )
}
