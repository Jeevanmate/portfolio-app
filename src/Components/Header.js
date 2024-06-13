import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();
    
  return (
    <header className='flex flex-row bg-grey w-full h-12 items-center justify-center gap-4 font-lato '>
        <button onClick={() => navigate("/")} >
            Home
        </button>
        <button onClick={() => navigate("/projects")}>
            Projects
        </button>
        <button onClick={() => navigate("/resume")}>
            Resume
        </button>
    </header>
  )
}

export default Header