import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import "./index.css";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const About = () => {
  const form = useRef();
  const [response, setResponse] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        setResponse(result.text);
        form.current.reset();
      },
      (error) => {
        setResponse(error.text);
      }
    );
  };
  return (
    <div className="about">
      <div>
        <a href="https://github.com/wliederer" className="links">
          <BsGithub />
          <div>Checkout my github to see what I've been up to!</div>
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/simplybilliam/?hl=en"
          className="links"
        >
          <BsInstagram />
          <div>Follow me on instagram 🤷 </div>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/william-liederer-a76a5568/"
          className="links"
        >
          <FaLinkedin />
          <div>LinkedIn</div>
        </a>
      </div>
      <div className="contact">
        <div>Contact: liedererbill@gmail.com</div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="form">
        <label>Name</label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          style={{ backgroundColor: "#F5F5F5" }}
          required={true}
        />
        <label>Email</label>
        <input
          type="email"
          name="reply_to"
          id="reply_to"
          style={{ backgroundColor: "#F5F5F5" }}
          required={true}
        />
        <label>Message</label>
        <textarea name="message" id="message" required={true} />
        <input className="button" type="submit" value="Send" />
      </form>
      <div className="response">{response ? `response ${response}` : null}</div>
    </div>
  );
};

export default About;
