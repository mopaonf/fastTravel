import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
//import Sidebar from './components/sidebar/Sidebar';

function App() {
   return (
      <>
         <Router>
            <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden">
               <Navbar />
               <Routes>
                  <Route path="/" element={<HomeContainer />} />
                  <Route
                     path="/bookticket/bus"
                     element={
                        <ProtectedRoute>
                           <Bus />
                        </ProtectedRoute>
                     }
                  />
                  <Route
                     path="/bus/bus-details"
                     element={
                        <ProtectedRoute>
                           <Detail />
                        </ProtectedRoute>
                     }
                  />
                  <Route
                     path="/bookticket"
                     element={
                        <ProtectedRoute>
                           <BookTicket />
                        </ProtectedRoute>
                     }
                  />
                 
                  <Route path="/modal" element={<Modal />} />
                  <Route path="*" element={<NotFound />}/>
                  <Route
                     path="/bus/bus-details/checkout"
                     element={<Checkout />}
                  />
               </Routes>

               <Footer />
            </div>
         </Router>
      </>
   );
}

export default App;

<Router> </Router>;
