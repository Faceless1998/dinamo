import React from "react";
import styles from "./TechnicalStaff.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const TechnicalStaff = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>ტექნიკური პერსონალი</title>
        </Helmet>
        <div className={styles.container}> TechnicalStaff</div>
      </HelmetProvider>
    </>
  );
};
