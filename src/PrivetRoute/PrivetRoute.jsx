import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../AddProvider/AuthProvider'

export default function PrivetRoute({children}) {
    const {user ,loading} = useContext(AuthContext)
    const location = useLocation()
    // (location)
    if(loading){
        return <div className='text-center mt-4'>
            <span className="loading loading-bars loading-lg "></span>
        </div>
    }
    if(user && user?.email){
        return children
    }
  return (
    <Navigate state={location.pathname} to={'/login'}></Navigate>
  )
}
