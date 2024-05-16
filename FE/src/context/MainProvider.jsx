import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const MainContext = createContext();

function MainProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  function addBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    const element = basket[index];

    if (index != -1) {
      element.count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  }

  function decBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    const element = basket[index];

    if (element.count > 1) {
      element.count--;
      setBasket([...basket]);
    }
  }

  function removeBasket(item) {
    return setBasket(basket.filter((x) => x._id !== item._id));
  }

  function getTotal() {
    return basket.reduce(
      (prev, intial) => prev + intial.count * intial.price,
      0
    );
  }

  function isExitsBasket(item) {
    return basket.find((x) => x._id === item._id);
  }

  function getCountFromBasket(item) {
    return basket.find((x) => x._id === item._id).count;
  }

  return (
    <MainContext.Provider
      value={{
        basket,
        addBasket,
        decBasket,
        removeBasket,
        getTotal,
        isExitsBasket,
        getCountFromBasket,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
