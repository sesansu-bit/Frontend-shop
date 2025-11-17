import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ResetPassword.module.css";
import { TbPasswordMobilePhone } from "react-icons/tb";

const ResetPassword = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("Resetting password...");

    try {
      const res = await fetch("https://backend-shoppping-full.onrender.com/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ✅ cookie send automatically
        body: JSON.stringify({
          email: state.email,
          newPassword,
        }),
      });

      const data = await res.json();
      setMessage(data.message);

      if (res.ok) {
        alert("✅ Password reset successful! You can now log in.");
        navigate("/login");
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
        <TbPasswordMobilePhone className={styles["lockicon"]} />
      </div>

      <h1>Reset Password</h1>
      <h5>Set your new password</h5>

      <form onSubmit={handleReset} className={styles["form-container"]}>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          minLength="6"
          className={styles["input-field"]}
        />
        <button type="submit" className={styles["submit-button"]}>
          Reset Password
        </button>
      </form>

      {message && <div className={styles["message"]}>{message}</div>}
    </div>
     </div>
  );
};

export default ResetPassword;
