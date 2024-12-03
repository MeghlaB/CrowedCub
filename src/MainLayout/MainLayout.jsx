import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function MainLayout() {
  return (
    <div>
    <header>
       <Header></Header>
   </header>
   <div className='min-h-[calc(100vh-288px)]'>
   <Outlet></Outlet>
   </div>
   <Footer></Footer>
  </div>
  )
}
