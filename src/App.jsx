import './App.css';
import Navbar from "./navbar.jsx";
import Footer from './footer.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import LoadingSpinner from "./Aloader.jsx";
import useAppFetch from "./useFetchItems.js";
import { useSelector } from "react-redux";
import ScrollToTop from "./ScrollToTop";
import useBagFetch from "./useBagFetch.js"; 
import { useAuth} from "./useAuth.js";
import useWishlistFetch from "./useWishlistFetch.js"; 


function App() {
  const location = useLocation();
  const noFooterPaths = [
    '/bag', '/wishlist', '/men', '/women', '/login', 
    '/beauty', '/electronics', '/sports', '/household', 
    '/luggage', '/special','/welcome','/signup','/forgot-password','/verify-otp','/reset-password'
  ];

  const showFooter = !noFooterPaths.includes(location.pathname);
  const showNavbar = location.pathname !== '/login' && location.pathname !== '/welcome' && location.pathname !== '/signup' && location.pathname !== '/forgot-password' && location.pathname !== '/verify-otp' && location.pathname !== '/reset-password' ;
  const fetchStatus = useSelector((store) => store.fetchStatus);


  // custom data fetch
  useAppFetch(); 
 useBagFetch();
 useWishlistFetch();
useAuth();
  // Loader
  if (fetchStatus.currentlyFetching) {
    return <LoadingSpinner />;
  }

  
  return (
    <>
      <ScrollToTop /> 
      {showNavbar && <Navbar />}
      <Outlet />
      {showFooter && <Footer />}
   </>
  );
}

export default App;