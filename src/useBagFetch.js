import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bagitemAction } from "./bag.js";

const useBagFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCart = async () => {
      try {
        const res = await fetch("http://localhost:2000/cartfetch", {
          method: "GET",
          credentials: "include" 
        });

        const data = await res.json();

        if (data.success) {
          dispatch(bagitemAction.setCart(data.items)); // full product data
        }
      } catch (err) {
        console.log("Cart fetch error:", err);
      }
    };

    loadCart();
  }, [dispatch]);
};

export default useBagFetch;
