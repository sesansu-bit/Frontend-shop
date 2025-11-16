import styles from "./calculation.module.css";
import { useSelector } from "react-redux";
import axios from "axios";

const BACKEND_URL = "http://localhost:2000";

const Calculation = () => {
  
  const finalItems =  useSelector((state) => state.bagitem);

  const CONVENIENCE_FEES = 50;
  const totalItem = finalItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  const finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  // 🧠 Razorpay payment handler
  const handlePayment = async () => {
    try {
      // 1️⃣ Get Razorpay key
      const { data: keyData } = await axios.get(`${BACKEND_URL}/api/get-razorpay-key`);
      const { key } = keyData;

      // 2️⃣ Create order
      const { data: orderData } = await axios.post(`${BACKEND_URL}/api/create-order`, {
        amount: finalPayment,
      });

      if (!orderData.success) return alert("Order creation failed!");
      const { order } = orderData;

      // 3️⃣ Razorpay options
      const options = {
        key,
        amount: order.amount,
        currency: order.currency,
        name: "seshansu shop",
        description: "Order Payment",
        order_id: order.id,
        handler: async function (response) {
          const verifyRes = await axios.post(`${BACKEND_URL}/api/verify-payment`, {
            ...response,
            amount: order.amount / 100,
          });

          if (verifyRes.data.success) {
            alert("✅ Payment Successful!");
          } else {
            alert("❌ Payment verification failed!");
          }
        },
        theme: { color: "#f25278" },
        prefill: {
          name: "Seshansu Swain",
          email: "user@example.com",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment initialization failed!");
    }
  };

  return (
    <>
      <div className={styles["calculation"]}>
        <div className={styles["itemsno"]}>Item's no. ({totalItem})</div>
        <div className={styles["totalitems"]}>
          Total price<span>₹{totalMRP}</span>
        </div>
        <div className={styles["discountcart"]}>
          Discount Price<span>-₹{totalDiscount}</span>
        </div>
        <div className={styles["tax"]}>
          Tax fee<span>₹{CONVENIENCE_FEES}</span>
        </div>
        <div className={styles["border"]}></div>
        <div className={styles["totalamount"]}>
          Total Amount<span>₹{finalPayment}</span>
        </div>

        {/* 🧾 Payment Button */}
        <div
          className={styles["placeorder"]}
          onClick={handlePayment}
          
        >
          PLACE ORDER
        </div>
      </div>
    </>
  );
};

export default Calculation;
