import styles from "./navbar.module.css";
import { useSelector } from "react-redux";
import { IoCameraOutline, IoSearch } from "react-icons/io5";
import { TiMicrophoneOutline } from "react-icons/ti";
import { FaHeart } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { MdOutlineExitToApp } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const bagitem = useSelector((store) => store.bagitem);
  const wishlistitem = useSelector((store) => store.wishlistitem);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const [isShining, setIsShining] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShining(true);
      setTimeout(() => setIsShining(false), 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSearchClick = () => navigate("/searchitem");

  const categories = ["men", "women", "beauty", "sports"];

  return (
    <>
      <div className={styles["navcover"]}>
        <Link className={styles["link"]} to="/">
          <div className={styles["logocover"]}>
            <div className={styles["s"]}>
              S<span className={styles["y"]}>Y</span>
            </div>
            <div className={styles["name"]}>
              sypreen
              <div className={styles["border"]}></div>
            </div>
          </div>
        </Link>

        <div className={styles["category"]}>
          {categories.map((cat) => (
            <Link key={cat} className={styles["link"]} to={`/${cat}`}>
              <div>{cat.toUpperCase()}</div>
            </Link>
          ))}
        </div>

        <div
          className={`${styles["search"]} ${
            isShining ? styles["shine"] : ""
          }`}
          onClick={handleSearchClick}
        >
          <div className={styles["searchcover"]}>
            <IoSearch className={styles["searchicon"]} />
          </div>
          <div className={styles["inputcover"]}>
            <input
              type="text"
              className={styles["input"]}
              placeholder="Search for products ..."
              readOnly
            />
          </div>
          <div className={styles["cameracover"]}>
            <IoCameraOutline className={styles["cameraicon"]} />
          </div>
          <div className={styles["mikecover"]}>
            <TiMicrophoneOutline className={styles["mikeicon"]} />
          </div>
        </div>

        <div className={styles["threeicon"]}>
          <Link className={styles["link"]} to="/welcome">
            <div className={styles["account"]}>
              <MdOutlineExitToApp className={styles["accounticon"]} />
              <p>Log in</p>
            </div>
          </Link>

          <Link className={styles["link"]} to="/wishlist">
            <div className={styles["whilist"]}>
              <FaHeart className={styles["whilisticon"]} />
              <p>Wishlist</p>
            </div>
          </Link>

          <div className={styles["wishcircle"]}>{wishlistitem.length}</div>

          <Link className={styles["link"]} to="/bag">
            <div className={styles["bag"]}>
              <IoBagHandle className={styles["bagicon"]} />
              <p>Bag</p>
            </div>
          </Link>

          <div className={styles["countcircle"]}>{bagitem.length}</div>

          <div className={styles["sideopen"]} onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <FaBarsStaggered className={styles["sideopenicon2"]} />
            ) : (
              <FaBars className={styles["sideopenicon"]} />
            )}
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div className={styles["secnav"]}>
          <div className={styles["category2"]}>
            {categories.map((cat) => (
              <Link key={cat} className={styles["link"]} to={`/${cat}`}>
                <div>{cat.toUpperCase()}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
 