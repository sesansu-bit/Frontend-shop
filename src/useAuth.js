// useAuth.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userSliceAction } from "./UserSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { setUser, clearUser } = userSliceAction;

  // Fetch profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:2000/profile", {
          credentials: "include",
        });
        const data = await res.json();

        if (data.success) {
          dispatch(setUser(data.user));
        } else {
          dispatch(clearUser());
        }
      } catch (error) {
        console.error("Profile fetch error:", error);
        dispatch(clearUser());
      }
    };

    fetchProfile();
  }, [dispatch]);

  

};
