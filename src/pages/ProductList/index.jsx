import React from 'react'
import { ShoesProvider } from '../../provider'
import styles from '../ProductList/styles.module.css'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'

export function ProductList() {

  const products = ShoesProvider
  return (
   <>
   <Header/>
   <div className={styles.wrapperProduct}>
      {
        products.map((itemProduct) => {
          return (
            <ProductCard key={itemProduct.id} productData={itemProduct} />
          )
        })
      }
    </div>
   </>
  )
}
