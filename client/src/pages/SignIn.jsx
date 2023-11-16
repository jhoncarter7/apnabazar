import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { signinFailure, signinStart, signinSuccess } from '../redux/user/userSlice';
// import {useDisp}
export default function SignIn() {
  const [inputValue, setInputValue] = useState([])
  const [error, setError] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inputChangeHandler = (e) =>{
    setInputValue((prev)=> ({...prev, [e.target.id]: e.target.value}))
  }

  const submitFormHandler = async (e)=>{
  e.preventDefault()
  try {
    dispatch(signinStart())
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputValue)
    })
    const data = await res.json()
    console.log(data)
    if(data.success === false){
      setError(data.message)
      dispatch(signinFailure(data.message))
      return;
    }
    dispatch(signinSuccess(data))
    navigate('/')
  } catch (error) {
    setError(error.message)
    dispatch(signinFailure(error.message))
  }
  }
  return (
    <div className="p-6 mt-24 max-w-xl mx-auto shadow-md rounded-lg">
      <h1 className="font-semibold text-slate-700 text-xl text-center">Login </h1>
      <p className="text-slate-700 text-center">Get access to your Orders, Wishlist and Recommendations</p>
      <form onSubmit={submitFormHandler} className="flex flex-col gap-4  items-center text-center p-5 sm:px-9 max-w-xl ">
        <input onChange={inputChangeHandler} id='email' type="email" className="border rounded-lg p-2 px-5 outline-none text-slate-700 w-full" placeholder="your email"/>
        <input onChange={inputChangeHandler} id='password' type="password" className="border rounded-lg p-2 px-5 outline-none text-slate-700 w-full" placeholder="your password"/>
        <button className="border p-4 bg-green-700 w-full rounded-lg uppercase text-white hover:opacity-90">sign in</button>
      </form>
      {error ? <p className='text-center text-red-800 font-semibold pb-2'>{error}</p>: ''}
      <div className=" flex gap-3 w-full  px-5 sm:px-9">
      <p className='text-slate-700'>Don&apos;t have an account!</p>
      <Link to={'/signup'} className='text-red-500 font-semibold'>
      SignUp
      </Link>
      </div>
    </div>
  );
  
}
