import React from "react";
import { motion } from "framer-motion";
import { userData } from "../data";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-image-wrapper"
        >
          {/* Placeholder for user image if they have one, efficiently handled with CSS */}
          <div className="about-img-placeholder">
            <span>{userData.name.charAt(0)}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <h2 className="section-title">About Me</h2>
          <h3 className="about-role">
            I'm a <span className="gradient-text">{userData.title}</span>
          </h3>
          <p className="about-desc">{userData.bio}</p>
          <p className="about-desc">
            I specialize in building full-stack applications using MongoDB,
            Express, React, and Node.js. My journey into tech was driven by
            curiosity and a passion for solving problems through code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
