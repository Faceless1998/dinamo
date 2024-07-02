import React from "react";
import styles from "./PressService.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const PressService = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>პრეს სამსახური</title>
        </Helmet>
        <div className={styles.container}> PressService</div>
      </HelmetProvider>
    </>
  );
};
