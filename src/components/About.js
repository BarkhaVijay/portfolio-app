import React from 'react'
import './About.css'
import Html from '../assets/HTML5_Badge.svg'
import Css from '../assets/css-3.svg'
import JavaScript from '../assets/javascript.svg'
import Bootstrap from '../assets/bootstrap.png'
import CPPlogo from '../assets/cpp.png'

 function About() {
  return (
    
       <section id='about'>
        <span className='aboutTitle'>What I Know</span>
        <span className='aboutDesc'>I am skilled and passionate web designer with experience in creating visually appealing and user-friendly website. I have a strong understanding of design and a keen eye for detail.I am proficient in HTML,CSS and JavaScript. </span>
        
     <div className='aboutBars'>


    <div className='aboutBar'>
    <img src={Html} alt=" "className='aboutBarImg'/>
    <div className='aboutBarText'>
    <h2>HTML</h2>
    <p>Hypertext Markup Language </p>

        </div>
       </div>
    
      {/* for Css */}

        <div className='aboutBar'>
        <img src={Css} alt=" "className='aboutBarImg'/>
        <div className='aboutBarText'>
        <h2>CSS</h2>
        <p>Cascading Style Sheets </p>
     </div>
    </div>
   
{/* for javaScript */}
   
        <div className='aboutBar'>
        <img src={JavaScript} alt=" "className='aboutBarImg'/>
        <div className='aboutBarText'>
        <h2>JS</h2>
        <p>javascript </p>
     </div>
    </div>
    

 
        <div className='aboutBar'>
        <img src={Bootstrap} alt=" "className='aboutBarImg'/>
        <div className='aboutBarText'>
        <h2>Bootstrap</h2>
        <p>bootstrap </p>
     </div>
    </div>
   


    
        <div className='aboutBar'>
        <img src={CPPlogo} alt=" "className='aboutBarImg'/>
        <div className='aboutBarText'>
        <h2>CPP</h2>
        <p>C Plus Plus</p>
     </div>
    </div>

    
    </div>

       </section> 
    
  );
}
export default About