import React from "react";
import styles from "./CorpsOfCoaches.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const CorpsOfCoaches = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>მწვრთნელთა კორპუსი</title>
        </Helmet>
        <div className={styles.container}> CorpsOfCoaches</div>
      </HelmetProvider>
    </>
  );
};
