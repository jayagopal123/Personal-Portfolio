import React from "react";
import { motion } from "framer-motion";
import { userData } from "../data";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* Background Glows */}
      <div className="glow-circle glow-1"></div>
      <div className="glow-circle glow-2"></div>

      <div className="hero-content">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hero-subtitle"
        >
          HELLO, I AM
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="hero-title"
        >
          <span className="gradient-text">{userData.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="hero-desc"
        >
          {userData.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="hero-buttons"
        >
          <a href="#projects" className="btn btn-primary">
            View Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
