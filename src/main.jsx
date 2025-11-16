import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Router and Redux
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import sypreenstore, { persistor } from "./index.js"; 
import { PersistGate } from "redux-persist/integration/react";

// Loader
import Aloader from "./Aloader.jsx";
import Protectcheak from "./protectcheak.jsx";

// Lazy imports
const Men = lazy(() => import("./men.jsx"));
const Women = lazy(() => import("./women.jsx"));
const Beauty = lazy(() => import("./beauty.jsx"));
const Electronics = lazy(() => import("./electronics.jsx"));
const Sports = lazy(() => import("./sports.jsx"));
const Household = lazy(() => import("./household.jsx"));
const Luggage = lazy(() => import("./luggage.jsx"));
const Special = lazy(() => import("./special.jsx"));
const Bag = lazy(() => import("./bag.jsx"));
const Login = lazy(() => import("./login.jsx"));
const Wishlist = lazy(() => import("./wishlist.jsx"));
const Welcome = lazy(() => import("./welcome.jsx"));
const Content = lazy(() => import("./content.jsx"));
const Signup = lazy(() => import("./signup.jsx"));
const ResetPassword = lazy(() => import("./ResetPassword.jsx"));
const ForgotPassword = lazy(() => import("./ForgotPassword.jsx"));
const VerifyOtp = lazy(() => import("./VerifyOtp.jsx"));
import SearchItem from "./SearchItem.jsx";

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Protected routes wrapped with Protectcheak
      { path: "/", element: <Protectcheak><Content /></Protectcheak> },
      { path: "/men", element: <Protectcheak><Men /></Protectcheak> },
      { path: "/women", element: <Protectcheak><Women /></Protectcheak> },
      { path: "/beauty", element: <Protectcheak><Beauty /></Protectcheak> },
      { path: "/electronics", element: <Protectcheak><Electronics /></Protectcheak> },
      { path: "/sports", element: <Protectcheak><Sports /></Protectcheak> },
      { path: "/household", element: <Protectcheak><Household /></Protectcheak> },
      { path: "/luggage", element: <Protectcheak><Luggage /></Protectcheak> },
      { path: "/special", element: <Protectcheak><Special /></Protectcheak> },
      { path: "/bag", element: <Protectcheak><Bag /></Protectcheak> },
      { path: "/wishlist", element: <Protectcheak><Wishlist /></Protectcheak> },
      { path: "/searchitem", element: <Protectcheak><SearchItem /></Protectcheak> },
{ path: "/welcome", element: <Protectcheak><Welcome /></Protectcheak> },

      // 🟢 Public routes (login/signup/reset)
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/reset-password", element: <ResetPassword /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/verify-otp", element: <VerifyOtp /> }
    ],
  },
]);

// Render with Suspense fallback
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={sypreenstore}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Aloader />}>
          <RouterProvider router={router} />
        </Suspense>
      </PersistGate>
    </Provider>
  </StrictMode>
);

export default Content;
