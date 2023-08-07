import styles from "../Header/styles.module.css";
import React, { useState } from "react";

import card from "../../assets/card.svg";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/image-avatar.png";

export default function Header({ quantityItem }) {
  const [activeItem, setActiveItem] = useState("Women");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={styles.wrapperHeader}>
      <div className={styles.wrapperLogoMenuItems}>
        <img src={logo} />
        <ul className={styles.menuItems}>
          <li
            className={activeItem === "Collections" ? styles.active : ""}
            onClick={() => handleItemClick("Collections")}
          >
            Collections
          </li>
          <li
            className={activeItem === "Men" ? styles.active : ""}
            onClick={() => handleItemClick("Men")}
          >
            Men
          </li>
          <li
            className={activeItem === "Women" ? styles.active : ""}
            onClick={() => handleItemClick("Women")}
          >
            Women
          </li>
          <li
            className={activeItem === "About" ? styles.active : ""}
            onClick={() => handleItemClick("About")}
          >
            About
          </li>
          <li
            className={activeItem === "Contact" ? styles.active : ""}
            onClick={() => handleItemClick("Contact")}
          >
            Contact
          </li>
        </ul>
      </div>

      <div className={styles.wrapperAvatarCard}>
        <div className={styles.wrapperCard}>
          <span className={styles.quantityItemAddCard}>{quantityItem}</span>
          <img className={styles.iconCard} src={card} alt="ícone card" />
        </div>

        <div className={styles.avatar}>
          <img src={avatar} />
        </div>
      </div>

      {/* <div>
        <span>Card</span>
        <div>
          <img src="" />
          <span></span>
        </div>
      </div> */}
    </div>
  );
}
