import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [showDialog, setShowDialog] = useState(false); // track dialog visibility

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9lt3dhq",
        "template_kyq04m7",
        form.current,
        "ALTjG46RvUWHU8LT9"
      )
      .then(
        () => {
          setShowDialog(true); // show custom dialog
          e.target.reset();    // clear form
        },
        (error) => {
          console.error(error.text);
          alert("Oops! Something went wrong."); // keep default alert for error
        }
      );
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2 className="contact-heading">Contact Me</h2>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      {/* Custom dialog */}
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h3>Message Sent!</h3>
            <p>Thank you for contacting me. I will get back to you soon.</p>
            <button onClick={closeDialog}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
