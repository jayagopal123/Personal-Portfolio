import React from "react";
import { motion } from "framer-motion";
import { userData } from "../data";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thanks for messaging! (This is a demo form)");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">Let's work together</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="contact-info glass"
          >
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out for collaborations or just a friendly
              hello.
            </p>

            <div className="contact-links">
              <a
                href={userData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaLinkedin className="contact-icon" /> LinkedIn
              </a>
              <a
                href={userData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaGithub className="contact-icon" /> GitHub
              </a>
              <a href={userData.social.email} className="contact-item">
                <FaEnvelope className="contact-icon" /> Email Me
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="contact-form glass"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
