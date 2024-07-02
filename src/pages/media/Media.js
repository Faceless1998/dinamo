import React from 'react'
import styles from "./Media.module.css"
import { Helmet, HelmetProvider } from 'react-helmet-async';
export const Media = () => {
  return (
    <>
         <HelmetProvider>
<Helmet>
        <title>მედია</title>
      </Helmet>
    <div className={styles.container}> Media</div>
    </HelmetProvider></>
  )
}
