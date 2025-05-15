import styles from "./banner.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000); 
    }, 5000); // Repeat every 7 seconds (2s animation + 3s delay)

    return () => clearInterval(interval); 
  }, []);

    return(
      <>
<div className={styles["bannercover"]}>
<div className={styles["bannertext"]}>
<div className={`${styles["brand"]} ${isAnimating? styles["animate"] : ""}`}>
          BRAND
</div>
<div className={`${styles["sale"]} ${isAnimating? styles["animate2"] : ""}` }>sale</div>
<div className={`${styles["about"]} ${isAnimating? styles["animate3"] : ""}`}>Brands sale is currently going on at very lowest price best grab special offer click on shop now never miss out this oppertunity.  </div>
<Link className={styles["link"]} to="/electronics">
<div className={styles["buttoncontainer"]}>
<div className={`${styles["readmore"]} ${isAnimating? styles["animate4"] : ""}` }>
  READ MORE</div>
<div className={`${styles["shopnow"]} ${isAnimating? styles["animate5"] : ""}` }>SHOP NOW</div>
</div>
</Link>
</div>
<div className={styles["bannerimage"]}>
  <img src="https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-08dc-620a-86a0-8c11f5a09b1e/raw?se=2025-04-22T01%3A29%3A19Z&sp=r&sv=2024-08-04&sr=b&scid=516d5260-8aa3-57fa-8051-545fd7d07153&skoid=a3336399-497e-45e5-8f28-4b88ecca3d1f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-21T16%3A26%3A03Z&ske=2025-04-22T16%3A26%3A03Z&sks=b&skv=2024-08-04&sig=w927b%2B4JnmE3JvUPyMSnHNBfOZNe4j/Ne2ZNJmRNs5s%3D"/>
</div>
</div>

<div className={styles["bannercover1"]}>
<div className={styles["bannerimage1"]}>
  <img src="https://github.com/ShariqAnsari88/strapi-simple-one-client/blob/main/src/assets/banner-img.png?raw=true"/>
</div>

<div className={styles["brand1"]}>
BRAND
</div>
<div className={styles["sale1"]}>sale</div>
<div className={styles["about1"]}>Brands sale is currently going on at very lowest price best grab special offer click on shop now never miss out this oppertunity.  </div>
<Link className={styles["link"]} to="/electronics">
<div className={styles["readmore1"] }>
  READ MORE</div>
<div className={styles["shopnow1"]}  >SHOP NOW</div>

</Link>


</div>

</>
  );
};

export default Banner;
