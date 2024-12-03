import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../AddProvider/AuthProvider'

export default function Header() {
  const {user,logout} = useContext(AuthContext)
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/allCampaign'}>All Campaign</NavLink>
          <NavLink to={'/addCampaign'}>Add New Campaign</NavLink>
          <NavLink to={'/myCampaign'}>My Campaign</NavLink>
          <NavLink to={'/myDonation'}>My Donations</NavLink>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-4">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/allCampaign'}>All Campaign</NavLink>
      <NavLink to={'/addCampaign'}>Add New Campaign</NavLink>
      <NavLink to={'/myCampaign'}>My Campaign</NavLink>
      <NavLink to={'/myDonation'}>My Donations</NavLink>
      </ul>
    </div>
    <div className="navbar-end gap-3">
    {
      user?.email?
      <div className='flex items-center gap-2'>
        <img  className=' w-5 h-5 lg:w-10 lg:h-10 rounded-full ' src={user?.photoURL} alt="" />
        <p className='text-xs lg:text-[14px]'>{user?.displayName}</p>
        <button onClick={logout} className="btn">LogOut</button>
      </div>
      : (
        <div className='flex gap-4'>
           <NavLink to={'/login'} className="btn">Login</NavLink>
           <NavLink to={'/register'} className="btn">Register</NavLink>
        </div>
      )
    }
  
     
    </div>
  </div>
  )
}
