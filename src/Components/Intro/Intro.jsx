import React from 'react'
import './Intro.css'
import Linkedin from '../../Img/Linkedin.png';
import GitHub from '../../Img/GitHub.png';
import sumit from '../../Img/sumit.jpg'
import Floating from '../FloatingDiv/Floating';
const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I am </span>
                    <span> Sumit Chaudhary</span>
                    <span> Frontend Developer </span>
                    <span>
                        My Skills = Reactjs,
                        JavaScript, HTML5, CSS,
                        Git and GitHub</span>
                </div>
                <button className="button i-button">
                    Hire Me
                </button>
                <div className="i-icons">
                    <img src={Linkedin} alt="" />
                    <a href='https://github.com/sumit747'><img src={GitHub} alt="" /></a>
                </div>
            </div>

            <div className="i-right">
                <div style={{top:'5rem', left:"15%"}}>
                    <img src={sumit} alt="profile" className='responsive' />
                </div>
                <div style={{ height:'auto', left: '1%' }} >
                    <Floating txt1='Web' txt2='Developer' />
                </div>
                <div style={{ top: '31rem', left: "1%" }}>
                    <Floating txt1='Best Design' txt2='Award' />
                </div>
                {/* <blur div> */}

                <div className='blur'
                    style={{ background: "rgb(237 219 152)" }}></div>
                <div className='blur'
                    style={{
                        background: '#C1F5FF',
                        top: '27rem',
                        width: '25rem',
                        height: '30px',
                        left: '-9rem'
                    }}></div>
            </div>
        </div>
    )
}

export default Intro
