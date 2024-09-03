import React from 'react';
import Bus from '../../assets/bus9.png';
import { FaPager, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Seat from '../../components/seat/Seat';

const Detail = () => {
   return (
      <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-12 mb-10">
         <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="space-y-6 md:space-y-8">
               <img
                  src={Bus}
                  alt="detail img"
                  className="w-full aspect-[3/2] rounded-md object-contain"
               />
               <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50">
                     Premium Vip Bus
                     <span className="text-sm md:text-base font-normal text-neutral-400 dark:text-neutral-50">
                        (Bus Number Plate)
                     </span>
                  </h1>

                  <div className="flex items-center gap-x-2">
                     <div className="flex items-center gap-x-1 text-sm md:text-base text-yellow-500 dark:text-yellow-600">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaPager />
                     </div>
                     <p className="text-neutral-900 dark:text-neutral-200 text-sm md:text-base font-normal">
                        (4.5)
                     </p>
                  </div>

                  <p className="text-neutral-900 dark:text-neutral-200 text-sm md:text-base font-normal">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Dolorem, laboriosam itaque! Eius nemo fugiat enim
                     reiciendis impedit excepturi, nihil magni exercitationem,
                     quod, culpa dicta numquam! Quia possimus beatae cupiditate
                     iste? Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Nisi eius maiores velit eos aliquid nemo adipisci
                     earum, eaque consequuntur. Doloremque quidem ducimus est
                     vitae ut harum iure maiores earum delectus.
                  </p>
               </div>
            </div>

            <div className="space-y-6 xl:pt-40">
               <Seat />
               <div className="flex justify-center">
                  <Link
                     to={'/bus/bus-details/checkout'}
                     className="w-fit bg-violet-600 text-neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-violet-700 ease-in-out duration-300"
                  >
                     Proceed to Checkout
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Detail;
