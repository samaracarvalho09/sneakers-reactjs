
// import styles from "../Header/styles.module.css";
import Header from "../Header";
import styles from "../Home/styles.module.css";
import React, { useState } from 'react';
import { Product } from "../Product";



export function Home() {
  const [quantityItem, setQuantityItem] = useState(0);

  const updateQuantityItem = (newQuantity) => {
    setQuantityItem(newQuantity);
  };
  return (
   <div className={styles.homeStyle}>
     <Header quantityItem={quantityItem}/>
     <Product updateQuantityItem={updateQuantityItem} />
   </div>
  )
}