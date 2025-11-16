import styles from "./feature.module.css";
import Eachbrowsing from "./eachbrowsing.jsx";
import { useSelector } from "react-redux";
const Feature= () => {
const itema = useSelector((store) => store.featureitem);
return(
    <>
<div className={styles["featurebanner"]}>
<div className={styles["featureban"]}>
FEATURED BRAND
</div>
</div>
<div className={styles["featurecontainer"]}>
{itema.map((items)=>(<Eachbrowsing key={items.id}  item={items}></Eachbrowsing>))} 
</div>
</>
);};
export default Feature;