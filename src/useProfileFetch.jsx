import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "./UserSlice.js"; 

const useProfileFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:2000/profile");
        const data = await res.json();

        if (data?.success) {
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

export default useProfileFetch;
