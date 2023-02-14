import React from 'react'
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import FaceBook from '@iconscout/react-unicons/icons/uil-facebook'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
  return (
   <div className="footer">
    <div className="f-contact">
      <span>Sumit342243@gamil.com</span>
      <div className="f-icons">
        <Insta color='white' size='5rem' />
        <FaceBook color='white' size='5rem' />
        <Linkedin color='white' size='5rem' />
      </div>
    </div>
   </div>
  )
}

export default Footer
