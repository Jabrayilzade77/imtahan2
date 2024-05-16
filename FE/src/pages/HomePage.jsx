import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/MainProvider";
import { WishListContext } from "../context/WishListProvider";

function HomePage() {
  const [products, setProducts] = useState([]);
  const { addBasket, isExitsBasket,removeBasket,decBasket,getCountFromBasket } = useContext(MainContext);
  const {addWishList,isExitsWishList } = useContext(WishListContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/myapp/");
    const data = await res.json();
    setProducts(data);
  }

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((x) => (
          <div
            key={x._id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <div onClick={()=>addWishList(x)}>{isExitsWishList(x) ? <i className="fa-solid fa-heart"></i>: 
            <i className="fa-regular fa-heart"></i> }</div>
            <div className="title">{x.title}</div>
            <div className="price">{x.price} $</div>
            {isExitsBasket(x) ? (
              <>
              <div>count : {getCountFromBasket(x)}</div>
                <button onClick={() => addBasket(x)}>+</button>
                <button onClick={() => decBasket(x)}>-</button>
                <button onClick={() => removeBasket(x)}>X</button>
              </>
            ) : (
             <>
              <button onClick={() => addBasket(x)}>add basket</button>
             </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
