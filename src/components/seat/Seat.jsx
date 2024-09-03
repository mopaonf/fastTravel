import React, { useState } from 'react';
import { GiSteeringWheel } from 'react-icons/gi';
import { MdOutlineChair } from 'react-icons/md';
import { RiMoneyRupeeCircleLine } from 'react-icons/ri';

const Seat = ({ seatNumber, isSelected, onClick }) => {
   return (
      <MdOutlineChair
         className={`text-3xl -rotate-90 cursor-pointer ${
            isSelected ? 'text-violet-600' : 'text-neutral-600'
         }`}
         onClick={onClick}
      />
   );
};

const BusSeatLayout = () => {
   const totalSeats = 41;
   const [selectedSeats, setSelectedSeats] = useState([]);

   const handleSeatClick = (seatNumber) => {
      if (selectedSeats.includes(seatNumber)) {
         setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
      } else {
         if (selectedSeats.length < 10) {
            setSelectedSeats([...selectedSeats, seatNumber]);
         } else {
            alert('You can only select a maximum of 10 seats.');
         }
      }
   };

   const renderSeats = () => {
      let seats = [];
      for (let i = 1; i <= totalSeats; i++) {
         seats.push(
            <Seat
               key={i}
               seatNumber={i}
               isSelected={selectedSeats.includes(i)}
               onClick={() => handleSeatClick(i)}
            />
         );
      }
      return seats;
   };

   return (
      <div className="space-y-5">
         <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
            Choose a seat
         </h2>

         {/* Seat Layout */}
         <div className="w-full flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-1 flex gap-x-5 items-stretch">
               <div className="w-10 h-full border-r-2 border-dashed border-neutral-300 dark:border-neutral-800">
                  <GiSteeringWheel className="text-3xl mt-40 text-violet-600 -rotate-90" />
               </div>

               <div className="flex flex-col items-center flex-1">
                  <div className="space-y-4">
                     <div className="w-full grid grid-cols-10 gap-x-3">
                        {renderSeats().slice(0, 10)}
                     </div>
                     <div className="w-full grid grid-cols-10 gap-x-3">
                        {renderSeats().slice(10, 20)}
                     </div>
                     <div className="w-full grid grid-cols-10 gap-x-3">
                        <div className="col-span-9"></div>
                        {renderSeats().slice(20, 21)}
                     </div>
                     <div className="w-full grid grid-cols-10 gap-x-3">
                        {renderSeats().slice(21, 31)}
                     </div>
                     <div className="w-full grid grid-cols-10 gap-x-3">
                        {renderSeats().slice(31, 41)}
                     </div>
                  </div>
               </div>
            </div>

            
            <div className="space-y-3">
               <div className="flex items-center gap-x-2">
                  <MdOutlineChair className="text-lg text-neutral-500 -rotate-90" />
                  <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                     Available
                  </p>
               </div>
               <div className="flex items-center gap-x-2">
                  <MdOutlineChair className="text-lg text-red-500 -rotate-90" />
                  <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                     Booked
                  </p>
               </div>
               <div className="flex items-center gap-x-2">
                  <MdOutlineChair className="text-lg text-violet-500 -rotate-90" />
                  <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                     Selected
                  </p>
               </div>
            </div>
         </div>

         {/* Selected Seats */}
         {selectedSeats.length > 0 && (
            <div className="mt-10">
               <h3 className="text-lg font-bold">Selected Seats:</h3>
               <div className="flex flex-wrap">
                  {selectedSeats.map((seat) => (
                     <div
                        key={seat}
                        className="w-10 h-10 rounded-md m-1.5 text-lg font-medium bg-violet-600/30 flex items-center justify-center"
                     >
                        {seat}
                     </div>
                  ))}
               </div>
            </div>
         )}

         {/* Calculate Price */}
         {selectedSeats.length > 0 && (
            <div className="mt-10">
               <h3 className="text-lg font-bold">Total Fare:</h3>
               <p className="text-lg font-medium">
                  Rs. {selectedSeats.length * 10000}
               </p>
               <span className="text-sm text-neutral-400 dark:text-neutral-600 font-normal">
                  (Including all taxes)
               </span>
            </div>
         )}
      </div>
   );
};

export default BusSeatLayout;
