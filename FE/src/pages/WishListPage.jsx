import React, { useContext } from "react";
import { WishListContext } from "../context/WishListProvider";

function WishListPage() {
  const { wishList, addWishList, isExitsWishList } =
    useContext(WishListContext);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {wishList.map((x) => (
          <div
            key={x._id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <div onClick={() => addWishList(x)}>
              {" "}
              <i class="fa-solid fa-heart"></i>
            </div>
            <div className="title">{x.title}</div>
            <div className="price">{x.price} $</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WishListPage;
