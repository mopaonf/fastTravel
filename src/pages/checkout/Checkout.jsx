import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 mt-[13ch] px-4 mb-[8ch] space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-16 items-start">
        <div className="lg:col-span-3 space-y-7 lg:pr-20">
          <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
            Passenger Information
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="fullname" className="block mb-2 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="e.g., Mopao Lawo"
                name="fullname"
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-100/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:bg-neutral-100 dark:focus:bg-neutral-900"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="e.g., mopaolawo@gmail.com"
                name="email"
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-100/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:bg-neutral-100 dark:focus:bg-neutral-900"
              />
              <small className="block mt-1 font-normal text-xs text-neutral-500 dark:text-neutral-600">
                Tickets will be sent to this email address.
              </small>
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 font-semibold">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="e.g., 677015623"
                name="phone"
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-100/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:bg-neutral-100 dark:focus:bg-neutral-900"
              />
            </div>
            <div>
              <label htmlFor="altphone" className="block mb-2 font-semibold">
                Confirm Phone Number
              </label>
              <input
                type="text"
                id="altphone"
                placeholder="e.g., 677015623"
                name="altphone"
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-100/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:bg-neutral-100 dark:focus:bg-neutral-900"
              />
            </div>
          </form>
        </div>

        {/* Booking Status Section */}
        <div className="lg:col-span-2 space-y-8 lg:mt-0 mt-10">
          <div className="bg-neutral-200/50 dark:bg-neutral-900/70 rounded-md py-5 px-7">
            <h2 className="text-xl text-center text-neutral-800 dark:text-neutral-100 font-medium border-b-2 border-neutral-200 dark:border-neutral-800/40 pb-3 mb-4">
              Booking Status
            </h2>
            <div className="space-y-8 pb-3">
              <div className="space-y-4">
                <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                  Your Trip
                </h6>
                <div className="w-full flex items-center gap-y-3">
                  <div className="w-fit text-base font-medium">
                    From: <span className="ml-1.5">Location 1</span>
                  </div>
                  <div className="flex-1">
                    <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80"></div>
                  </div>
                  <div className="w-fit text-base font-medium">
                    To: <span className="ml-1.5">Location 4</span>
                  </div>
                </div>

                <div className="w-full flex items-center gap-x-3">
                  <div className="w-fit text-base font-medium">
                    Arrival: <span className="ml-1.5">04:00 AM</span>
                  </div>
                  <div className="flex-1">
                    <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80"></div>
                  </div>
                  <div className="w-fit text-base font-medium">
                    Departure: <span className="ml-1.5">08:00 PM</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-full flex items-center justify-between">
                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                      Number of Seats Reserved
                    </h6>
                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                      10 <span className="text-xs">(Driver Included)</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="div flex items-center justify-center ">
              <Link
                     to={'/bus/bus-details/checkout/payment'}
                     className="w-fit bg-violet-600 text-neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-violet-700 ease-in-out duration-300"
                  >
                     Proceed to Checkout
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;