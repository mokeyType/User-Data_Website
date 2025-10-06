import React from 'react'
import './Person.css'
import P1 from '/src/assets/pose_34.png'
import P2 from '/src/assets/pose_28.png'
const Person = ({currentPage}) => {
  if(currentPage === 'home'){
    return (
    <img src={P1} alt="" className='P1' />
  );
  }
  else if(currentPage === 'About_us'){
    return (
      <img src={P2} alt="logo" className='P2' />
    );
  }
}

export default Person
