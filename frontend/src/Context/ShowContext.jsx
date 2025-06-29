import React, { createContext, useState } from "react";
export const ShopContext = createContext(null);
import all_product from "../assets/all_product";
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index] = 0;
  } return cart;
}

  const ShopContextProvider = (props) => {
    const [cartItems, setCartItem] = useState(getDefaultCart());
    
   
    const addTocart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1})
        )}
    const removeFromcart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1})
        )
    }
    const contextValue = { all_product, cartItems,addTocart,removeFromcart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
export default ShopContextProvider;
