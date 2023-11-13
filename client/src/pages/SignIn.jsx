import {Link} from 'react-router-dom'

export default function SignIn() {
  return (
    <div className="p-6 mt-24 max-w-xl mx-auto shadow-md rounded-lg">
      <h1 className="font-semibold text-slate-700 text-xl text-center">Login </h1>
      <p className="text-slate-700 text-center">Get access to your Orders, Wishlist and Recommendations</p>
      <form className="flex flex-col gap-4  items-center text-center p-5 sm:px-9 max-w-xl ">
        <input type="email" className="border rounded-lg p-2 px-5 outline-none text-slate-700 w-full" placeholder="your email"/>
        <input type="password" className="border rounded-lg p-2 px-5 outline-none text-slate-700 w-full" placeholder="your password"/>
        <button className="border p-4 bg-green-700 w-full rounded-lg uppercase text-white hover:opacity-90">sign in</button>
      </form>
      <div className=" flex gap-3 w-full  px-5 sm:px-9">
      <p className='text-slate-700'>Don&apos;t have an account!</p>
      <Link to={'/signup'} className='text-red-500 font-semibold'>
      SignUp
      </Link>
      </div>
    </div>
  );
  
}
