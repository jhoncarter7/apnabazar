import {  useState } from 'react';
import {Link} from 'react-router-dom'

export default function SignUp() {
 const [userData, setUserData] = useState(null)
const [signupSuccess, setSignupSuccess] = useState(false)
 const changeHandler = (e) =>{
  setUserData((prev)=>({...prev, [e.target.id]:e.target.value}))
 }
  const signupHandler = async (e) => {
  e.preventDefault()
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(userData)
      })
      const data = await res.json()
      if(data.success === false){
         console.log(data.message)
         return;
      }
       setSignupSuccess(true)
    } catch (error) {
      console.log(error)
      setSignupSuccess(false)
    }
  }
  return (
      <div className="p-6 mt-16 max-w-xl mx-auto shadow-md rounded-lg">
        <h1 className="font-semibold text-slate-700 text-xl text-center">Signup </h1>
        <p className="text-slate-700 text-center">Get access to your Orders, Wishlist and Recommendations</p>
        <form onSubmit={signupHandler} className="flex flex-col gap-4  items-center text-center p-5 sm:px-9 max-w-xl ">
          <input type='text' id="fullName" className="border rounded-lg p-2 px-5 outline-none text-slate-700 w-full" placeholder="your username" onChange={changeHandler}/>
          <input type='email' id="email" className="border rounded-lg p-2 px-5 outline-none text-slate-700 w-full" placeholder="your email" onChange={changeHandler}/>
          <input type='number' id="mobileNo" className="border rounded-lg p-2 px-5 outline-none text-slate-700 w-full" placeholder="Enter Mobile Number" onChange={changeHandler}/>
          <input type='password' id="password" className="border rounded-lg p-2 px-5 outline-none text-slate-700 w-full" placeholder="your password" onChange={changeHandler}/>
          <button className="border p-4 bg-green-700 w-full rounded-lg uppercase text-white hover:opacity-90">sign up</button>
        </form>
        {signupSuccess && <p className='text-center text-green-800 font-semibold pb-2'>Successfully created</p>}
        <div className=" flex gap-3 w-full  px-5 sm:px-9">
        <p className='text-slate-700'>Already have an account!</p>
        <Link to={'/signin'} className='text-red-500 font-semibold'>
        SignIn
        </Link>
        </div>
      </div>
    );
    
  
}
