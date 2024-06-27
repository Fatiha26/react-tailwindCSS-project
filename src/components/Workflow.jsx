import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import {checklistItems} from '../constants';
import codeImg from "../assets/code.jpg";

const Workflow = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-5xl mt-6 lg:mt-10 tracking-wide text-center'>
           Accelerate your
        <span className='bg-gradient-to-r from-orange-500 to to-red-800 text-transparent bg-clip-text'>
        {" "}your coding workflow.
        </span>
        </h2>
        <div className='flex flex-wrap justify-center'>
         <div className='p-2 w-full lg:w-1/3 mt-20'>
          <img src={codeImg} alt="code" />
         </div>
         <div className='pt-12 w-full lg:w-1/2'>
           {checklistItems.map((item,index)=>(
              <div key={index} className='flex mb-12'>
                 <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2
                 justify-center items-center rounded-full'>
                 <CheckCircle2 />
                </div>
              </div>

           ))};

         </div>

        </div>
    </div>
  );
};

export default Workflow;
