import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Router and Redux
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import sypreenstore, { persistor } from "./index.js"; 
import { PersistGate } from "redux-persist/integration/react";

// ✅ Loader
import Aloader from "./Aloader.jsx";

// ✅ Lazy imports
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

// Router with lazy-loaded components
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Content /> },
      { path: "/men", element: <Men /> },
      { path: "/women", element: <Women /> },
      { path: "/beauty", element: <Beauty /> },
      { path: "/electronics", element: <Electronics /> },
      { path: "/sports", element: <Sports /> },
      { path: "/household", element: <Household /> },
      { path: "/luggage", element: <Luggage /> },
      { path: "/special", element: <Special /> },
      { path: "/bag", element: <Bag /> },
      { path: "/login", element: <Login /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/welcome", element: <Welcome /> },
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
