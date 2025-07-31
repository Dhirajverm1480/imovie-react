import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='sticky top-0 backdrop-blur-lg'>
      <div className='flex justify-between items-center w-full px-2 py-1'>
        <Link to='/'><span className='text-2xl underline-0'>IMovie</span></Link>
        <div className='flex gap-4'>
          <NavLink to='/'><span>Home</span></NavLink>
          <NavLink to='/movies'><span>Movies</span></NavLink>
          <NavLink to='/series'><span>Series</span></NavLink>
          <NavLink to='/contact'><span>Contact</span></NavLink>
          <NavLink to='/about'><span>About</span></NavLink>
        </div>
        <div className='flex gap-4'>
          <div>
            <input type="text" placeholder='Search' className='bg-slate-200' />
            <button className='bg-slate-200'>Search</button>
          </div>
          <div>
            <NavLink to='/login'><span className='bg-white text-black text-lg p-1'>Login</span></NavLink>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default NavBar
