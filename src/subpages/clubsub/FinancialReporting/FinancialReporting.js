import React from "react";
import styles from "./FinancialReporting.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const FinancialReporting = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>ფინანსური ანგარიში</title>
        </Helmet>
        <div className={styles.container}> FinancialReporting</div>
      </HelmetProvider>
    </>
  );
};
