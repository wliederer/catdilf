import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
// import { BsGithub, BsInstagram } from "react-icons/bs";
// import { FaLinkedin } from "react-icons/fa";
import "./index.css";
// import Stickers from "../stickers";
// import Art from "../art";
// import axios from "axios";
// import StripeContainer from "../stripe/StripContainer";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
// const API_URL = process.env.REACT_APP_API_URL;
// const TOKEN = process.env.REACT_APP_TOKEN;

const About = () => {
  const form = useRef();
  const [response, setResponse] = useState("");
  // const [art, setArt] = useState(null);

  // useEffect(() => {
  //   const getArt = async () =>
  //     await axios
  //       .get(`${API_URL}/art`, { params: { token: TOKEN } })
  //       .then((data) => {
  //         setArt(data.data);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });

  //   getArt();
  // }, []);

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
          {/* <BsGithub /> */}
          <div>Checkout my github to see what I've been up to!</div>
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/simplybilliam/?hl=en"
          className="links"
        >
          {/* <BsInstagram /> */}
          <div>Follow me on instagram 🤷 </div>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/william-liederer-a76a5568/"
          className="links"
        >
          {/* <FaLinkedin /> */}
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
      {/* <Stickers art={art} /> */}
      {/* <Art art={art} /> */}
      {/* <StripeContainer /> */}
    </div>
  );
};

export default About;
