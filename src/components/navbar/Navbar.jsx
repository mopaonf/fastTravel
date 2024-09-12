import React from 'react';
import { Link } from 'react-router-dom';
import { LiaTimesSolid } from 'react-icons/lia';
import { FaBars, FaPhone, FaUserCircle } from 'react-icons/fa';
import Theme from '../theme/Theme';

const Navbar = ({ isAuthenticated, onLogout }) => {
   const [open, setOpen] = React.useState(false);

   const navLinks = [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/bus', label: 'Bus' },
   ];

   const handleClick = () => {
      setOpen(!open);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div className="w-full h-[8ch] bg-neutral-100 dark:bg-neutral-900 flex items-center md:flex-row lg:px-28 md:px-16 sm:px-7 px-4 fixed top-0 z-50">
         <Link to={'/'} className="mr-16">
            <img src="/path/to/your/logo.jpg" alt="logo" className="w-28 h-auto object-contain" />
         </Link>

         <button
            onClick={handleClick}
            className="flex-1 lg:hidden text-neutral-600 dark:text-neutral-300 ease-in-out duration-300 flex items-center justify-end"
         >
            {open ? (
               <LiaTimesSolid className="text-xl" />
            ) : (
               <FaBars className="text-xl" />
            )}
         </button>

         {/* Navigation links */}
         <div
            className={`${
               open
                  ? 'flex flex-col absolute top-14 left-0 w-full h-auto bg-neutral-100 dark:bg-neutral-900 shadow-md rounded-md p-4 md:flex-row md:items-center md:static md:shadow-none md:p-0'
                  : 'hidden md:flex'
            } flex-1 md:relative md:flex-row md:gap-x-5 md:gap-y-0 md:items-center justify-between`}
         >
            <ul className="list-none flex md:flex-row flex-col items-start md:items-center gap-4 md:gap-5 text-base text-neutral-600 dark:text-neutral-500 font-medium">
               {navLinks.map((link, index) => (
                  <li key={index}>
                     <Link
                        to={link.href}
                        onClick={handleClose}
                        className="hover:text-violet-600 ease-in-out duration-300"
                     >
                        {link.label}
                     </Link>
                  </li>
               ))}
            </ul>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-5 text-base font-medium text-neutral-800">
               {isAuthenticated ? (
                  <div className="flex items-center gap-4">
                     <div className="relative">
                        <img 
                           src="/path/to/profile-picture.jpg" 
                           alt="Profile" 
                           className="w-8 h-8 rounded-full object-cover"
                        />
                     </div>
                     <button 
                        onClick={onLogout}
                        className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition-colors duration-300"
                     >
                        Logout
                     </button>
                  </div>
               ) : (
                  <div className="relative bg-violet-600 rounded-md px-8 py-2 w-full md:w-fit cursor-pointer">
                     <div className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-[-1.5rem] w-9 h-9 rounded-full bg-violet-600 border-4 border-neutral-100 dark:border-neutral-900 flex items-center justify-center">
                        <FaPhone className="text-neutral-50 text-sm" />
                     </div>
                     <div className="space-y-0.5 text-center md:text-left">
                        <p className="text-xs text-neutral-200 font-light">
                           Need Help?
                        </p>
                        <p className="text-xs font-normal text-neutral-50 tracking-wide">
                           +237 677018361
                        </p>
                     </div>
                  </div>
               )}

               <Theme />
            </div>
         </div>
      </div>
   );
};

export default Navbar;