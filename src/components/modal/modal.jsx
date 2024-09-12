import React, { useState } from 'react';
import Logo from '../../assets/logo.jpg'; // Adjust the path as needed
import LoadingIndicator from '../loadingindicator/LoadingIndicator';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose }) => {
   const [isSignup, setIsSignup] = useState(true);
   const [username, setUsername] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');
   const navigate = useNavigate();

   if (!isOpen) return null;

   const handleFormSwitch = () => {
      setIsSignup(!isSignup);
      setError('');
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError('');

      const url = isSignup
         ? 'http://127.0.0.1:8000/auth/register/'
         : 'http://127.0.0.1:8000/auth/login/';
      const method = isSignup ? 'POST' : 'POST';
      const body = JSON.stringify({ username, email, phoneNumber, password });

      try {
         const response = await fetch(url, {
            method,
            headers: {
               'Content-Type': 'application/json',
            },
            body,
         });

         if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
         }

         const result = await response.json();
         console.log(
            `${isSignup ? 'Registration' : 'Login'} successful:`,
            result
         );

         alert(
            isSignup ? 'Registration successful!' : `Logged in successfully!`
         );
         navigate('/bookticket')
         setIsSignup(false); // Switch to login form after signup
      } catch (error) {
         setError(error.message);
      } finally {
         setLoading(false);
      }
   };

   return (
      <div
         className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
         onClick={onClose}
      >
         <div
            className="bg-white dark:bg-neutral-800 p-8 rounded-lg w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
         >
            <button
               className="absolute top-2 right-2 text-neutral-600 dark:text-neutral-300 text-xl"
               onClick={onClose}
            >
               &times;
            </button>
            <div className="text-center mb-6">
               <img
                  src={Logo}
                  alt="Logo"
                  className="w-24 h-auto mx-auto mb-4"
               />
               <h2 className="text-2xl font-bold mb-4">
                  {isSignup ? 'Sign Up' : 'Log In'}
               </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
               {error && <p className="text-red-500 text-center">{error}</p>}
               {isSignup && (
                  <>
                     <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1">
                           Email
                        </label>
                        <input
                           type="email"
                           placeholder="Email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500 text-black"
                           required
                        />
                     </div>
                     <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1">
                           Phone Number
                        </label>
                        <input
                           type="tel"
                           placeholder="Phone Number"
                           value={phoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)}
                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500 text-black"
                           required
                        />
                     </div>
                  </>
               )}
               <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Username</label>
                  <input
                     type="text"
                     placeholder="Username"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500 text-black"
                     required
                  />
               </div>
               <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Password</label>
                  <input
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                     required
                  />
               </div>
               {loading && <LoadingIndicator />}
               <button
                  type="submit"
                  className="w-full bg-violet-700 hover:bg-violet-800 text-white py-3 rounded-lg transition-colors duration-300"
                  disabled={loading}
               >
                  {isSignup ? 'Sign Up' : 'Log In'}
               </button>
               <div className="flex justify-between items-center text-sm mt-4">
                  <button
                     type="button"
                     className="text-violet-600 hover:underline"
                     onClick={handleFormSwitch}
                  >
                     {isSignup
                        ? 'Already have an account? Log In'
                        : 'Need an account? Sign Up'}
                  </button>
                  <span className="text-gray-500">
                     © {new Date().getFullYear()}
                  </span>
               </div>
               <div className="text-center text-sm mt-2">
                  <a href="#" className="text-violet-600 hover:underline">
                     Forgot Password?
                  </a>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Modal;
