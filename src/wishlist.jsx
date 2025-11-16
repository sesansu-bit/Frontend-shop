import styles from "./wishlist.module.css";
import Eachwishlist from "./eachwishlist.jsx";
import { useSelector } from "react-redux";

const Wishlist = () => {
  // wishlist slice now stores full product objects
  const wishlistItems = useSelector((state) => state.wishlistitem);

  return (
    <>
      {wishlistItems.length === 0 && (
        <div className={styles["add"]}>
          <p>Add something to wishlist</p>
        </div>
      )}

      <div className={styles["wishlistcontainer"]}>
        {wishlistItems.map((item) => (
          <Eachwishlist key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Wishlist;
