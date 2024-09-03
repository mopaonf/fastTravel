import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Save from '../../../assets/save.png';
import { FaCopy } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Offer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('GTECH08')
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.log('Failed to copy', err);
      });
  };

  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mb-[8ch]'>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-medium">
          Special Offer
        </h1>
        <Link to="/offer" className="text-violet-600">View All</Link>
      </div>

      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
        }}
      >
        {[...Array(2)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-auto flex flex-col sm:flex-row items-center bg-zinc-200/30 dark:bg-zinc-800/20 p-4 md:p-8 rounded-xl shadow-md">
              <img
                src={Save}
                alt="Offer"
                className="w-full sm:w-40 lg:w-52 object-contain object-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6"
              />
              <div className="flex flex-1 flex-col space-y-5 text-center sm:text-left">
                <h1 className="text-lg lg:text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                  Get 40% off on your first booking
                </h1>
                <div className="flex items-center justify-center sm:justify-start gap-x-5">
                  <div className="w-fit border border-dashed px-4 py-1 border-neutral-300 dark:border-neutral-700 bg-violet-500/10 dark:bg-violet-800/5 rounded-md">
                    {copied ? (
                      <span className="text-green-600">Copied</span>
                    ) : (
                      <span className="text-violet-600">GTECH08</span>
                    )}
                  </div>
                  <button onClick={handleCopy} className="text-xl text-violet-600">
                    <FaCopy />
                  </button>
                </div>
                <p className="text-sm text-neutral-400 dark:text-neutral-600 font-normal">
                  Valid till: <span className="text-sm font-medium">20th August</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Offer;