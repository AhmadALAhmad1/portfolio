import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface Props {
  img: string;
  title: string;
  description?: string;
  stack: string[];
  hrefSourceCode: string;
  hrefLiveDemo: string;
}
const Card = (props: Props) => {
  return (
    <div className='group relative h-72 overflow-hidden rounded-xl bg-neutral-300 text-dark shadow-lg transition-transform duration-300  hover:scale-95 dark:bg-neutral-900 dark:text-light dark:brightness-110'>
      <div className='flex flex-col items-center pt-2'>
        <h2 className='text-md text-center font-bold sm:text-lg'>
          {props.title}
        </h2>
        <h4>{props.description}</h4>
      </div>
      <div className='mt-2 flex items-center justify-center gap-1 space-x-1 pb-4'>
        {props.stack.map((stackItem, index) => (
          <div key={index} className='flex items-center justify-center gap-1 '>
            <div className='h-2 w-2 rounded-full bg-cyan-500 '></div>
            <h4 className='mr-2'>{stackItem}</h4>
          </div>
        ))}
      </div>
      <div className=' px-4'>
        <Image
          src={props.img}
          alt='placeholder'
          width={400}
          height={600}
          className=' h-full w-full rounded-md bg-transparent'
        />
      </div>
      <div className='absolute inset-0 hidden flex-wrap items-center justify-center gap-x-3 bg-opacity-75 text-light backdrop-blur-lg group-hover:flex dark:text-light'>
        <Link target='_blank' href={props.hrefSourceCode}>
          <button className='rounded-lg border-[1px] bg-neutral-700 px-4 py-2 text-sm transition duration-300 hover:scale-95 dark:border-[1px]'>
            <span>
              <CodeOutlinedIcon />
            </span>
            Source Code
          </button>
        </Link>
        <Link target='_blank' href={props.hrefLiveDemo}>
          <button className='rounded-lg border-[1px] bg-neutral-700 px-4 py-2 text-sm transition duration-300 hover:scale-95'>
            <span>
              <SensorsOutlinedIcon />
            </span>
            Live Demo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
