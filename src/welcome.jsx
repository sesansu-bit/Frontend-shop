// Welcome.jsx
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./auth";
import styles from "./login.module.css";

const Welcome = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles["loginenter"]}>
      <div className={styles["loginname"]}>{currentUser}</div>
      <div className={styles["welcome"]}>Welcome to sypreen</div>
      <div className={styles["logout"]} onClick={handleLogout}>
        Log out
      </div>
    </div>
  );
};

export default Welcome;
