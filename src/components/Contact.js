import React from 'react'
import { useRef } from 'react'
import  './Contact.css'
import LinkedIn from '../assets/linkedin.svg'
import Github from '../assets/github.svg'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z9yvoy5', 'template_0letyns', form.current, {
        publicKey: 'QjkwiNvoVK3W1u-PD',
      })
      .then(
        () => {
        console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
<section id="contact">
    <div id ="social">
        <h1 className='socialTitle'>Socials</h1>
         <p className='socialDesc'>Here you can connect with me on my social media</p>
         <div className='socialImgs'></div>
         <a href="https://www.linkedin.com/in/barkha-vijay-618704261/"><img src={LinkedIn}alt="LinkedIn"className='socialImg'/></a>

         <a href="#"><img src={ Github}alt="Github"className='socialImg'/></a>

         <a href="https://www.instagram.com/_barkhavijay_/?hl=en"><img src={Instagram}alt="Instagram"className='socialImg'/></a>

         <a href="https://www.facebook.com/profile.php?id=61564431690005"><img src={Facebook}alt="Facebook"className='socialImg'/></a>

</div>

<div id='contactPage'>
    <h1 className='contactTitle'>Contact</h1>
    <span className='contactDesc'>Feel free to contact me</span>

    <form className='contactForm'ref={form} onSubmit={sendEmail}>
     <input type='text'className="name"placeholder='Your Name'name="from_name"required/>
     <input type='email'className="email"placeholder='Your Email'name="your_email"required/>
     <textarea className='msg'rows='5' placeholder='Your Message'name="message"required></textarea>
     <button type="submit" value="Send" className='submitBtn'onClick={()=>{alert("your Form is submitted.")}}>Submit</button>
     </form>
</div>

    </section>
  )
}

export default Contact