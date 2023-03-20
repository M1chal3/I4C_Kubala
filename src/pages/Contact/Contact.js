import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import "./Contact_style.css";
import Menu from "../../components/Menu";
import "./style_conc.css";

const ContactUs = () => {
  const form = useRef();

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
          console.log(result.text);
          alert("Email byl zaslán!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail}>
        <h1 id="main_desc">Form</h1>
        <hr></hr>

        <label>Your name</label>
        <input id="name" type="text" name="user_name" />

        <br />

        <label>Your phone</label>
        <input
          id="name"
          placeholder="e.g 726 626 325"
          type="number"
          name="phone"
        />
        <br></br>
        <label>Your email</label>
        <input id="email" type="email" name="user_email" />

        <br />

        <label>Message</label>
        <br></br>
        <textarea id="message" name="message" />

        <br />

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactUs;
