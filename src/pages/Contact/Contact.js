import React, { useRef, useState } from "react";
import emailjs, { sendForm } from "@emailjs/browser";
// import "./Contact_style.css";
import Menu from "../../components/Menu";
import "../Home/style.css";
import "./style_conc.css";

import { Button } from "bootstrap";

const ContactUs = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_99nfgls",
        "template_9jvqvwa",
        form.current,
        "LNBGHzrGcOxST5YvQ"
      )
      .then(
        (result) => {
          setStatusMessage("E-mail byl úspěšně zaslán");
        },
        (error) => {
          setStatusMessage("$(error.text)Oops! něco se nezdařilo");
        }
      );
    //set space between numbers in input

    e.target.reset();
  };

  return (
    <>
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <h1 id="main_desc">Form</h1>
          <hr></hr>

          <label className="details">Your name</label>
          <input id="name" type="text" name="user_name" />

          <br />

          <label className="details">Your phone</label>
          <input
            id="name"
            placeholder="e.g 726 626 325"
            type="number"
            name="phone"
          />
          <br></br>
          <label className="details">Your email</label>
          <input id="email" type="email" name="user_email" />

          <br />

          <label className="details">Message</label>
          <br></br>
          <textarea id="message" name="message" />

          <br />

          <input type="submit" value="Send" />
        </form>
        <p id="status_message">{statusMessage}</p>
      </div>
    </>
  );
};

export default ContactUs;
