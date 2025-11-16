import styles from "./eachbrowsing.module.css";
const Eachbrowsing= ({item}) => {

  return (
    <>
      <div
        className={styles["eachcontainer"]}
     
      >
        <img src={item.image}  alt={item.item_name} />
       

        <div className={styles["productrating"]}>
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>

        <div className={styles["detailed"]}>
          <div className={styles["companyname"]}>{item.company}</div>
          <div className={styles["productname"]}>{item.item_name}</div>
          <div className={styles["price"]}>
            <span className={styles["ongoingprice"]}>
              Rs.{item.current_price}
            </span>
            <span className={styles["originalprice"]}>
              Rs.{item.original_price}
            </span>
            <span className={styles["discount"]}>
              ({item.discount_percentage} off)
            </span>
          </div>
         
        </div>
      </div>
    </>
  );
};
export default Eachbrowsing;
