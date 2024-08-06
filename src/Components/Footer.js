import React from 'react'
import js_img from '../assests/icons/javaScript.svg'
import react_img from '../assests/icons/react.svg'
import tailwindcss_img from '../assests/icons/tailwind_css.svg'
const Footer = () => {
  return (
    <footer className='flex justify-center items-center gap-20 bg-slate-grey h-full w-full '>
        <div className='flex flex-col gap-10 pl-4'>
            <div className='text-white'>
                <h1 className='font-bold text-xl'>
                    How to contact me?
                </h1>

                <p>Gmail: Jeevansingh.professional@gmail.com</p>
                <p>Whatsapp: +65 88928586</p>
            </div>
            
            <div className='flex flex-col text-white'>
                <h1 className = 'font-bold text-xl'>
                    View my Projects on github
                </h1>
                <a href='https://github.com/Jeevanmate' className='hover:text-blue'>
                    GitHub
                </a>
                <h1 className = 'font-bold text-xl'>
                    Connect with Me on LinkedIn
                </h1>
                <a href='https://www.linkedin.com/in/jeevan-singh-b27329263/' className='hover:text-blue'>
                    LinkedIN
                </a>
            </div>
        </div>
            

    
            <div className='flex flex col text-white'>
                <h1 className = 'font-bold text-xl'>
                    Technologies
                </h1>
                <div className='flex flex-col'>
                    <img src = {js_img} alt = 'JavaScript Logo' className='rounded-full w-32 h-20'></img>
                    <img src = {react_img} alt = 'React Logo' className='rounded-full w-32 h-20'></img>
                    <img src = {tailwindcss_img} alt = 'Tailwind css Logo' className='rounded-full w-32 h-20'></img>
                    
                </div>
            </div>
           
            <div className='flex flex-col text-white'>
                <h1 className = 'font-bold text-xl'>
                    About me
                </h1>
                <p className=''>
                A passionate and motivated individual who is open to learning and <br/> looking to gain experience and learn more about the advancing <br/> IT industry, enhance and apply web development skills <br/> using various programming languages, and develop innovative solutions <br/> with a group of like-minded engineers in hopes of eventually <br/> making positive changes to the world by increasing productivity, security, <br/> and convenience for users.
                </p>
            </div>


    </footer>
  )
}

export default Footer