import React from "react";
import styles from "../ProductCard/styles.module.css";

import { ShoesProvider } from "../../provider";
import { Link } from "react-router-dom";

export default function ProductCard({ productData }) {
  
  return (
    <Link to={`/product/${productData.id}`}>
      <div className={styles.product}>
        <h3>{productData.name}</h3>
        <span>{productData.description}</span>
        <span>$ {productData.price}</span>
      </div>
    </Link>
  );
}
