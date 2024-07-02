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
        <div className={styles.container}> Contact</div>
      </HelmetProvider>
    </>
  );
};
