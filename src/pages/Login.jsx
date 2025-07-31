import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-72 border rounded-md backdrop-blur-lg p-2'>
        <h1 className='text-3xl mb-3'>Login</h1>
        <div className='mb-2 p-1 w-full'>
          <input type="text" placeholder='Enter your email' className='w-full bg-transparent border-b-2 py-2 outline-none'/>
        </div>
        <div className='mb-2 p-1 w-full'>
          <input type="text" placeholder='Enter your password' className='w-full bg-transparent border-b-2 py-2 outline-none'/>
        </div>
        <div className='mb-2 p-1 w-full'>
          <button className='bg-white text-black rounded-md w-full py-1 hover:bg-black hover:text-white'>Submit</button>
        </div>
        <div className='py-2 px-1'>
          <p className='text-sm font-sans'>Create a new accont | <span className='text-md'>Sign Up</span> </p>
        </div>
      </div>
    </div>
  )
}

export default Login
