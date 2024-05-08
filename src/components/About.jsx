import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I'm Eric, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm passionate about refining my skills and contributing to the world of software development. I specialize in creating impactful software solutions that elevate user experiences. 
              With a focus on front-end development, I'm eager to collaborate on projects that range from individual endeavors to small businesses and beyond. Imagine having a dedicated developer at your service—what exciting projects could we embark on together?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
