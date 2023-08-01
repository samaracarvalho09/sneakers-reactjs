
// import styles from "../Header/styles.module.css";
import Header from "../Header";
import styles from "../Home/styles.module.css";
import React from "react";
import { Product } from "../Product";


export function Home() {

  return (
   <div className={styles.homeStyle}>
     <Header />
     <Product />
   </div>
  )
}