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

    dispatch(fetchStatusActions.markFetchingStarted());

    fetch("https://redux-backend-haqh.onrender.com/items", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        dispatch(fetchStatusActions.markFetchingFinished());

        dispatch(browsingitemAction.addInitialItems(data.items));
        dispatch(menitemAction.addInitialItems(data.items2));
        dispatch(womenitemAction.addInitialItems(data.items3));
        dispatch(beautyitemAction.addInitialItems(data.items4));
        dispatch(sportsitemAction.addInitialItems(data.items5));
        dispatch(houseitemAction.addInitialItems(data.items6));
        dispatch(elctronicsitemAction.addInitialItems(data.items7));
        dispatch(luggageitemAction.addInitialItems(data.items8));
        dispatch(uniqueitemAction.addInitialItems(data.items9));
        dispatch(featureitemAction.addInitialItems(data.items10));
        dispatch(itemsAction.addInitialItems(data.itemall));
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted due to unmount/navigation");
        } else {
          console.error("Fetch failed:", err);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);
};

export default useAppFetch;
