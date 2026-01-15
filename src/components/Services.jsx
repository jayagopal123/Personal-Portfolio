import React from "react";
import { motion } from "framer-motion";
import { services } from "../data";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="services-header"
        >
          <h2 className="section-title">My Services</h2>
          <p className="services-subtitle">What I can do for you</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="service-card glass"
            >
              <h3 className="service-title gradient-text">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
