import React from "react";
import styles from "./Structure.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const Structure = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>სტრუქტურა</title>
        </Helmet>
        <div className={styles.container}> Structure</div>
      </HelmetProvider>
    </>
  );
};
