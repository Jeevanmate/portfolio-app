import React from 'react'
import profilePic from '../assests/icons/profilepic.jpeg'
const Content = () => {
  return (
      <div className='flex flex-col w-full h-full bg-blue items-center justify-center text-white gap-4 font-lato'>
        <div className=''>
          Name: Jeevan Singh
        </div>
        <p className=''>A react web developer</p>

        <img src ={profilePic} alt = 'profilePic' className='rounded-full w-20 h-20'></img>

        <p>Welcome to my portfolio.
        
        </p>
          I am an aspiring front-end web developer currently pursuing<br/> a diploma in Computer Engineering at Temasek Polytechnic
        <p>

        </p>
      </div>
    
  )
}

export default Content