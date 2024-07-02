import React from "react";
import styles from "./Fan.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const Fan = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>გულშემატკივარი</title>
        </Helmet>
        <div className={styles.container}> Fan</div>
      </HelmetProvider>
    </>
  );
};
