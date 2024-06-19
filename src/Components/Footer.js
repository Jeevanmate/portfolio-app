import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-wrap justify-center items-center gap-20 bg-slate-grey h-full w-full '>
        <div className='text-white'>
            <h1 className='font-bold text-xl'>
                How to contact me?
            </h1>

            <p>Gmail: jeevansingh.professional@gmail.com</p>
            <p>Whatsapp: +65 88928586</p>
        </div>

        <div className='flex flex-col text-white '>
            <h1 className = 'font-bold text-xl'>
                About me
            </h1>
            <p className=''>
            A passionate and motivated individual who is open to learning and <br/> looking to gain experience and learn more about the advancing <br/> IT industry, enhance and apply web development skills <br/> using various programming languages, and develop innovative solutions <br/> with a group of like-minded engineers in hopes of eventually <br/> making positive changes to the world by increasing productivity, security, <br/> and convenience for users.
            </p>
        </div>

        <div className='flex flex-col text-white'>
            <h1 className = 'font-bold text-xl'>
                Click me
            </h1>
            <a href='https://github.com/Jeevanmate'>
                GitHub
            </a>
            <a href='https://www.linkedin.com/in/jeevan-singh-b27329263/'>
                LinkedIN
            </a>
        </div>
    </footer>
  )
}

export default Footer