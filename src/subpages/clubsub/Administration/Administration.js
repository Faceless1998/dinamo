import React from "react";
import styles from "./Administration.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const Administration = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>ადმინისტრაცია</title>
        </Helmet>
        <div className={styles.container}> Administration</div>
      </HelmetProvider>
    </>
  );
};
