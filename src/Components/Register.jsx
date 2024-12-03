import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link, NavLink } from 'react-router-dom'

export default function Register() {
    const [error , setError] = useState('')
    const [showpassword , setShowPassword] = useState(false)
    const handeleLRegister = e =>{
        e.preventDefault()
        setError('')
        const Name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    }
  return (
    <div>
        <h1 className='text-5xl text-green-900'>Register to your account</h1>
        <div className='felx justify-center items-center my-4 max-w-sm mx-auto'>
        <p>
          <Link  className='btn border-blue-950 text-xl hover:bg-sky-950 hover:text-white flex items-center'> Google <FcGoogle /></Link>
       </p>
       <p>
       <div className="divider">or with email and password</div>
       </p>
        </div>
        <div className="card bg-base-100 w-full mx-auto  max-w-sm shrink-0 shadow-2xl px-3 py-3">
            <form onSubmit={handeleLRegister}  className="card-body">
                <div className="form-control">
                <label className="label">
                <span className="label-text">Name</span>
                </label>
                <input type="Name" placeholder="enter your name" name='name' className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text">Photo</span>
                </label>
                <input type="url" placeholder="PhotoURl" name='photo' className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
            </div>
            <div className="form-control relative">
                <label className="label">
                <span className="label-text">Password</span>
                </label>
                <input 
                type={showpassword ?'text':'password'}
                placeholder="password"
                name='password' className="input input-bordered" required />
                <button
                  onClick={()=>setShowPassword(!showpassword)} 
                 className='absolute right-4 top-14'
                >
                {
                    showpassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
                }
                </button> 
                {
                error&&<p className='text-red-500'>{error}</p>
                } 
                <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary mb-3">Register</button>
            
            </div>
            </form>
            <p>Don't Have An Account ?<span><NavLink to={'/login'} className='text-blue-700 underline'>Login</NavLink></span></p>

        </div>
    </div>
  )
}
