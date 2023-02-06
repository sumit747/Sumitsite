import React from 'react'
import './Works.css'
import Cling from '../../Img/cling.png';
const Works = () => {
  return (
    <div className="works">
        <div className="awesome">
        <span>Works for All These </span>
        <span>Brands & Clients</span>
        <spane>This is the my Best Profile 
          show On this Website</spane>
          
          <button className="button s-button">Hire Me</button>
    </div>
    {/* Right side */}
    <div className="w-right">
        <div className="w-maincircle">
            <div className="w-secCircle">
                <img src={Cling} alt="" />
            </div>
        </div>
        {/* background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
    </div>
    </div>
  )
}

export default Works
