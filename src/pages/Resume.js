import React from 'react'
import resumePg1 from '../assests/icons/resumePg1.png'
import resumePg2 from '../assests/icons/resumePg2.png'
import Header from '../Components/Header'
import github_img from '../assests/icons/Github.svg'
import linkedin_img from '../assests/icons/LinkedIN.svg'

const Resume = () => {
  return (
    <>
      <Header/>
      <div className='flex flex-col items-center font-lato'>
        <div className='text-center'>
          <h1 className='font-bold text-2xl'>Jeevan Singh</h1>
          <p>Jeevansingh.professional@gmail.com</p>
        </div>
        

        <div className='flex flex-row items-center mb-4 space-x-4 '>
          <img src={linkedin_img} alt='LinkedIn Icon' className='w-14 h-10 ml-2'></img>
          <a 
          href='https://www.linkedin.com/in/jeevan-singh-b27329263/' 
          className='hover:text-blue font-bold '
          target='_blank'
          >
          
            LinkedIn
          </a>
          <img src={github_img} alt='Github Icon' className='w-20 h-10'>
          </img>
          <a 
          href='https://github.com/Jeevanmate' 
          className='hover:text-blue font-bold'
          target='_blank'
          >
          Github
          </a>
        </div>

        <div className='w-3/4 text-center mb-4'>
          <h2 className='text-xl font-semibold'>Ambitions</h2>
          <p className='font-lato'>
            A passionate and motivated individual eager to learn and gain experience in the advancing IT industry. I aim to enhance and apply my web development skills using various programming languages. My goal is to develop innovative solutions alongside like-minded engineers. Ultimately, I hope to make positive changes in the world by increasing productivity, security, and convenience for users.
          </p>
        </div>

        {/* Education */}

        <div className='text-left w-3/4 mb-6 mr-20'>
          <h2 className='text-xl font-semibold'>Education</h2>
          <div className='flex flex-col'> 
            <h3 className='font-semibold'>
              Diploma in Computer Engineering, Temasek Polytechnic(2022-2025)
            </h3>
            <p>Director's List(2023/2024 Sem)</p>
            <p>cCGPA: 3.91 out of 4.0</p>
            <h3 className='font-semibold'>Completed Modules:</h3>
            <ul className='list-disc'>
              <li>Full Stack Development</li>
              <li>Computer Programming for Problem Solving</li>
              <li>Artificial Intelligence and Machine Learning</li>
              <li>Internet of Things Project</li>
              <li>Intelligent Automation</li>
              <li>Data Visualization and Analytics</li>
              <li>Microcontroller Applications</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">PFP – Computer Engineering, Temasek Polytechnic</h3>
            <p className="">Top 5% in the cohort (2021-2022)</p>
          </div>
          <hr className="bg-blue w-80 h-px"/>
        </div>

        {/* Projects */}
        <div className='flex flex-col pl-20'>
          <h2 className='text-xl font-semibold'>Projects</h2>
          <div>
            <ul className='list-disc pl-5 mb-2'>
              <li className='mb-2'>Developed a Sell & Swap Goods full-stack application where users can list their pre-loved<br/> or new items to sell using Microsoft.NET Blazor and Microsoft SQL Server using HTML, CSS, <br/> and JavaScript. Used the MVC Framework and created an ER diagram before coding.</li>
              <li className='mb-2'>Created a prototype of a CCA Submission System using Java for students to access to view and submit their CCA points along with their achievement status, i.e. Excellent, Very Good, Good, Fair, and Poor using Eclipse</li>
              <li className='mb-2'>Implemented a smart bakery prototype using a BME280 temperature sensor, humidity sensor, and pressure sensor. Used  Raspberry Pi as an edge device coded using Python.</li>
              <li className='mb-2'>Prepared and deployed a successful prototype of a water dam emergency system with proper documentation using C language and the PIC16F18877 microcontroller in a team of three.</li>
            </ul>
          </div>
        </div>

         {/* Skills */}

        <div className='flex flex-row'>
          <div className='flex flex-col pl-4'>
            <h2 className='text-xl font-semibold text-left' >Skills</h2>
            <h3 className='underline'>Technical/Domain Skills</h3>
            <ul className='list-disc'>
              <li className='mb-2'>Technologies/Concepts: Microsoft.NET, SQL Server Management Studio, Visual Studio, Blazor Webassembly, Object-Oriented Programming, Model-View-Controller (MVC).</li>
              <li className='mb-2'>Proficient in programming languages such as Python, C, Java, HTML, CSS, and JavaScript.</li>
              <li className='mb-2'>Knowledgeable in technologies such as embedded systems, sensors, Bluetooth, and WiFi used within the different open systems interconnection layers.</li>
              <li className='mb-2'>Skilled in machine learning algorithms such as linear regression, logistic regression, support vector machine, and K nearest neighbor.</li>
              <li className='mb-2'>Familiar with multiple programming IDEs, debugging, and applications such as Ubuntu (IoT), Anaconda (Artificial Intelligence), and documentation such as datasheets.</li>
              <li className='mb-2'>Competent in prototyping electronic devices such as the Raspberry Pi  and soldering on Vero boards.</li>
            </ul>
          </div>

          <div className='pl-4 mt-6'>
            <h3 className='underline'>Generic Skills</h3>
            <ul className='list-disc'>
              <li className='mb-2'>Exemplary organizational skills, optimizing project workflows and timelines for efficient tech project management success.</li>
              <li className='mb-2'>Spearheaded multiple group projects at Polytechnic.</li>
              <li className='mb-2'>Effective and confident speaker in a team-based setting with leadership capabilities.</li>
              <li className='mb-2'>Experienced doing leadership tasks such as delegating tasks, calling meetings, giving constructive feedback, and resolving internal issues.</li>
              <li className='mb-2'>Accustomed to working under pressure, used to working on numerous projects simultaneously with back-to-back submission deadlines.</li>
              <li className='mb-2'>Flexible and able to adapt to different scenarios.</li>
              <li className='mb-2'>Worked closely with various teams of fours and fives and encouraged the culture of giving constructive feedback to produce the best content to our ability.</li>
            </ul>
          </div>
        </div>

        {/* Awards/Achievements */}
        <div className='flex flex-col'>
          <h2 className='text-xl font-semibold'>Awards and Achievements</h2>
          <ul className='list-disc'>
            <li>Director's List 2023/2024</li>
            <li>Edusave Certificate of Good Academic Achievement and Conduct in Computer Engineering</li>
            <li>Edusave Certificate of Good Academic Achievement and Conduct in Computer Engineering</li>
          </ul>
        </div>


        
      </div>
      </>
  )
}

export default Resume