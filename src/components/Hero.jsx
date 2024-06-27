import React from 'react';
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
    <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
    VirtualR build tools 
    <span className='bg-gradient-to-r from-orange-500 to to-red-800 text-transparent bg-clip-text'>
     {" "}  for developers
    </span>
    </h1>
    <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
         Known for their SteamVR platform and the Valve Index headset, Valve is a 
         significant player in the VR gaming space!
    </p>
    </div>
  )
}

export default Hero
