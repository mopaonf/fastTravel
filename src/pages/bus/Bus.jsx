import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Bus1 from '../../assets/bus1.png'; // Example image

const Bus = () => {
   return (
      <div className="flex flex-col lg:flex-row w-full lg:px-28 md:px-16 sm:px-7 mt-[13ch] px-4 mb-[8ch] space-y-12 lg:space-y-0 lg:space-x-12">
         {/* Sidebar for Filters */}
         <aside className="w-full lg:w-1/4 bg-neutral-200/60 dark:bg-neutral-900/40 p-4 rounded-md space-y-6">
            <div>
               <h3 className="text-lg font-medium mb-2">Bus Type</h3>
               <select className="w-full appearance-none text-neutral-800 dark:text-neutral-100 bg-neutral-100/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:bg-neutral-100 dark:focus:bg-neutral-900">
                  <option value="">Select Bus Type</option>
                  <option value="touristbus">T.ourist Bus</option>
                  <option value="privatebus">Private Bus</option>
                  <option value="luxurybus">Luxury Bus</option>
                  <option value="deluxebus">Deluxe Bus</option>
               </select>
            </div>

            <div>
               <h3 className="text-lg font-medium mb-2">Price Range</h3>
               <input
                  type="range"
                  min="0"
                  max="500"
                  step="10"
                  className="w-full"
               />
               <div className="flex justify-between text-sm mt-1">
                  <span>FCFA0</span>
                  <span>FCFA15000</span>
               </div>
            </div>

            <div>
               <h3 className="text-lg font-medium mb-2">Features</h3>
               <div className="flex flex-col space-y-3">
                  <label className="flex items-center">
                     <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-violet-600 border-neutral-300 dark:border-neutral-700"
                     />
                     <span className="ml-2">AC</span>
                  </label>
                  <label className="flex items-center">
                     <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-violet-600 border-neutral-300 dark:border-neutral-700"
                     />
                     <span className="ml-2">LCD Screen</span>
                  </label>
                  <label className="flex items-center">
                     <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-violet-600 border-neutral-300 dark:border-neutral-700"
                     />
                     <span className="ml-2">WiFi</span>
                  </label>
               </div>
            </div>
         </aside>

         {/* Main Content - Bus List */}
         <div className="w-full lg:w-3/4">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md px-4 py-5">
               <div className="flex items-center gap-x-2.5 col-span-2 md:col-span-2">
                  <input
                     type="text"
                     placeholder="Search buses..."
                     className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-100/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:bg-neutral-100 dark:focus:bg-neutral-900"
                  />
                  <button className="bg-violet-600 h-12 px-4 rounded-md text-base text-neutral-50">
                     <FaSearch />
                  </button>
               </div>

               <div className="col-span-1">
                  <select className="w-full appearance-none text-neutral-800 dark:text-neutral-100 bg-neutral-100/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:bg-neutral-100 dark:focus:bg-neutral-900">
                     <option value="">Sort By</option>
                     <option value="price">Price</option>
                     <option value="popularity">Popularity</option>
                  </select>
               </div>
            </div>

            {/* Bus List Section */}
            <ul className="w-full space-y-6 mt-6">
               {[1, 2, 3, 4].map((bus) => (
                  <li
                     key={bus}
                     className="w-full grid grid-cols-1 md:grid-cols-6 gap-6 bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md p-5"
                  >
                     {/* Bus Image and Name */}
                     <div className="md:col-span-2 flex flex-col items-center md:items-start">
                        <img
                           src={Bus1}
                           alt="Bus"
                           className="w-full max-w-xs aspect-video object-cover rounded-md"
                        />
                        <div className=" text-neutral-50 font-medium py-2 px-4 mt-3 rounded-md text-center w-full md:w-auto">
                           Bus Name
                        </div>
                     </div>

                     {/* Bus Details */}
                     <div className="md:col-span-3 space-y-3">
                        <div className="w-full flex items-center">
                           <span className="font-medium">From:</span>
                           <span className="ml-2">Location 1</span>
                        </div>
                        <div className="w-full flex items-center">
                           <span className="font-medium">To:</span>
                           <span className="ml-2">Location 2</span>
                        </div>
                        <div className="w-full flex items-center">
                           <span className="font-medium">Available Seats:</span>
                           <span className="ml-2">10</span>
                        </div>
                     </div>

                     {/* Action Button */}
                     <div className="md:col-span-1 flex justify-center items-center">
                        <Link to={'/bus/bus-details'}>
                           <motion.button
                              whileHover={{ scale: 1.05 }}
                              className=" bg-violet-700 hover:bg-violet-800 text-neutral-50 font-medium xl:mr-28 py-2 px-4 mt-3 rounded-md text-center min-w-72 md:w-auto"
                           >
                              Select Bus
                           </motion.button>
                        </Link>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Bus;