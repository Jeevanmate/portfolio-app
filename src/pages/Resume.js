import React from 'react'
import resumePg1 from '../assests/icons/resumePg1.png'
import resumePg2 from '../assests/icons/resumePg2.png'
import Header from '../Components/Header'
const Resume = () => {
  return (
    <>
      <Header/>
      <img src ={resumePg1} alt = "Page 1" >
      </img>
      <img src ={resumePg2} alt = "Page 2" >
      </img>
    </>
  )
}

export default Resume