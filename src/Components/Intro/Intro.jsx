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
                    <span> Frontend developer and
                        my Skill is Reactjs,
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
                <div style={{ top: '-4%', left: '22%' }}>
                    <img src={sumit} alt="" width={400} />
                </div>
                <div>
                    <Floating txt1='Web' txt2='Developer' />
                </div>
                {/* <div>
                    <Floating txt3='Best Design' txt4='Award' />
                </div> */}
                {/* blur divs */}
                <div className='blur' style={{ background: "rgb(237 219 152)" }}></div>
                <div className='blur'
                style={{
                    background: '#c1f5ff',
                    top: '17rem',
                    width: '21rem',
                    height: '22px',
                    left: '-9'
                }}></div>
            </div>
        </div>
    )
}

export default Intro
