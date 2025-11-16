import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ForgotPassword.module.css";
import { FaLock } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("Sending OTP...");

    try {
      const res = await fetch("http://localhost:2000/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // important for sending/receiving cookies
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setLoading(false);
      setMessage(data.message);

      if (data.ok) {
        // ✅ OTP successfully sent, navigate to verification page
        navigate("/verify-otp", { state: { email } });
      }
    } catch (err) {
      console.error("Error:", err);
      setLoading(false);
      setMessage("Server error, try again.");
    }
  };

  return (
     <div className={styles["darkback"]} >
    <div className={styles["container"]}>
      <div className={styles["lock"]}>
        <FaLock className={styles["lockicon"]} />
      </div>

      <h1>Forgot Password?</h1>
      <h5>You can reset your password here</h5>

      <form onSubmit={handleSendOtp} className={styles["form-container"]}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles["input-field"]}
          disabled={loading}
        />

        <button
          type="submit"
          className={styles["submit-button"]}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send OTP"}
        </button>
      </form>

      {message && <div className={styles["message"]}>{message}</div>}
    </div>
    </div>
  );
};

export default ForgotPassword;
