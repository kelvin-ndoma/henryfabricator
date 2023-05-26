import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ic3itj6', 'template_yk5pvc8', form.current, 'UB2YFOL9Ux2ga_0SS')
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message sent');
          setIsMessageSent(true);
          form.current.reset();
          setTimeout(() => {
            setIsMessageSent(false);
          }, 3000); // 3 seconds
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="to_name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="from_name" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        <input type="submit" value="Send" />
      </form>

      {isMessageSent && <p className="success-message">Message sent successfully!</p>}

      <div className="social-media-links">
        <p>Follow us on social media</p>
        <div className="iconss">
          <a href="https://instagram.com/henrywizw?igshid=ZDc4ODBmNjlmNQ==" className="social-link">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/waminila_h?t=pemMZ2nEpMart4vF0JZrOw&s=09" className="social-link">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100078172988819" className="social-link">
            <FaFacebook />
          </a>
        </div>

        <div className="contact-numbers">
          <a href="https://wa.me/+254796233592" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaWhatsapp /> Whatsapp: 0796233592
          </a>
          <a href="tel:+254701045459" className="contact-link">
            <FaPhone /> Call: +254701045459
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
