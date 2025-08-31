// useAppFetch.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { browsingitemAction } from "./browsing.js";
import { fetchStatusActions } from "./fetching.js";
import { menitemAction } from "./men.js";
import { womenitemAction } from "./women.js";
import { beautyitemAction } from "./beauty.js";
import { sportsitemAction } from "./sports.js";
import { houseitemAction } from "./house.js";
import { elctronicsitemAction } from "./electronics.js";
import { luggageitemAction } from "./luggage.js";
import { uniqueitemAction } from "./unique.js";
import { featureitemAction } from "./feature.js";
import { itemsAction } from "./items.js";

const useAppFetch = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        dispatch(fetchStatusActions.markFetchingStarted());
 
        const response = await fetch("https://newbackend-sypreen.onrender.com/items", { signal });
        const { items } = await response.json();

        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(browsingitemAction.addInitialItems(items.items));
        dispatch(menitemAction.addInitialItems(items.items2));
        dispatch(womenitemAction.addInitialItems(items.items3));
        dispatch(beautyitemAction.addInitialItems(items.items4));
        dispatch(sportsitemAction.addInitialItems(items.items5));
        dispatch(houseitemAction.addInitialItems(items.items6));
        dispatch(elctronicsitemAction.addInitialItems(items.items7));
        dispatch(luggageitemAction.addInitialItems(items.items8));
        dispatch(uniqueitemAction.addInitialItems(items.items9));
        dispatch(featureitemAction.addInitialItems(items.items10));
        dispatch(itemsAction.addInitialItems(items.itemall));

      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted due to unmount/navigation");
        } else {
          console.error("Fetch failed:", err);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);
};

export default useAppFetch;
