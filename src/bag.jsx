import styles from "./bag.module.css";
import Calculation from "./calculation.jsx";
import Eachbag from "./eachbag.jsx";
import { useSelector } from "react-redux";
const Bag= () => {
    const bagItems = useSelector((state) => state.bagitem);
    const items = useSelector((state) => state.items);
    const bagitem = items.filter((item) => {
      const itemIndex = bagItems.indexOf(item.id);
      return itemIndex >= 0;
    });
   
return(
    <>
    {bagitem.length ===0 &&
 <div className={styles["add"]}><p>Add something to Bag</p></div>
 }
<div className={styles["fullcart"]}>
    <div className={styles["leftcart"]}>
    {bagitem.map((itembag)=>(<Eachbag key={itembag.id}  item={itembag}></Eachbag>))} 
    </div> 

    {bagitem.length > 0 && (
    <div className={styles["rightcart"]}>
      <Calculation />
    </div>
  )}
</div>
</>
  );
};
export default Bag;







