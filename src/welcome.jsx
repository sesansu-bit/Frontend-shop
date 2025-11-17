// Welcome.jsx
import { useSelector, useDispatch } from "react-redux";
import styles from "./welcome.module.css";
import { userSliceAction } from  "./UserSlice.js"; // path adjust kar
import { useAuth} from "./useAuth.js";

const Welcome = () => {
  const dispatch = useDispatch();
const user = useSelector((store) => store.user.user);
   
useAuth();

  // Logout function
  const handleLogout = async () => {
    try {
      const res = await fetch("https://backend-sypreen-shop.onrender.com/logout", {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
     dispatch(userSliceAction.clearUser());

        window.location.href = "/login";
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

 

  return (
    <div className={styles.darkback}>
      <div className={styles.profilebox}>
        <div className={styles.profilename}>
          {user && `Hello, ${user.name}`}
        </div>
        <div className={styles.profilestart}>
          <div className={styles.sypreenenter}>Welcome to Sypreen</div>
          {user && (
            <div className={styles.loggingout} onClick={handleLogout}>
              Log out
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
