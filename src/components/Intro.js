import React from 'react'
import './Intro.css'
import btnImg from '../assets/hireme.png'
import reactLogo from '../assets/react.svg'
import {Link} from 'react-scroll'



 function Intro() {
  return (
    <section id ="intro">
            <div className='introContent'>
             <span className="hello">Hey,</span>
             
             <span className='introText'> I'm
              <span className='introName'> Barkha</span>
                <br />
                Web Developer
                </span>
                 
            
            <p className='introPara'>
            I am a skilled web developer with experience in creating 
              <br/>
            visually appealing and user friendly website"
            </p>
            <Link to="">
            <button className='btn2'>
                <img src={btnImg} alt='Img' className='btnImg2'/>Hire Me</button>
            
            </Link>
            </div>

            <img src={reactLogo} className="logo2" alt="React Logo" />
    </section>
  )
}
export default Intro