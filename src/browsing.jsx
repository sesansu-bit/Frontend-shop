import styles from "./browsing.module.css";
import Eachbrowsing from "./eachbrowsing.jsx";
import { useSelector} from "react-redux";

import LoadingSpinner from "./Aloader.jsx";
const Browsing= () => {
const itemb = useSelector((store) => store.browsingitem);
const fetchStatus = useSelector((store) => store.fetchStatus);
return(
    <>
<div className={styles["browsingcover"]}>
<div className={styles["browsingbanner"]}>
CONTINUE BROWSING BRANDS
</div>
<div className={styles["browsingcontainer"]}>
{itemb.map((items)=>(<Eachbrowsing key={items.id}  item={items}></Eachbrowsing>))} 
</div>
</div>
</>
  );
};

export default Browsing;