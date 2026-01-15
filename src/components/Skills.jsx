import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data";
import "./Skills.css";

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="skills-header"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="skills-subtitle">
            Technologies I work with to build high-quality solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="skills-grid"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="skill-card glass"
              whileHover={{ scale: 1.05, translateY: -5 }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                <skill.icon />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
