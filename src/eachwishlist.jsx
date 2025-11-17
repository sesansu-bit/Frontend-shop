import styles from "./eachwishlist.module.css";
import { useDispatch } from "react-redux";
import { bagitemAction } from "./bag.js";
import { wishlistitemAction } from "./wishlist.js";


const Eachwishlist = ({ item }) => {
  const dispatch = useDispatch();
  

const handleRemoveWish = async () => {
  try {
    const res = await fetch("https://backend-sypreen-shop.onrender.com/wishlistremove", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: item.id }),
      credentials: "include",
    });

    const data = await res.json();
    
  if (!data.success || data.isDuplicate) {
      // Backend reject → rollback
      dispatch(wishlistitemAction.removeFromWishlist(item.id));
    }
    if (data.success) {

      // remove from frontend redux instantly
      dispatch(wishlistitemAction.removeFromWishlist(item.id));

      // if user chose to add to cart also
      if (data.addedToCart) {
        dispatch(bagitemAction.addToCart(data.addedToCart)); // push
      }
    }

  } catch (err) {
    console.error("Remove from wishlist error:", err);
  }
};
 

  return (
    <div className={styles["eachcontainer"]}>
      <img src={item.image} alt={item.item_name} />
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

        <div
          className={styles["addtocart"]}
          onClick={handleRemoveWish}
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default Eachwishlist;
