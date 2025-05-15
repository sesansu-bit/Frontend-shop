import './App.css';
import Navbar from "./navbar.jsx";
import Footer from './footer.jsx';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import LoadingSpinner from "./Aloader.jsx";
import useAppFetch from "./useFetchItems.js";
import { useSelector } from "react-redux";

function App() {
  const location = useLocation();
  const noFooterPaths = [
    '/bag', '/wishlist', '/men', '/women', '/login', 
    '/beauty', '/electronics', '/sports', '/household', 
    '/luggage', '/special','/welcome'
  ];

  const showFooter = !noFooterPaths.includes(location.pathname);
  const showNavbar = location.pathname !== '/login' && location.pathname !== '/welcome';
  const isLoginPage = location.pathname === '/login' || location.pathname === '/welcome';

  const fetchStatus = useSelector((store) => store.fetchStatus);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useAppFetch(); // fetch data once

  // Loader
  if (fetchStatus.currentlyFetching) {
    return <LoadingSpinner />;
  }

  // Auth check (don't redirect again if already on login)
  if (!isLoggedIn && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={{ backgroundColor: isLoginPage ? "#0c0025" : "white", minHeight: "100vh" }}>
      {showNavbar && <Navbar />}
      <Outlet />
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
