import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Andrew</div>
            < Toggle />
        </div>
        
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: "none"}}>
                    <li>Home</li>
                    <li>Serive</li>
                    <li>Experience</li>
                    <li>About</li>
                </ul>
            </div>
            <button className="button">
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar
