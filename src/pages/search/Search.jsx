import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
   const [from, setFrom] = useState('');
   const [to, setTo] = useState('');

   const locations = [
      { value: 'location1', label: 'Yaounde' },
      { value: 'location2', label: 'Douala' },
      { value: 'location3', label: 'Buea' },
      { value: 'location4', label: 'Bamenda' },
   ];

   const handleFromChange = (e) => {
      setFrom(e.target.value);
      if (e.target.value === to) {
         setTo(''); // Reset the 'to' field if the same location is selected
      }
   };

   const handleToChange = (e) => {
      setTo(e.target.value);
   };

   const filteredLocations = locations.filter((location) => location.value !== from);

   return (
      <div className="w-full lg:ps-28 md:px-16 sm:px-7 px-4 my-[8ch]">
         <div className="w-full bg-neutral-100 rounded-md dark:bg-neutral-900/40 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 items-end">
               <div className="">
                  <label htmlFor="from" className="block mb-2 font-semibold">
                     From
                  </label>
                  <select
                     name="from"
                     id="from"
                     value={from}
                     onChange={handleFromChange}
                     className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-100/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:bg-neutral-100 dark:focus:bg-neutral-900"
                  >
                     <option value="">Select Location</option>
                     {locations.map((location) => (
                        <option key={location.value} value={location.value}>
                           {location.label}
                        </option>
                     ))}
                  </select>
               </div>

               <div className="">
                  <label htmlFor="to" className="block mb-2 font-semibold">
                     To
                  </label>
                  <select
                     name="to"
                     id="to"
                     value={to}
                     onChange={handleToChange}
                     className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-100/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:bg-neutral-100 dark:focus:bg-neutral-900"
                  >
                     <option value="">Select Location</option>
                     {filteredLocations.map((location) => (
                        <option key={location.value} value={location.value}>
                           {location.label}
                        </option>
                     ))}
                  </select>
               </div>

               <div className="">
                  <label htmlFor="date" className="block mb-2 font-semibold">
                     Choose Date
                  </label>
                  <input
                     type="date"
                     id="date"
                     name="date"
                     className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-100/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:bg-neutral-100 dark:focus:bg-neutral-900"
                  />
               </div>

               <div className="">
                  <label htmlFor="time" className="block mb-2 font-semibold">
                     Choose Time
                  </label>
                  <input
                     type="time"
                     id="time"
                     name="time"
                     className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-100/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:bg-neutral-100 dark:focus:bg-neutral-900"
                  />
               </div>

               <div className="">
                  <label htmlFor="seat" className="block mb-2 font-semibold">
                     Choose Seats
                  </label>
                  <input
                     type="number"
                     id="seat"
                     placeholder="Enter seat"
                     name="seat"
                     className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-100/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:bg-neutral-100 dark:focus:bg-neutral-900"
                  />
               </div>

               <div className="col-span-full sm:col-span-2 lg:col-span-1">
                  <Link to={'./bus'}>
                     <button className="w-full px-4 h-12 bg-violet-600 text-neutral-50 text-base font-base font-normal rounded-md">
                        Check Availability
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Search;