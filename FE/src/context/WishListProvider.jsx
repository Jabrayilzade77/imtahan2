WishListProvider

import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const WishListContext = createContext();

function WishListProvider({ children }) {
  const [wishList, setWishList] = useLocalStorage("wishList", []);

  function addWishList(item) {
    const index = wishList.findIndex((x) => x._id === item._id);
    const element = wishList[index];

    if (index != -1) {
      setWishList([...wishList.filter(x=>x._id !== item._id)])
    } 
    else {
      setWishList([...wishList, item]);
    }
  }

  function isExitsWishList(item) {
    return wishList.find(x=>x._id === item._id)
    
  }


  return (
    <WishListContext.Provider
      value={{ wishList, addWishList,isExitsWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
}

export default WishListProvider;
