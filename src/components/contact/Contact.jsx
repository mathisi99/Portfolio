import React, { useRef } from 'react'
import "./contact.css"
import ContactType from './ContactType'
import {HiOutlineMail} from 'react-icons/hi';
import {FaFacebookMessenger} from 'react-icons/fa';
import {SiZalo} from 'react-icons/si';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICEID, 
        process.env.REACT_APP_EMAILJS_TEMPLATEID, 
        form.current, 
        process.env.REACT_APP_EMAILJS_PUBLICKEY
      ).then((result) => {
        console.log(result.text);
      }, (err) => {
        console.log(err.text);
      })
    
    e.target.reset();
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <ContactType type={"Email"} link={"camphu0296@gmail.com"} sendto={"mailto:chriscoyier@gmail.com?subject=Important!&body=Hi."} message={"Send A Message"} icon={HiOutlineMail} />
          <ContactType type={"Messager"} link={"camphu.vuong"} sendto={"https://shorturl.at/kwxyV"} message={"Send A Message"} icon={FaFacebookMessenger} />
          <ContactType type={"Zalo"} link={"Phone number"} sendto={"https://shorturl.ae/gzl4P"} message={"Start A Talk"} icon={SiZalo} />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" placeholder='Your Message' cols="30" rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact