import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import eric from '../assets/eric.jpg';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b bg-[#0a192f] '>
      {/* Container */}
      <div className='max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row '>

      <div className='max-w-screen-lg mx-auto  flex flex-col justify-center h-full'>
        <p className='text-pink-600 '>Hi, my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Pemba Eric</h1>
        <h2 className='tect-4xl sm:text-7cl font-bold text-[#8892b0]'>I'm a front-End Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I have recently graduated with my master's degree. I'm focused on building responsive full-stack web applications</p>
        <div>
          <button className='text-white group border-2  px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded'>
            View Project
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
      <div>
        <img src={eric} alt="eric pemba" className='rounded-2xl mr-auto h-2/3 md:w-full shadow-[#83898b] shadow-lg bg-gray-800 contant'/>
      </div>
    </div>
    </div>
  );
}

export default Home;
