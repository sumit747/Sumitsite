import React from 'react'
import "./Contact.css"

const Contact = () => {

  return (
    
    <div className='contact-form'>
        <div className="c-left">
            <div className="awesome">
                <span>Get in Touch</span>
                <span>Contact Me</span>
            </div>
        </div>

        <div className="c-right">
            <form>
                <h1><u>Please Contact Here </u></h1>
                <input type="text" name='User_name' className='user'placeholder='Please Enter Name' />
                <input type="text" name='email' className='user'placeholder='Please Enter  Email' />
                <textarea name="message" className='user'cols="30" rows="10" placeholder='Message'/>
                <input type="submit" value='Send' className='button' />
                <div className="blur c-blur1"
                style={{background: "var(--purple)"}}></div>

            </form>
        </div>
      
    </div>
  )
}

export default Contact
