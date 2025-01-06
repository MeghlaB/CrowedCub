import React from 'react'
import Banner from '../Home/Banner'
import RunnigComapign from '../Home/RunnigComapign'
import HowItwork from '../Home/HowItwork'
import Feauterd from '../Home/feauterd'
import Blog from '../Pages/Blog'

export default function Home() {
  return (
    <div className='w-full'>
      <Banner></Banner>
      <RunnigComapign></RunnigComapign>
      <HowItwork></HowItwork>
      <Feauterd></Feauterd>
      <Blog></Blog>
    </div>
  )
}
