// import React, { useState } from 'react'
// import './Navbar.css'


// const Navbar = () => {
//     const [isMobile, setMobile] = useState(false)
//     return(
//         <>
//         <nav>
//             <div>
//                 <ul id='navbar'>
//                     <li><a className="active" href="index.html">Home</a></li>
//                     <li><a href="index.html">Service</a></li>
//                     <li><a href="index.html">Blog</a></li>
//                     <li><a href="index.html">Project</a></li>
//                     <li><a href="index.html">Contact</a></li>
//                 </ul>
//             </div>
//             <div className="mobile">{isMobile ? (<i className='fas fa-times'></i>) :
//             (<i className='fas fa-bars'></i>)
//             }
//             </div>

//         </nav>
//         </>
//     );
// }

// export default Navbar;

import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
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
                    <li></li>
                    <li>Experience</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;