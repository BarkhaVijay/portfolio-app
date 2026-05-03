import React from 'react'
import './Project.css'
import Banner from '../assets/project.jpg'

function Project() {
  return (
    <section id="project">
      <h2 className='projectTitle'>My Projects</h2>
      <span className='projectDesc'>Here are my projects</span>


      <div className='project-item'>
        <div className='item-details'>
         <p className='P1'>Project-1</p>
         <p className='P2'>TeachStack:=HTML CSS and JAVA SCRIPT</p>
        </div>

    <a href='https://github.com/BarkhaVijay/multiple-images'><img src={Banner} alt='Project-1' className='projectImg'/></a>
   </div>


   <div className='project-item'>
        <div className='item-details'>
         <p className='P1'>Project-2</p>
         <p className='P2'>TeachStack:=HTML </p>
        </div>

    <a href='https://github.com/BarkhaVijay/Form'><img src={Banner} alt='Project-2' className='projectImg'/></a>
   </div>

    </section>
  )
}

export default Project
