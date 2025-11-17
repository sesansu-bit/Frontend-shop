import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./VerifyOtp.module.css";
import { MdMarkEmailRead } from "react-icons/md";

const VerifyOtp = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    setMessage("Verifying OTP...");

    try {
      const res = await fetch("https://backend-shoppping-full.onrender.com/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", 
        body: JSON.stringify({ email: state.email, otp }),
      });

      const data = await res.json();
      setMessage(data.message);

      if (res.ok) {
        // ✅ token stored in cookie — navigate directly
        navigate("/reset-password", { state: { email: state.email } });
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error, try again later");
    }
  };

  return (

     <div className={styles["darkback"]} >
    <div className={styles["container"]}>
      <div className={styles["lock"]}>
        <MdMarkEmailRead className={styles["lockicon"]} />
      </div>
      <h1>OTP Verification</h1>
      <h5>Enter verification code</h5>

      <form onSubmit={handleVerify} className={styles["form-container"]}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          maxLength="6"
          className={styles["input-field"]}
        />
        <button type="submit" className={styles["submit-button"]}>
          Verify
        </button>
      </form>

      {message && <div className={styles["message"]}>{message}</div>}
    </div>
    </div>
  );
};

export default VerifyOtp;
