import React from "react";
import { FaEnvelope, FaRegSnowflake } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function Login(){
return(
    <>

<div className="flex justify-center items-center h-screen ">
<div className="flex flex-col justify-center items-center  w-3/12 mb-40">
    <div className="bg-black w-8 h-8 p-1 rounded-full flex justify-center items-center  ">
<FaRegSnowflake className="text-white text-lg"/>
    </div>
    <div className="flex flex-col items-center justify-center mt-3">
        <h1 className="text-xl font-semibold">welcome back</h1>
    <p className="text-sm text-gray-500 "> Please enter credentials to Login</p>
    </div>
<div className="mt-5 w-full ">
    <form action=" " >
<div className="flex flex-col space-y-4">

   
    <div className="relative p-1 border border-gray-400 rounded-md"><input type="email" className="w-full ring-0 bg-gray-100 outline-none rounded-md  px-7 py-1 placeholder:text-gray-500 placeholder:text-sm  text-gray-900" placeholder="Enter email address"/>
    <FaEnvelope
        className="absolute left-3 top-[21px] transform -translate-y-1/2 text-gray-500"
        size={13} 
      /></div>
    <div className="relative p-1 border border-gray-400 rounded-md"><input type="password" className="w-full ring-0 bg-gray-100 outline-none rounded-md  px-7 py-1 placeholder:text-gray-500 placeholder:text-sm  text-gray-900" placeholder="Enter password"/>
    <FaLock
        className="absolute left-3 top-[21px] transform -translate-y-1/2 text-gray-500"
        size={13} 
      /></div>
    <button  className="border  border-black  text-white bg-black text-center text-base px-2 py-1 rounded-md " >
        <p>Login</p>
        </button>
</div>
    </form>
</div>
</div>
</div>

    </>
)
}
export default Login;