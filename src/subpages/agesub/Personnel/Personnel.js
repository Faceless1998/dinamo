import React from "react";
import styles from "./personnel.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const Personnel = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>პერსონალი</title>
        </Helmet>
        <div className={styles.container}> Personnel</div>
      </HelmetProvider>
    </>
  );
};
