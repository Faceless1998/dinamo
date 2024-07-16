import React from "react";
import styles from "./Dynamo.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const Dynamo = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>დინამო</title>
        </Helmet>
        <div className={styles.container}> Dynamo</div>
        <div>
          
        </div>
      </HelmetProvider>
    </>
  );
};
