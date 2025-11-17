import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Protectcheak = ({ children }) => {
  const [tokenValid, setTokenValid] = useState(null);

  useEffect(() => {
    fetch("https://backend-sypreen-shop.onrender.com/api/verify-token", {
      credentials: "include", // cookie send
    })
      .then(res => res.ok ? setTokenValid(true) : setTokenValid(false))
      .catch(() => setTokenValid(false));
  }, []);

  if (tokenValid === null) return <div>Loading...</div>;
  if (!tokenValid) return <Navigate to="/login" replace />;

  return children;
};

export default Protectcheak;
