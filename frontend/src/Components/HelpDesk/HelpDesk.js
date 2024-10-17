import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './HelpDesk.css';

function HelpDesk() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uwsjxf7', 'template_zxgar82', form.current, {
        publicKey: 'uTdjfkHlDZnGYQewm',
      })
      .then(
        (result) => {
          console.log(result.text);
          alert("success")
        },
        (error) => {
          console.log(error.text);
          alert("notsend")
        },
      );
  };





  return (
    <div>
      <h1>HelpDesk</h1>
      <h2>Contact Us if you need help</h2>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  )
}

export default HelpDesk
