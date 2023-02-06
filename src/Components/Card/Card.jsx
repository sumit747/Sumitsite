import React from 'react'
import './Card.css'

const Card = ({Heading, details}) => {
  return (
    <div className='card'>
        <span>{Heading}</span>
        <span>{details}</span>
        <button className="c-button">View More</button>
    </div>
  )
}

export default Card
