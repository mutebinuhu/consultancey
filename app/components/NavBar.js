
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav
      className="bg-gray-800 p-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl"><Image src="/images/propertyicon.png" height={50} width={50}/></div>
        <div className="flex space-x-4 hidden md:block">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white">Contact</a>
        </div>
        <div className='md:hidden block'>
      <Image src="/images/humberger.png" width={50} height={50} quality={100}className='text-white'/>
      </div>
      </div>
     
    </nav>
  );
};

export default NavBar;
