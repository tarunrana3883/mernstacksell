import React,{useState} from 'react'
import {Link, useNavigate} from  'react-router-dom'
import axios from 'axios'

export default function Signin() {

  const navigate = useNavigate()

  const [value, setValue]= useState()

  const ChangeValueInSignUp =(e)=>{

    e.preventDefault()
    setValue({...value,[e.target.name]:e.target.value})
    
  }
 
  const SignUpDataBase = async (e)=>{
    e.preventDefault()

   try{
    const url ='http://localhost:5000/CreateUserData'

    const User = await axios.post(url, value)

    if(User.status===false) window.alert('invalid data')

      else{
        navigate('/Login')
      }
   }
   catch(error) { window.alert(error.response.data.msg)}
  }

  return (
    <div className='flex justify-center items-center h-screen'>

      <form className='flex flex-col gap-5 bg-gray-400 p-5 rounded-lg' action="">

        <input onChange={ChangeValueInSignUp} className='rounded-md px-5' type="text" name='name' placeholder='Enter Name'/>
        <input onChange={ChangeValueInSignUp} className='rounded-md px-5'  type="text" name='userName' placeholder='Enter Email'/>
        <input onChange={ChangeValueInSignUp} className='rounded-md px-5' type="password" name='password' placeholder='Password'/>
        <div>You have Already User <span className='text-blue-900'><Link to='/Login'>Log-In</Link></span></div>
        <button onClick={SignUpDataBase} className='bg-blue-700 rounded-md py-1 text-white font-semibold'>SignUp</button>
      </form>
    </div>
  )
}
