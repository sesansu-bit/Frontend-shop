import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { wishlistitemAction } from "./wishlist.js";

const useWishlistFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadWishlist = async () => {
      try {
        const res = await fetch("https://backend-shoppping-full.onrender.com/wishlistfetch", {
          method: "GET",
          credentials: "include" // cookies se token automatic
        });

        const data = await res.json();

        if (data.success) {
          dispatch(wishlistitemAction.setWishlist(data.items)); // full product info
        }
      } catch (err) {
        console.log("Wishlist fetch error:", err);
      }
    };

    loadWishlist();
  }, [dispatch]);
};

export default useWishlistFetch;
