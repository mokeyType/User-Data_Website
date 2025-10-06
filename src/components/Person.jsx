import React from 'react'
import './Person.css'
const Person = ({currentPage}) => {
  if(currentPage === 'home'){
    return (
    <img src="src/assets/pose_34.png" alt="" className='P1' />
  );
  }
  else if(currentPage === 'About_us'){
    return (
      <img src="src/assets/pose_28.png" alt="logo" className='P2' />
    );
  }
}

export default Person
