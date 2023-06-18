import React from 'react'
import './Services.css'
import Card from '../Card/Card'
import Resume from './Sumit React. js Resume.pdf'
const Services = () => {
  return (
    <div className="Services">
      {/* left side */}
      <div className='awesome'>
        <span>My Awesome</span>
        <span>Services</span>
        <span>This is the my Best Profile
          show On this Website</span>
        <a href={Resume} download>
          <button className="button s-button">Resume Here</button>
        </a>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{ top: '2rem', left: '100%' }}>
          <Card
            Heading={'Design'}
            details={"Web - Site using React js "}
          />
        </div>
        <div style={{ top: "12rem", left: '105%' }}>
          <Card
            Heading={"Fornt-End-Developer"}
            details={"HTML5,CSS3,Javascript, Reactjs,Bootstrap"}
          />
        </div>
        <div style={{ top: '20rem', left: '110%' }}>
          <Card
            Heading={"Skills"}
            details={"Excel,MS Office, MS word"}
          />
        </div>
      </div>
    </div>
  )
}
export default Services
