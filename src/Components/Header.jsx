import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../AddProvider/AuthProvider'

import logoImage from '../assets/crowed.png'

import { MdSunny } from 'react-icons/md'
import { FiMoon } from 'react-icons/fi'
import { ThemeContext } from '../AddProvider/ThemeProvider'

export default function Header() {
  const {togglebtn,theme} = useContext(ThemeContext)
  const {user,logout,isDarkmode , setDarkmode} = useContext(AuthContext)

  // const apidata = useContext(AuthContext)
 
  return (
   <div className="navbar   bg-[#796b96] text-white" >
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
            className="menu menu-sm dropdown-content  bg-blue-950 rounded-box z-[4] mt-3 w-52 p-2  shadow">
            <NavLink className={({ isActive}) =>isActive ? "text-slate-900 font-bold border-b-2 border-slate-900 " : "text-red-700"
    } to={'/'}>Home</NavLink>
            <NavLink className={({ isActive}) =>isActive ? "text-slate-900 font-bold border-b-2 border-slate-900 " : "text-red-700"
    } to={'/allCampaign'}>All Campaign</NavLink>
            <NavLink className={({ isActive}) =>isActive ? "text-slate-900 font-bold border-b-2 border-slate-900 " : "text-red-700"
    } to={'/addCampaign'}>Add New Campaign</NavLink>
            <NavLink className={({ isActive}) =>isActive ? "text-slate-900 font-bold border-b-2 border-slate-900 " : "text-red-700"
    } to={'/myCampaign'}>My Campaign</NavLink>
            <NavLink className={({ isActive}) =>isActive ? "text-slate-900 font-bold border-b-2 border-slate-900 " : "text-red-700"
    } to={'/myDonation'}>My Donations</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-[12px] lg:text-xl"><span><img className=' w-5 h-5 lg:w-10 lg:h-10 rounded-full' src={logoImage} alt="" /></span><span className='hidden lg:block'>Crowdcube</span></a>
        {/* <a className="btn btn-ghost text-xl"><img src={logoImage} alt="" />Crowdfunding </a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
        <NavLink className={({ isActive}) =>isActive ? " text-slate-900 font-bold border-b-2 border-slate-900   " : ""
    } to={'/'}>Home</NavLink> 
        <NavLink className={({ isActive}) =>isActive ? "text-slate-900 font-bold border-b-2 border-slate-900 " : ""
    } to={'/allCampaign'}>All Campaign</NavLink> 
        <NavLink className={({ isActive}) =>isActive ? "text-slate-900 font-bold border-b-2 border-slate-900  " : ""
    } to={'/addCampaign'}>Add New Campaign</NavLink> 
        <NavLink className={({ isActive}) =>isActive ? "text-slate-900 font-bold border-b-2 border-slate-900  " : ""
    } to={'/myCampaign'}>My Campaign</NavLink> 
        <NavLink className={({ isActive}) =>isActive ? "text-slate-900 font-bold border-b-2 border-slate-900  " : ""
    } to={'/myDonation'}>My Donations</NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-3">
      <button
          onClick={togglebtn}
          className={`px-4 py-2 text-sm font-bold transition duration-300 rounded-md shadow ${
            theme === "light" ? "text-black hover:bg-gray-200" : "text-white hover:bg-gray-800"
          }`}
        >
          {theme === "light"?<MdSunny />:<FiMoon />}
      </button>

      {
        user?.email?
        <div className='flex items-center gap-2'>
          <img 
          title={`Name: ${user?.displayName || 'N/A'}\nEmail: ${user?.email || 'N/A'}`}
          className=' w-5 h-5 lg:w-10 lg:h-10 rounded-full ' src={user?.photoURL} alt="" />
          {/* <p className='text-xs lg:text-[14px]'>{user?.displayName}</p> */}
          <button onClick={logout} className="btn">LogOut</button>
          
        </div>
        
        : (
          <div className='flex gap-1 lg:gap-4'>
            <NavLink to={'/login'} className="btn">Login</NavLink>
            <NavLink to={'/register'} className="btn">Register</NavLink>
          </div>
        )
      }
    
      
      </div>
    </div>

    
   
  )
}
