import { useState } from "react";

const Contact = () => {
  const [btnText, setBtnText] = useState("Send Message");
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = () => {
    setDisabled(true);
    setBtnText("Sending...");

    setTimeout(() => {
      setBtnText("Message Sent ✓");
      alert(" Your message has been sent !");

      setTimeout(() => {
        setBtnText("Send Message");
        setDisabled(false);

        // Clear inputs
        document.querySelectorAll(".contact-box input").forEach(input => {
          input.value = "";
        });
      }, 100);

    }, 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <h1 className="section-title">Let's talk 😊</h1>

      <div className="social-box">
        <p>📞 +91 7363842937</p>
        <p> Official gmail: prakashagam7557@gmail.com</p>
      </div>

      <div className="contact-box">
        <p>Full Name</p>
        <input placeholder="Your Full name" />

        <p>Email Address</p>
        <input placeholder="Your Email" />

        <p>Your Message</p>
        <input placeholder="Share your thoughts..." />

        <button onClick={handleSubmit} disabled={disabled}>
          {btnText}
        </button>
      </div>
    </section>
  );
};

export default Contact;



