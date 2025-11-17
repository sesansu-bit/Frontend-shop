import styles from "./eachmen.module.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagitemAction } from "./bag.js";
import { wishlistitemAction } from "./wishlist.js";


const Eachmen = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((state) => state.bagitem); // cart IDs
  const wishlistItems = useSelector((state) => state.wishlistitem); // wishlist IDs

const elementFound = bagItems.some((el) => el.id === item.id);
const elementFound2 = wishlistItems.some((el) => el.id === item.id);


  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => setHovered(true);
  const handleMouseOut = () => setHovered(false);

 const handleAddToBag = async () => {
  try {
    const res = await fetch("https://backend-sypreen-shop.onrender.com/bagstore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: String(item.id) }),
      credentials: "include",
    });

    const data = await res.json();

    if (data.success) {
      // already exists
      if (data.isDuplicate) {
        return;
      }

      // single full product object
      const newProduct = data.item;

      //  industry-way: push to Redux
      dispatch(bagitemAction.addToCart(newProduct));
    }

  } catch (err) {
    console.error("Add to cart error:", err);
  }
};




const handleRemove = async () => {
  try {
    const res = await fetch("https://backend-sypreen-shop.onrender.com/bagremove", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: String(item.id) }),
      credentials: "include",
    });

    const data = await res.json();

    if (data.success) {
      dispatch(bagitemAction.removeFromCart(item.id));
    }

  } catch (err) {
    console.error("Remove from cart error:", err);
  }
};


const handleAddToWishlist = async () => {
  try {
    const res = await fetch("https://backend-sypreen-shop.onrender.com/wishliststore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: item.id }),
      credentials: "include",
    });

    const data = await res.json();

    if (data.success) {
      if (data.isDuplicate) {
        return;
      }
      const newProduct = data.item;

      // ✅ Dispatch only now
      dispatch(wishlistitemAction.addToWishlist(newProduct));
    }
  } catch (err) {
    console.error("Add to wishlist error:", err);
  }
};


  return (
    <div
      className={styles["eachcontainer"]}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={item.image} alt={item.item_name} />

      {hovered && (
        <div className={styles["wishlistcover"]}>
          {elementFound2 ? (
            <div className={styles["wishlist"]}>
              <div className={styles["textremove"]} >
                Added
              </div>
              <div className={styles["h"]}>
                <FaHeart className={styles["hicon"]}  />
              </div>
            </div>
          ) : (
            <div className={styles["wishlist"]}>
              <div className={styles["text"]} onClick={handleAddToWishlist}>
                Wishlist
              </div>
              <div className={styles["h"]}>
                <FaRegHeart className={styles["hicon"]} onClick={handleAddToWishlist} />
              </div>
            </div>
          )}
        </div>
      )}

      <div className={styles["productrating"]}>
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>

      <div className={styles["detailed"]}>
        <div className={styles["companyname"]}>{item.company}</div>
        <div className={styles["productname"]}>{item.item_name}</div>
        <div className={styles["price"]}>
          <span className={styles["ongoingprice"]}>Rs.{item.current_price}</span>
          <span className={styles["originalprice"]}>Rs.{item.original_price}</span>
          <span className={styles["discount"]}>({item.discount_percentage} off)</span>
        </div>

        {elementFound ? (
          <div className={styles["remove"]} onClick={handleRemove}>
            Remove item
          </div>
        ) : (
          <div className={styles["addtocart"]} onClick={handleAddToBag}>
            Add to Cart
          </div>
        )}
      </div>
    </div>
  );
};

export default Eachmen;
