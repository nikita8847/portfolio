import React from "react";
import "./Contact.css";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_side">
          <article className="contact_option">
            <CgMail className="contact_option-icon" />
            <h4>Gmail</h4>
            <h5>nikitasharma8847@gmail.com</h5>
            <a href="mailto:nikitasharma8847@gmail.com" target="_blank">
              Send a mail
            </a>
          </article>
          <article className="contact_option">
            <BsMessenger className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Nikitasharma</h5>
            <a href="" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsaap</h4>
            <h5>1234566654</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8847536815"
              target="_blank"
            >
              whatsaap me
            </a>
          </article>
        </div>
        <div className="form_side">
          <form action="">
            <input type="text" name="name" placeholder="your name" required />
            <input
              type="email"
              name="email"
              placeholder="your email"
              required
            />
            <textarea
              name="message"
              rows="8"
              placeholder="type your message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
