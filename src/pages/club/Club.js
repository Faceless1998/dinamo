import React from "react";
import styles from "./Club.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const Club = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>კლუბი</title>
        </Helmet>
        <div className={styles.container}> Club</div>
      </HelmetProvider>
    </>
  );
};
