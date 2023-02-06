import React from 'react'
import './Floating.css'

const Floating = ({txt1,txt2}) => {
  return (
    <div className="Floating">
        <span>
            {txt1}
            <br />
            {txt2}
        </span>
    </div>
  )
}

export default Floating
