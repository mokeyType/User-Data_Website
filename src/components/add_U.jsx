import React from 'react'
import { useState } from 'react'
import './add_U.css'
import Data from '/src/components/data.jsx'
const add_U = ({list,setUser}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  
  return (
    <div className='au'>
      <div className="info">
         <div className="help">
         <h1 className="text-[3rem] text-[2rem]">Fill up the User Details</h1>
         </div>
         <div className="details">
           <input className='name' id='detail' type="text" placeholder="Enter employee name" required  value={name} onChange={(e) => setName(e.target.value)}/>
           <input className='age' id='detail' type="date" placeholder="Enter Age " required  value={age} onChange={(e) => setAge(e.target.value)}/>
           <input className='email' id='detail' type="text" placeholder="Enter Email id:abc@gmail.com" required  value={email} onChange={(e) => setEmail(e.target.value)} />
         </div>
      </div>
      <div className="submit">
           <img className="sub-img"src="src/assets/img.png" alt="" />
           <button
          className='sub_b'
          onClick={() => {
            let obj = {'name' : name,'age' : age,'email' : email};
            if(name!='' && age !='' && email!= '') setUser(prev => [...prev, obj]);
            setName('');
            setAge('');
            setEmail('');
          }}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default add_U
