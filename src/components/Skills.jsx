import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Firebase from '../assets/firebase.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col
         justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline 
                border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 cursor-pointer'>
            <div className='shadow-md shadow-[#ff4800] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#73e9e9] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#f4ff5f] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#83bbff] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#eff6ff] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Github} alt="HTML icon" />
                <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#9dff5c] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                <p className='my-4'>NODE</p>
                </div>
                <div className='shadow-md shadow-[#5bb96b] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                <p className='my-4'>MONGO DB</p>
                </div>
                <div className='shadow-md shadow-[#fffcd2] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Firebase} alt="HTML icon" />
                <p className='my-4'>FIREBASE</p>
                </div>
                
            </div>
           </div>
        </div>
  )
}

export default Skills
