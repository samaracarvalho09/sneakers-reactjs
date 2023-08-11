import { Children, createContext, useEffect, useState } from "react";


export const CartContext = createContext({cart: [], addProduct: () => {}, removeProduct: () => {}});

export function CartContextProvider({children}) {

  const [cartItems, setCartItems] = useState([]);

  function handleAdd(product) {
    setCartItems([...cartItems, product])
  }

  function handleRemove(id) {
    filteredItem = cartItems.filter((item) => item.id !== id)
  }

  useEffect(() => {
    // console.log('====================================');
    // console.log(cartItems);
    // console.log('====================================');
  }, [cartItems])

  return(
    <CartContext.Provider value={{cart: cartItems, addProduct: handleAdd, removeProduct: handleRemove}}>
      {children}
    </CartContext.Provider>
  )
}