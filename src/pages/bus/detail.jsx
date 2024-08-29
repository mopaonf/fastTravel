import React from 'react'


import Bus from '../../assets/bus9.png';
import {  FaLocationPin, FaMapPin, FaPager, FaPaperclip, FaStar, FaThumbtack } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Destination from '../../components/destination/Destination';
import DepartTime from '../../components/departtime/DepartTime';
import Seat from '../../components/seat/Seat';
import { FaUserPlus } from 'react-icons/fa';

const detail = () => {
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 mt-[13ch] px-4 mb-[10ch]'>
      <div className="w-full grid grid-cols-2 gap-16 items-center">
        <div className="col-span-1 space-y-8">
          <img src={Bus} alt="detail img" className="w-full aspect-[3/2] rounded-md object-contain" />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
              Premium Vip Bus
              <span className="text-base font-normal text-neutral-400 dark:text-neutral-50">
                (Bus Number Plate)
              </span>
            </h1>

            <div className="flex items-center gap-x-2">
              <div className="flex items-center gap-x-1 text-sm text-yellow-500 dark:text-yellow-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaPager />
              </div>
              <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                (4.5)
              </p>
            </div>

            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, laboriosam itaque! Eius nemo fugiat enim reiciendis impedit excepturi, nihil magni exercitationem, quod, culpa dicta numquam! Quia possimus beatae cupiditate iste?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius maiores velit eos aliquid nemo adipisci earum, eaque consequuntur. Doloremque quidem ducimus est vitae ut harum iure maiores earum delectus.
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="space-y-6">
            
            <Destination />
           
            <DepartTime />
          </div>
          
          <Seat />
          <div className="flex">
            <Link to={'/bus/bus-details/checkout'} className='w-fit bg-violet-600 text-neutral-50 font-medium text-base px-6 py-2 my-12 rounded-md hover:bg-violet-700 ease-in-out duration-300'>
              Processed to Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default detail