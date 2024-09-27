import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {

  const navigate = useNavigate()

  const [value, setValue]= useState()

  const ChangeValueInLogIn =(e)=>{

    e.preventDefault()
    setValue({...value,[e.target.name]:e.target.value})
    
  }
 
  const LogInDataBase = async (e)=>{
    e.preventDefault()

   try{
    const url ='http://localhost:5000/LogInUser'

    const User = await axios.post(url, value)

   
    const id =User.data.id
    const token = User.data.token

    if(User.status===false) window.alert('invalid data')

      else{
        sessionStorage.setItem('Userid' , id)
        sessionStorage.setItem('AcessToken' , token)

        navigate('/')
      }
   }
   catch(error) { window.alert(error.response.data.msg)}
  }

  return (
    <div className='flex justify-center items-center h-screen'>

      <form className='flex flex-col gap-5' action="">

      
        <input onChange={ChangeValueInLogIn} type="text" name='userName' placeholder='Enter Email'/>
        <input onChange={ChangeValueInLogIn} type="text" name='password' placeholder='Password'/>
        <div>You have not User <span className='text-blue-900'><Link to='/Signin'>SignUp</Link></span></div>
        <button onClick={LogInDataBase} className='bg-blue-700 rounded-md py-1 text-white font-semibold'>Login</button>
      </form>
    </div>
  )
}
