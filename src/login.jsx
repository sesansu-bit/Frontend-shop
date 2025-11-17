import { useState } from "react";
import styles from "./login.module.css";
import { useNavigate, Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();

  const BACKEND_URL = "https://backend-sypreen-shop.onrender.com";

  // Manual Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { email, password };

    try {
      const res = await fetch(`${BACKEND_URL}/login`, { // ✅ Correct route
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // to send cookies
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setMessage(data.message);

      if (data.success) {
        setEmail("");
        setPassword("");
        navigate("/"); // ✅ Redirect to home
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed!");
    }
  };

  // Google login
  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ tokenId: credentialResponse.credential }),
      });

      const data = await res.json();
      setMessage(data.message);

      if (data.message.includes("successful")) {
        navigate("/"); 
      } else {
        setMessage("Google login failed!");
      }
    } catch (err) {
      console.log(err);
      setMessage("Google login failed!");
    }
  };

  return (
    <GoogleOAuthProvider clientId="122589253037-h3kfs5tsdnkfkm0qqm7fntjk01jrfp2a.apps.googleusercontent.com">
      <div className={styles["darkback"]}>
        <div className={styles["logindetail"]}>
          <div className={styles["log"]}>Log In</div>

          <form className={styles["formbox"]} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Link className={styles["link"]} to="/forgot-password">
              <div className={styles["forgot"]}>Forget password?</div>
            </Link>

            <button type="submit" className={styles["button"]}>
              Log in
            </button>
          </form>

          <Link className={styles["link"]} to="/signup">
            <div className={styles["signin"]}>
              <span>Don't have an account?</span> Sign up
            </div>
          </Link>

          <div className={styles["google"]}>
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => setMessage("Google login failed")}
              text="continue_with"
              shape="rectangular"
              width="250px"
            />
          </div>

          {message && <div className={styles["message"]}>{message}</div>}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
