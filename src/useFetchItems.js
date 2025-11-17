// useAppFetch.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchStatusActions } from "./fetching.js";
import { menitemAction } from "./men.js";
import { womenitemAction } from "./women.js";
import { beautyitemAction } from "./beauty.js";
import { sportsitemAction } from "./sports.js";
import { houseitemAction } from "./house.js";
import { elctronicsitemAction } from "./electronics.js";
import { luggageitemAction } from "./luggage.js";

const useAppFetch = () => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((store) => store.fetchStatus.fetchDone);

  useEffect(() => {
    if (fetchStatus) return; // 👉 already fetched once (even after refresh redux resets)

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchAll = async () => {
      try {
        dispatch(fetchStatusActions.markFetchingStarted());

        //  Backend returns all categories in one response
        const res = await fetch("https://backend-sypreen-shop.onrender.com/api/products/all", {
          signal,
        }); 

        const data = await res.json();

        // 👇 Each category store ko update kar do once
        dispatch(menitemAction.addInitialItems(data.men || []));
        dispatch(womenitemAction.addInitialItems(data.women || []));
        dispatch(beautyitemAction.addInitialItems(data.beauty || []));
        dispatch(sportsitemAction.addInitialItems(data.sports || []));
        dispatch(houseitemAction.addInitialItems(data.house || []));
        dispatch(elctronicsitemAction.addInitialItems(data.electronics || []));
        dispatch(luggageitemAction.addInitialItems(data.luggage || []));

        dispatch(fetchStatusActions.markFetchingFinished());
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Fetch failed:", err);
        }
      }
    };

    fetchAll();

    return () => controller.abort();
  }, []);
};

export default useAppFetch;
