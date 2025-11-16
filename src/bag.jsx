import styles from "./bag.module.css";
import Calculation from "./calculation.jsx";
import Eachbag from "./eachbag.jsx";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bagitem);

  return (
    <>
      {bagItems.length === 0 && (
        <div className={styles["add"]}>
          <p>Add something to Bag</p>
        </div>
      )}

      <div className={styles["fullcart"]}>
        <div className={styles["leftcart"]}>
          {bagItems.map((item) => (
            <Eachbag key={item.id} item={item} />
          ))}
        </div>

        {bagItems.length > 0 && (
          <div className={styles["rightcart"]}>
            <Calculation />
          </div>
        )}
      </div>
    </>
  );
};

export default Bag;
