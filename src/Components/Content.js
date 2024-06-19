import React from 'react'
import profilePic from '../assests/icons/profilepic.jpeg'
const Content = () => {
  return (
    <div className='flex flex-col w-full h-full bg-charcoal-black items-center text-white gap-4 font-lato p-4'>
    <img src={profilePic} alt='Profile Picture of Jeevan Singh' className='rounded-full w-20 h-20'></img>
    <div className='text-center'>
      <h1 className='text-2xl font-bold'>Jeevan Singh</h1>
      <p className='text-lg'>A React Web Developer</p>
    </div>
    <p className='text-center'>
      Welcome to my portfolio. I am an aspiring front-end web developer currently pursuing a diploma in Computer Engineering at Temasek Polytechnic.
    </p>
  </div>  
  )
}

export default Content