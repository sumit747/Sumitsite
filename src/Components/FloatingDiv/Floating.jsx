import React from 'react'
import './Floating.css'

const Floating = ({txt1,txt2,txt3,txt4}) => {
  return (
    <div className="Floating">
        <span>
            {txt1}
            <br />
            {txt2}
        </span>
        {/* <span>
          {txt3}
          <br/>
          {txt4}
        </span> */}
    </div>
  )
}

export default Floating
