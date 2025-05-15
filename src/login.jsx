import React, { useRef, useState, useEffect } from "react";
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login, signup, logout, clearError } from "./auth.js";
import { useNavigate } from "react-router-dom";
import Welcome from "./welcome.jsx"; // <-- IMPORT THE COMPONENT

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const error = useSelector((state) => state.auth.error);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // optional if you want redirect on login
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = () => {
    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!username || !password) {
      alert("Please fill in both fields.");
      return;
    }

    const credentials = { username, password };

    if (isLogin) {
      dispatch(login(credentials));
    } else {
      dispatch(signup(credentials));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    dispatch(clearError());
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  const handleChange = () => {
    if (error) {
      dispatch(clearError());
    }
  };

  // ✅ Render separate component if logged in
  if (isLoggedIn) {
    return (
      <Welcome currentUser={currentUser} handleLogout={handleLogout} />
    );
  }

  return (
    <div className={styles["logindetail"]}>
      <p>
        {isLogin ? "Log " : "Sign "}
        <span>{isLogin ? "In" : "Up"}</span>
      </p>
      <input
        placeholder="Username"
        ref={usernameRef}
        required
        onChange={handleChange}
      />
      <input
        placeholder="Password"
        type="password"
        ref={passwordRef}
        required
        onChange={handleChange}
      />

      {error && <div className={styles["warning"]}>{error}</div>}

      <div
        className={styles["button"]}
        onClick={handleSubmit}
      >
        {isLogin ? "Log in" : "Sign up"}
      </div>

      <div className={styles["signin"]} onClick={toggleMode}>
        {isLogin ? "Sign up" : "Log in"}
      </div>
    </div>
  );
};

export default Login;
