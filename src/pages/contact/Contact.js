import React from "react";
import styles from "./Contact.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const Contact = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>კონტაქტი</title>
        </Helmet>
      </HelmetProvider>
      <div className={styles.contactContainer}>
        <h2>Contact Us</h2>
        <div className={styles.contactContent}>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <label>Address:</label>
              <p>123 Football St, Sport City, Country</p>
            </div>
            <div className={styles.contactItem}>
              <label>Email:</label>
              <p>info@footballteam.com</p>
            </div>
            <div className={styles.contactItem}>
              <label>Website:</label>
              <p>
                <a
                  href="https://www.footballteam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.footballteam.com
                </a>
              </p>
            </div>
            <div className={styles.contactItem}>
              <label>Phone:</label>
              <p>+123-456-7890</p>
            </div>
            <div className={styles.contactItem}>
              <label>Capacity:</label>
              <p>50,000</p>
            </div>
            <div className={styles.contactItem}>
              <label>Founded:</label>
              <p>1900</p>
            </div>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.146989223772!2d144.96328031530703!3d-37.8142179797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43d63c5d79%3A0x5045675218ce6e0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1612784265159!5m2!1sen!2sau"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
