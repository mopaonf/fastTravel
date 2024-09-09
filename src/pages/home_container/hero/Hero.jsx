import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Bus2 from '../../../assets/bus5.png';
import Modal from '../../../components/modal/modal';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
   const [modalOpen, setModalOpen] = useState(false);
   const [isSignup, setIsSignup] = useState(false);

   const handleOpenModal = (signup = false) => {
      setIsSignup(signup);
      setModalOpen(true); // Correct use of navigate function
   };

   return (
      <div className="w-full h-[calc(100vh-8ch)] lg:pl-28 md:pl-16 sm:pl-7 pl-4 mt-[8ch] flex items-center justify-center flex-col hero relative">
         <div className="flex-1 w-full flex items-stretch justify-between gap-12 pb-10">
            <motion.div
               className="w-[35%] h-auto rounded-md flex justify-center flex-col space-y-14"
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, ease: 'linear', delay: 0.2 }}
            >
               <motion.div
                  className="space-y-5"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'linear', delay: 0.2 }}
               >
                  <motion.h1
                     className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-50 leading-[1.15]"
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 2, ease: 'linear', delay: 0.4 }}
                  >
                     Reserve Your Bus
                     <span className="text-violet-400 tracking-wider">
                        {' '}
                        Tickets{' '}
                     </span>
                     Now
                  </motion.h1>
                  <motion.p
                     className="text-md sm:text-base md:text-lg font-normal text-neutral-300 line-clamp-3 text-ellipsis"
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 2, ease: 'linear', delay: 0.6 }}
                  >
                     Find and book your bus tickets with just a few clicks. We
                     offer a wide range of bus routes and schedules to suit your
                     needs.
                  </motion.p>
               </motion.div>

               <button
                  onClick={() => handleOpenModal()}
                  className="w-fit sm:w-max bg-violet-700 hover:bg-violet-800 text-neutral-50 font-medium py-3 px-6 rounded-md ease-in-out duration-300"
               >
                  Reserve Seat Now
               </button>
            </motion.div>

            <div className="w-[70%] h-full rounded-md flex items-end justify-end absolute top-0 -right-40">
               <motion.img
                  className="w-full aspect-[4/2] object-contain"
                  src={Bus2}
                  alt="bus img"
                  initial={{ x: '100%' }}
                  animate={{ x: '3%' }}
                  transition={{ duration: 3, ease: 'easeInOut' }}
               />
            </div>
         </div>

         <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            isSignup={isSignup}
            route={isSignup ? '/api/user/register/' : '/api/token/'}
            method="post"
         />
      </div>
   );
};

export default Hero;

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Bus2 from '../../../assets/bus5.png';
// import Modal from '../../../components/modal/modal';
// import { useNavigate } from 'react-router-dom';

// const Hero = () => {
//    const [modalOpen, setModalOpen] = useState(false);
//    const [isSignup, setIsSignup] = useState(false);

//    const handleOpenModal = (signup = false) => {
//       setIsSignup(signup);
//       setModalOpen(true);
//    };

//    return (
//       <div className="w-full h-[calc(100vh-8ch)] lg:pl-28 md:pl-16 sm:pl-7 pl-4 mt-[8ch] flex items-center justify-center flex-col hero relative">
//          <div className="flex-1 w-full flex items-stretch justify-between gap-12 pb-10">
//             <motion.div
//                className="w-[35%] h-auto rounded-md flex justify-center flex-col space-y-14"
//                initial={{ opacity: 0, y: -10 }}
//                animate={{ opacity: 1, y: 0 }}
//                transition={{ duration: 0.5, ease: 'linear', delay: 0.2 }}
//             >
//                <motion.div
//                   className="space-y-5"
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1, ease: 'linear', delay: 0.2 }}
//                >
//                   <motion.h1
//                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-50 leading-[1.15]"
//                      initial={{ opacity: 0, y: -10 }}
//                      animate={{ opacity: 1, y: 0 }}
//                      transition={{ duration: 2, ease: 'linear', delay: 0.4 }}
//                   >
//                      Reserve Your Bus
//                      <span className="text-violet-400 tracking-wider">
//                         {' '}
//                         Tickets{' '}
//                      </span>
//                      Now
//                   </motion.h1>
//                   <motion.p
//                      className="text-md sm:text-base md:text-lg font-normal text-neutral-300 line-clamp-3 text-ellipsis"
//                      initial={{ opacity: 0, y: -10 }}
//                      animate={{ opacity: 1, y: 0 }}
//                      transition={{ duration: 2, ease: 'linear', delay: 0.6 }}
//                   >
//                      Find and book your bus tickets with just a few clicks. We
//                      offer a wide range of bus routes and schedules to suit your
//                      needs.
//                   </motion.p>
//                </motion.div>

//                <button
//                   onClick={() => handleOpenModal(true)}
//                   className="w-fit sm:w-max bg-violet-700 hover:bg-violet-800 text-neutral-50 font-medium py-3 px-6 rounded-md ease-in-out duration-300"
//                >
//                   Sign Up Now
//                </button>
//                <button
//                   onClick={() => handleOpenModal(false)}
//                   className="w-fit sm:w-max bg-violet-700 hover:bg-violet-800 text-neutral-50 font-medium py-3 px-6 rounded-md ease-in-out duration-300 mt-4"
//                >
//                   Log In
//                </button>
//             </motion.div>

//             <div className="w-[70%] h-full rounded-md flex items-end justify-end absolute top-0 -right-40">
//                <motion.img
//                   className="w-full aspect-[4/2] object-contain"
//                   src={Bus2}
//                   alt="bus img"
//                   initial={{ x: '100%' }}
//                   animate={{ x: '3%' }}
//                   transition={{ duration: 3, ease: 'easeInOut' }}
//                />
//             </div>
//          </div>

//          <Modal
//             isOpen={modalOpen}
//             onClose={() => setModalOpen(false)}
//             isSignup={isSignup}
//             route={isSignup ? '/api/user/register/' : '/api/token/'}
//             method="post"
//          />
//       </div>
//    );
// };

// export default Hero;