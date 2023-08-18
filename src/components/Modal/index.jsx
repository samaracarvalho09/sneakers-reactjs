import React, { useState } from "react";

<<<<<<< HEAD
// import styles from "../Modal/styles.css";
=======
import styles from "../Modal/styles.css";
>>>>>>> d72bce2682a43fc809994e20fdaeedd41c28e46d
import trash from "../../assets/icon-delete.svg";
// import productAddCart from '../../assets/imagem-product-1-thumbnail.jpg'
// import imageProduct from '../../assets/'
import shoes from "../../assets/image-product-1-thumbnail.jpg";
export const Modal = ({ isOpen, toggleModal }) => {
  // const modalClassName = isOpen ? 'modal modal-open' : 'modal modal-closed';

  if (!isOpen) {
    return null;
  }

  return (
    <div className={`${isOpen ? "wrapperModal modal-open" : "wrapperModal"}`}>
      
        <span className="titleModal">Cart</span>
        <div className="wrapperInfoProduct">
          <div className="descriptionPriceProduct">
            <div className="productImage">
              <img src={shoes} alt="" />
            </div>

            <div className="informationProduct">
              <span>Fall Limited Edition Sneakers</span>
              <div className="priceContainer">
                <span>$600</span>
                <span>x</span>
                <span>2</span>
                <span>
                  <strong>$1200.00</strong>
                </span>
              </div>
            </div>
            <button>
              <img className="deleteIcon" src={trash} alt="" />
            </button>
          </div>
        </div>
        <button className="checkoutButton">Checkout</button>
    
    </div>
  );
};
