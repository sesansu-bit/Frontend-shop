import { useState } from "react";
import styles from "./signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();

  const BACKEND_URL = "https://backend-sypreen-shop.onrender.com"; 

  // Manual signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, password };

    try {
      const res = await fetch(`${BACKEND_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setMessage(data.message);

      if (data.success) {
        setName("");    
        setEmail("");
        setPassword("");
        navigate("/"); // ✅ navigate to home
      } else {
        alert(data.message || "Signup failed!");
      }
    } catch (err) {
      console.log(err);
      alert("Signup failed!");
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
        navigate("/"); // ✅ navigate to home
      }
    } catch (err) {
      console.log(err);
      setMessage("Google login failed!");
    }
  };

  return (
    <GoogleOAuthProvider clientId="293608652932-mcur9n89d6hqb4qekveeaqp8p7u3r614.apps.googleusercontent.com">
      <div className={styles["darkback"]}>
        <div className={styles["logindetail"]}>
          <div className={styles["log"]}>Sign Up</div>

          <form className={styles["formbox"]} onSubmit={handleSubmit}> 
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <button className={styles["button"]}>Sign up</button>
          </form> 

          <Link className={styles["link"]} to="/login">
            <div className={styles["signin"]}>
              <span>Already have an account?</span> Log in
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

export default Signup;
