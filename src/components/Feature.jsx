import React from 'react';
import { features } from '../constants';

const Feature = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-{800px}'>
       <div className="text-center">
        <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm
        font-medium px-2 py-1 uppercase'>Feature
        </span>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-5 lg:mt-10 tracking-wide'>
        Easily build
        <span className='bg-gradient-to-r from-orange-500 to to-red-800 text-transparent bg-clip-text'>
        {" "}your code
        </span>
        </h2>
       </div>
    <div className='flex flex-wrap mt-5 lg:mt-20 mx-10'>
    {
        features.map((feature, index)=>(
            <div key={index} className='w-full sm:1/2 lg:w-1/3'>
              <div className='flex'>
                <div className='flex bg-neutral-900 text-orange-700 h-10 w-10 mx-10
                  p-2 justify-between items-center rounded-full'>
                    {feature.icon}
              </div>
           <div>
              <h5 className='mt-1 mb-2 text-md'>{feature.text}</h5>
              <p className='p-2 mb-10 text-sm text-neutral-500 text-justify'>{feature.description}
              </p>
            </div>
            </div>
            </div>
        ))}
    </div>
    </div>
  );
};

export default Feature;
