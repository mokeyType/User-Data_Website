import React from 'react'
import '/src/components/Text.css'
const Text = ({ currentPage , setAction }) => {

  if(currentPage ==='home'){
     return (
    <div className='t'>
      <div className="heading">
        <h1 className='h'>Hello✌</h1>
        <h1 className='m'>How are you</h1>
        <p className='s-h'>This is a simple app from where you can fetch and post data of user</p>
       </div>
       <div className="btn">
        <button className='btn1' onClick={()=> setAction('search')}>Search User</button>
        <button className='btn2'onClick={()=> setAction('add')}>Add User</button>
      </div>
    </div>
  );
  }
  else if(currentPage === 'About_us'){
     return (
       <div className="flex flex-col w-[80%] gap-[3rem]  overflow-y-scroll ">
          <div>
          <h1 className="md:text-[5rem] text-[3rem]  bg-[rgb(89,89,255)] text-white">📖 About Us</h1>
          <p className='text-[1.5rem]'>
          Welcome to the User Management System — a sleek, responsive web application developed to collect and manage user data through a simple and interactive interface.
          The frontend of this application is built entirely using React.js, a modern JavaScript library that enables smooth and dynamic user experiences. The layout and styling are powered by Tailwind CSS, ensuring the interface is clean, mobile-friendly, and visually appealing.
          </p>
          </div>
          <div>
          <h2 className="md:text-[3rem] text-[2rem] bg-[rgb(89,89,255)] text-white">🛠 Technologies Used in the Frontend:</h2>
          <ul className="text-[1.5rem]  list-disc list-inside">
          <li>⚛️ React.js — For building interactive user interfaces.</li>
          <li>🎨 Tailwind CSS — For modern, utility-first styling.</li>
          <li>🌐 Fetch API — For sending HTTP POST requests to the backend service.</li>
          </ul>
          </div>
          <div>
          <h2 className="md:text-[3rem] text-[2rem] bg-[rgb(89,89,255)] text-white">💻 Frontend developed by:</h2>
          <p className="text-[1.5rem] ">🔧 <u>Magnus_X </u>– A passionate frontend developer who believes in building clean, accessible, and responsive web interfaces using cutting-edge technologies.</p>
          </div>
          
       </div>
     );
  }
}

export default Text
