import React from 'react';
import Bus2 from '../../assets/bus.png';
import Bus1 from '../../assets/bus1.png';
import Bus3 from '../../assets/bus5.png';
import Bus4 from '../../assets/bus4.png';
import Bus5 from '../../assets/bus7.png';
import Bus6 from '../../assets/bus6.png';

import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Bus = ({item}) => {
   return (
      <div className="w-full lg:px-28 md:px-16 sm:px-7 mt-[13ch] px-4 mb-[8ch] space-y-14">
         
         <div className="w-full grid grid-cols-6 gap-14 bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md px py-5 items-center justify-around">
            <div className="flex items-center gap-x-2.5 col-span-2">
               <input
                  type="text"
                  id="seat"
                  placeholder="Search buses..."
                  name="searchbus"
                  className="w-full apperance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-100/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:bg-neutral-100 dark:focus:bg-neutral-900"
               />
               <button className="bg-violet-600 h-11 px-4 rounded-md text-base text-neutral-50 font-normal">
                  <FaSearch />
               </button>
            </div>

            <div className="col-span-2">
               <select className="w-full apperance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-100/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:bg-neutral-100 dark:focus:bg-neutral-900">
                  <option value="">Select Bus Type</option>
                  <option value="touristbus">Tourist Bus</option>
                  <option value="privatebus">Private Bus</option>
                  <option value="luxerybus">Luxery Bus</option>
                  <option value="deluxebus">Deluxe Bus</option>
               </select>
            </div>

            <div className="col-span-2"></div>
         </div>

         <ul className="w-full">
            <li className="w-full my-4 grid grid-cols-6 gap-14 bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md px py-5 items-center justify-around">
               <div className="grid grid-cols-1">
                  <div>
                     <img
                        src={Bus1}
                        alt="bus img"
                        className="w-full aspect-video object-contain object-center"
                     />
                  </div>
                  <div className='flex justify-center items-center my-2 bg-violet-600 h-10' >Mogamo</div>
               </div>
               <div className="col-span-2 ">
                  <div className="w-full flex items-center gap-y-3">
                     <div className="w-fit text-base font-medium">
                        From:- <span className="ml-1.5">Location 1</span>
                     </div>
                     <div className="flex-1">
                        <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80"></div>
                     </div>
                     <div className="w-fit text-base font-medium">
                        To:- <span className="ml-1.5">Location 4</span>
                     </div>
                  </div>
                  <div className="w-fit text-base font-medium my-8">
                     Number of seats avialable: -
                  </div>
               </div>
               <div>
                  <ul>
                     <li className="flex justify-center items-center my-2">
                        Option 1
                     </li>
                     <li className="flex justify-center items-center my-2">
                        Option 2
                     </li>
                     <li className="flex justify-center items-center my-2">
                        Option 3
                     </li>
                  </ul>
               </div>
               <div className="col-span-2 flex flex-col justify-center items-center">
                  <Link to={'/bus/bus-details'}>
                     <motion.button className="w-fit bg-violet-700 hover:bg-violet-800 text-neutral-50 font-medium py-3 px-24 rounded-md ease-in-out duration-300">
                        Select Bus
                     </motion.button>
                  </Link>
               </div>
            </li>
            <li className="w-full my-4 grid grid-cols-6 gap-14 bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md px py-5 items-center justify-around">
            <div className="grid grid-cols-1">
                  <div>
                     <img
                        src={Bus1}
                        alt="bus img"
                        className="w-full aspect-video object-contain object-center"
                     />
                  </div>
                  <div className='flex justify-center items-center my-2 bg-violet-600 h-10' >Buea Voyages</div>
               </div>
               <div className="col-span-2 ">
                  <div className="w-full flex items-center gap-y-3">
                     <div className="w-fit text-base font-medium">
                        From:- <span className="ml-1.5">Location 1</span>
                     </div>
                     <div className="flex-1">
                        <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80"></div>
                     </div>
                     <div className="w-fit text-base font-medium">
                        To:- <span className="ml-1.5">Location 4</span>
                     </div>
                  </div>
                  <div className="w-fit text-base font-medium my-8">
                     Number of seats avialable: -
                  </div>
               </div>
               <div>
                  <ul>
                     <li className="flex justify-center items-center my-2">
                        Option 1
                     </li>
                     <li className="flex justify-center items-center my-2">
                        Option 2
                     </li>
                     <li className="flex justify-center items-center my-2">
                        Option 3
                     </li>
                  </ul>
               </div>
               <div className="col-span-2 flex flex-col justify-center items-center">
                  <Link to={'/bus/bus-details'}>
                     <motion.button className="w-fit bg-violet-700 hover:bg-violet-800 text-neutral-50 font-medium py-3 px-24 rounded-md ease-in-out duration-300">
                        Select Bus
                     </motion.button>
                  </Link>
               </div>
            </li>
            <li className="w-full my-4 grid grid-cols-6 gap-14 bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md px py-5 items-center justify-around">
            <div className="grid grid-cols-1">
                  <div>
                     <img
                        src={Bus1}
                        alt="bus img"
                        className="w-full aspect-video object-contain object-center"
                     />
                  </div>
                  <div className='flex justify-center items-center my-2 bg-violet-600 h-10' >United Express</div>
               </div>
               <div className="col-span-2 ">
                  <div className="w-full flex items-center gap-y-3">
                     <div className="w-fit text-base font-medium">
                        From:- <span className="ml-1.5">Location 1</span>
                     </div>
                     <div className="flex-1">
                        <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80"></div>
                     </div>
                     <div className="w-fit text-base font-medium">
                        To:- <span className="ml-1.5">Location 4</span>
                     </div>
                  </div>
                  <div className="w-fit text-base font-medium my-8">
                     Number of seats avialable: -
                  </div>
               </div>
               <div>
                  <ul>
                     <li className="flex justify-center items-center my-2">
                        Option 1
                     </li>
                     <li className="flex justify-center items-center my-2">
                        Option 2
                     </li>
                     <li className="flex justify-center items-center my-2">
                        Option 3
                     </li>
                  </ul>
               </div>
               <div className="col-span-2 flex flex-col justify-center items-center">
                  <Link to={'/bus/bus-details'}>
                     <motion.button className="w-fit bg-violet-700 hover:bg-violet-800 text-neutral-50 font-medium py-3 px-24 rounded-md ease-in-out duration-300">
                        Select Bus
                     </motion.button>
                  </Link>
               </div>
            </li>
            <li className="w-full my-4 grid grid-cols-6 gap-14 bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md px py-5 items-center justify-around">
            <div className="grid grid-cols-1">
                  <div>
                     <img
                        src={Bus1}
                        alt="bus img"
                        className="w-full aspect-video object-contain object-center"
                     />
                  </div>
                  <div className='flex justify-center items-center my-2 bg-violet-600 h-10' >Musango</div>
               </div>
               <div className="col-span-2 ">
                  <div className="w-full flex items-center gap-y-3">
                     <div className="w-fit text-base font-medium">
                        From:- <span className="ml-1.5">Location 1</span>
                     </div>
                     <div className="flex-1">
                        <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80"></div>
                     </div>
                     <div className="w-fit text-base font-medium">
                        To:- <span className="ml-1.5">Location 4</span>
                     </div>
                  </div>
                  <div className="w-fit text-base font-medium my-8">
                     Number of seats avialable: -
                  </div>
               </div>
               <div>
                  <ul>
                     <li className="flex justify-center items-center my-2">
                        Option 1
                     </li>
                     <li className="flex justify-center items-center my-2">
                        Option 2
                     </li>
                     <li className="flex justify-center items-center my-2">
                        Option 3
                     </li>
                  </ul>
               </div>
               <div className="col-span-2 flex flex-col justify-center items-center">
                  <Link to={'/bus/bus-details'}>
                     <motion.button className="w-fit bg-violet-700 hover:bg-violet-800 text-neutral-50 font-medium py-3 px-24 rounded-md ease-in-out duration-300">
                        Select Bus
                     </motion.button>
                  </Link>
               </div>
            </li>
         </ul>
      </div>
   );
};

export default Bus;

{
   /* <Link to={"/bus/bus-details"} className='w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4'></Link>
          <img src={Bus1} alt="bus img" className="w-11 aspect-video object-contain object-center" />
          <div className="px-3 py-4 space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                Common Bus
              </h1>
              <div className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                60 passengers
              </div>
            </div>
          </div>
        </Link> 
        
        */
}
