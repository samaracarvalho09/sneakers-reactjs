
// import styles from "../Header/styles.module.css";
import Header from "../../components/Header";
import styles from "../Home/styles.module.css";
import React, { useState } from 'react';




export function Home() {
  // const [quantityItem, setQuantityItem] = useState(0);

  // const updateQuantityItem = (newQuantity) => {
  //   setQuantityItem(newQuantity);
  // };
  return (
   <div className={styles.homeStyle}>
    <Header />
     <Header quantityCart={quantityCart}/>
     <Product updateQuantityItem={updateQuantityItem} />
     <ProductList />


     <h3>AQUI É A HOME HIHI</h3>
   </div>
  )
}