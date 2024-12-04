import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {

  return (
    <div className='bg-base-200 h-screen flex justify-center items-center my-7 mx-7'>
    <div className="text-center">
      <h1 className="text-2xl font-bold text-violet-700">No Page found!</h1>
      <Link to={'/'} className='btn btn-primary mt-4'>Go Home</Link>
    </div>
  </div>
  )
}
