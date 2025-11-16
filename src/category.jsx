import styles from "./category.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Category = () => {
  

  return (
    <>
      <div className={styles["categorybanner"]}>CATEGORY</div>

      <div className={styles["category"]}>
        
        {/* Recommendation (No category change needed) */}
        <Link className={styles["link"]} to="/special">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.1 }}
            className={styles["recommendcover"]}
          >
            <div className={styles["imagediv"]}>
              <img src="https://st.depositphotos.com/2036511/3589/v/950/depositphotos_35890715-stock-illustration-blue-top-quality-badge-with.jpg" />
            </div>
            <div className={styles["title1"]}>sypreen recommendation</div>
          </motion.div>
        </Link>

        {/* MEN */}
        <Link
          className={styles["link"]}
          to="/men"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.1 }}
            className={styles["men"]}
          >
            <div className={styles["imagediv"]}>
              <img src="https://i.pinimg.com/736x/05/42/59/05425956e846b562dff86f712b70a6f6.jpg" />
            </div>
            <div className={styles["title2"]}>men fashion</div>
          </motion.div>
        </Link>

        {/* WOMEN */}
        <Link
          className={styles["link"]}
          to="/women"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.1 }}
            className={styles["women"]}
          >
            <div className={styles["imagediv"]}>
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3bffe749995999.58c8bf7e44d49.jpg" />
            </div>
            <div className={styles["title3"]}>women fashion</div>
          </motion.div>
        </Link>

        {/* BEAUTY */}
        <Link
          className={styles["link"]}
          to="/beauty"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.1 }}
            className={styles["beauty"]}
          >
            <div className={styles["imagediv"]}>
              <img src="https://s3.envato.com/files/227921656/01_preview4.jpg" />
            </div>
            <div className={styles["title4"]}>beauty products</div>
          </motion.div>
        </Link>

        {/* HOUSEHOLD */}
        <Link
          className={styles["link"]}
          to="/household"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.1 }}
            className={styles["electronics"]}
          >
            <div className={styles["imagediv"]}>
              <img src="https://i.pinimg.com/originals/eb/45/65/eb45656d5c307ae9182c58c088eca678.jpg" />
            </div>
            <div className={styles["title5"]}>household products</div>
          </motion.div>
        </Link>

        {/* ELECTRONICS */}
        <Link
          className={styles["link"]}
          to="/electronics"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.1 }}
            className={styles["sports"]}
          >
            <div className={styles["imagediv"]}>
              <img src="https://image.freepik.com/free-vector/modern-headphone-web-banner-templates-design_78815-440.jpg" />
            </div>
            <div className={styles["title6"]}>electronics products</div>
          </motion.div>
        </Link>

        {/* SPORTS */}
        <Link
          className={styles["link"]}
          to="/sports"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.1 }}
            className={styles["perfume"]}
          >
            <div className={styles["imagediv"]}>
              <img src="https://redtape.com/cdn/shop/files/RSO3783_8_jpg_d419433a-ce38-4b05-9ece-9a442af3767d.jpg?v=1741350373" />
            </div>
            <div className={styles["title7"]}>sports fashion</div>
          </motion.div>
        </Link>
      


      <Link className={styles["link"]} to="/luggage"
      >
<motion.div
         initial={{ y: 40, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6 }}
         viewport={{ once: false, amount: 0.1 }} className={styles["luggage"]}>
<div className={styles["imagediv"]}><img src="https://img.freepik.com/premium-photo/luggage-suitcase-airport-wide-banner-with-copy-space-area-vacations-holiday-travel-concepts-generativ-ai_728202-1587.jpg"/></div>
<div className={styles["title8"]}>luggages branded</div>
</motion.div>
</Link>
 

        {/* NEXT ARROW */}
        <Link className={styles["link"]} to="/special">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.1 }}
            className={styles["arrow"]}
          >
            <div className={styles["imagediv"]}>
              <MdArrowForwardIos className={styles["arrowicon"]} />
            </div>
          </motion.div>
        </Link>
      </div>
    </>
  );
};

export default Category;
