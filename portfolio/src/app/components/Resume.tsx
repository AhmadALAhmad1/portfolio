import Link from 'next/link';
import React from 'react';
import { IoMdCloudDownload } from 'react-icons/io';
const Resume = () => {
  return (
    <div className='py-16'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold'>Resume</h1>
        <p className='text-center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className='mt-5 flex justify-center'>
        <Link
          target='_blank'
          href='/docs/Resume.pdf'
          download='Ahmad Al Ahmad CV.pdf'
        >
          <button className='text- flex items-center gap-2 rounded-xl bg-cyan-500 px-20 py-3 font-bold shadow-lg duration-300 hover:scale-95 sm:px-24 md:px-32'>
            <span>
              <IoMdCloudDownload className='text-[1.3rem]' />
            </span>
            Download
          </button>
        </Link>
      </div>
      <div className='mt-5 flex justify-center'>
        <iframe
          src='/docs/Resume.pdf'
          title='resume'
          className=' min-h-[50rem] w-[100%] rounded-xl sm:w-[70%] md:w-[80%] '
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default Resume;