import shoesItem from "../../assets/image-product-1.jpg";
import shoesMiniItem from "../../assets/image-product-1-thumbnail.jpg";
import iconMinus from "../../assets/icon-minus.svg";
import iconPlus from "../../assets/icon-plus.svg";
import card from "../../assets/white-card.svg";

import shoesFirst from "../../assets/image-product-1.jpg";
import shoesSecond from "../../assets/image-product-2.jpg";
import shoesThird from "../../assets/image-product-3.jpg";
import shoesFourth from "../../assets/image-product-4.jpg";

import styles from "../Product/styles.module.css";
import { useState } from "react";

export function Product({ updateQuantityItem}) {

  const [quantityItem, setQuantityItem] = useState(0);
  const [activeImage, setActiveImage] = useState(shoesFirst);

  function removeItem() {
    if (quantityItem > 0) {
      setQuantityItem(quantityItem - 1);
    }
  }

  function handleImageClick(e) {
    const imagemAdress = e.target.src;
    setActiveImage(imagemAdress);
  }

  
  function addToCart() {
    setQuantityItem(quantityItem);
    updateQuantityItem(quantityItem );
  }

  return (
    <div className={styles.wrapperProduct}>
      <div className={styles.productImage}>
        <div className={styles.activeImage}>
          <img src={activeImage} />
        </div>

        <div className={styles.wrapperMinImage}>
          <img src={shoesFirst} onClick={handleImageClick} />
          <img src={shoesSecond} onClick={handleImageClick} />
          <img src={shoesThird} onClick={handleImageClick} />
          <img src={shoesFourth} onClick={handleImageClick} />
        </div>
      </div>

      <div className={styles.productInfo}>
        <span className={styles.companyTitle}>Sneaker Company</span>

        <h3 className={styles.productTitle}>Fall Limited Edition Sneakers</h3>

        <p className={styles.productDescription}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>

        <div className={styles.priceContainer}>
          <div className={styles.pricePercentContainer}>
            <span>$125.00</span>
            <span>50%</span>
          </div>

          <span>$250.00</span>
        </div>

        <div className={styles.wrapperButtons}>
          <div className={styles.quantityItemContainer}>
            <button onClick={removeItem}>
              <img src={iconMinus} />
            </button>
            <span className={styles.quantityItemCard}>{quantityItem}</span>

            <button
              onClick={() =>
                setQuantityItem((quantityItem) => quantityItem + 1)
              }
            >
              <img src={iconPlus} />
            </button>
          </div>
          <button className={styles.addButton} onClick={addToCart}>
            <img src={card} />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
