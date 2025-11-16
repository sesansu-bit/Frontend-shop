import styles from "./unique.module.css";
import Eachbrowsing from "./eachbrowsing.jsx";
import { useSelector } from "react-redux";
const Unique= () => {
const itemc = useSelector((store) => store.uniqueitem);
return(
    <>
<div className={styles["uniquebanner"]}>
UNIQUE COLLECTION
</div>
<div className={styles["uniquecontainer"]}>
{itemc.map((items)=>(<Eachbrowsing key={items.id}  item={items}></Eachbrowsing>))} 
</div>
</>
  );
};

export default Unique;