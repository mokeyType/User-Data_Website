import React from 'react'
import '/src/components/Nav.css'
const Nav = ({ setPage,setAction}) => {
  return (
    <div className="nav-bar">
        <ul className="menu">
            <li className="menu-item"onClick={() =>
            {
              setPage('home') 
              setAction(null)
            }
            }><i className="fa fa-home"></i></li>
            <li className="menu-item as" onClick={()=>{
              setPage('About_us')
              setAction(null)
              }}>About us</li>
        </ul>
    </div>
  )
}

export default Nav
