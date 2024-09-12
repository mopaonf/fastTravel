import React, { useState, useEffect } from 'react';
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomeContainer from './pages/home_container/HomeContainer';
import Bus from './pages/bus/Bus';
import Detail from './pages/bus/detail';
import Checkout from './pages/checkout/Checkout';
import BookTicket from './pages/bookticket/BookTicket';
import NotFound from './pages/notfound/NotFound';
import ProtectedRoute from './components/protectedroute/ProtectedRoute';
import Modal from './components/modal/modal';
import About from './pages/about/About';

function App() {
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   useEffect(() => {
      // Check for authentication token in localStorage
      const token = localStorage.getItem('authToken');
      if (token) {
         // Verify token with your backend
         verifyToken(token);
      }
   }, []);

   const verifyToken = async (token) => {
      try {
         // Make an API call to your backend to verify the token
         const response = await fetch('/api/verify-token', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`,
            },
         });

         if (response.ok) {
            setIsAuthenticated(true);
         } else {
            // If token is invalid, remove it from localStorage
            localStorage.removeItem('authToken');
            setIsAuthenticated(false);
         }
      } catch (error) {
         console.error('Error verifying token:', error);
         setIsAuthenticated(false);
      }
   };

   return (
      <Router>
         <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden">
            <Navbar isAuthenticated={isAuthenticated} />
            <Routes>
               <Route path="/" element={<HomeContainer />} />
               <Route path="/bookticket/bus" element={<Bus />} />
               <Route path="/bus/bus-details" element={<Detail />} />
               <Route path="/bookticket" element={<BookTicket />} />
               <Route path="/about" element={<About />} />

               <Route
                  element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
               >
                  <Route path="/modal" element={<Modal />} />
                  <Route
                     path="/bus/bus-details/checkout"
                     element={<Checkout />}
                  />
               </Route>

               <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
