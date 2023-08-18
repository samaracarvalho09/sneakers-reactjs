import styles from "./styles.module.css";
import { useContext, useEffect, useState } from "react";
import { ShoesProvider } from "../../provider";
import iconMinus from "../../assets/icon-minus.svg";
import iconPlus from "../../assets/icon-plus.svg";
import card from "../../assets/white-card.svg";
import shoesFirst from "../../assets/image-product-1.jpg";
import shoesSecond from "../../assets/image-product-2.jpg";
import shoesThird from "../../assets/image-product-3.jpg";
import shoesFourth from "../../assets/image-product-4.jpg";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/Cart";
import { productsStore } from "../../Store/Products";

export function ProductPage(props) {
  const { addProduct, removeProduct, cart } = useContext(CartContext);
  const [activeImage, setActiveImage] = useState(shoesFirst);
  const [product, setProduct] = useState(null);
  const { productCount, inc, dec } = productsStore();
  // captura o id da url
  const { id } = useParams();
  //  a função compara o id do ShoesProvider com o id da rota
  const initialQuantity = storedQuantity ? parseInt(storedQuantity) : 0;
  // a função é chamada quando a tela é renderizada (useEffect)

  const [quantityItem, setQuantityItem] = useState(0);
 
  //atualiza a quantidade de acordo com o localStorage  
  function quantityUpdate() {
    newQuantity = productCount[product?.id] || 0;
    setQuantityItem(newQuantity);

    localStorage.setItem(`quantity_${product?.id}`, JSON.stringify(newQuantity))
  }


<<<<<<< HEAD
  // function getProduct() {
  //   const foundProduct = ShoesProvider.find((item) => {
  //     return item.id == id;
  //   });

  //   setProduct(foundProduct);

  //   // Recupera a quantidade do localStorage para inserir no estado inicial

  //   const storedQuantity = localStorage.getItem(`quantity_${product?.id}`)
  // }


  // function handleImageClick(e) {
  //   const imagemAdress = e.target.src;
  //   setActiveImage(imagemAdress);
  // }
=======
  function getProduct() {
    const foundProduct = ShoesProvider.find((item) => {
      return item.id == id;
    });

    setProduct(foundProduct);

    // Recupera a quantidade do localStorage para inserir no estado inicial

    const storedQuantity = localStorage.getItem(`quantity_${product?.id}`)
  }


  function handleImageClick(e) {
    const imagemAdress = e.target.src;
    setActiveImage(imagemAdress);
  }
>>>>>>> d72bce2682a43fc809994e20fdaeedd41c28e46d

  function addToCart() {
    addProduct(product);
  }

  useEffect(() => {
    getProduct();
  }, []);


  useEffect(()=>{

console.log(productCount)

},[productCount])



<<<<<<< HEAD
// const storedQuantity = localStorage.setItem("teste", JSON.stringify(productCount))

=======
const storedQuantity = localStorage.setItem("teste", JSON.stringify(productCount))
const ini
>>>>>>> d72bce2682a43fc809994e20fdaeedd41c28e46d

(() => {

})
  return (
    <>
      <Header />
      {/* <button
        onClick={() => {
          addProduct([Math.random()]);
        }}
      >
        CONTEXTO
      </button> */}
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
          <h3 className={styles.productTitle}>{product?.name}</h3>
          <p className={styles.productDescription}>{product?.description}</p>
          <div className={styles.priceContainer}>
            <div className={styles.pricePercentContainer}>
              <span>$ {product?.price}</span>
              <span>50%</span>
            </div>
            <span>$250.00</span>
          </div>
          <div className={styles.wrapperButtons}>
            <div className={styles.quantityItemContainer}>
              <button onClick={() => dec(product.id)}>
                <img src={iconMinus} />
              </button>
              <span className={styles.quantityItemCard}>{quantityCart}</span>
              <button onClick={() => inc(product.id)}>
                <img src={iconPlus} />
              </button>
            </div>
            <button className={styles.addButton} onClick={quantityUpdate}>
              <img src={card} />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
