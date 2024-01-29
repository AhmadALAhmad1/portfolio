import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import Image from 'next/image';
import React from 'react';

interface Props {
  img: string;
  title: string;
  description: string;
  stack: string;
}

const Card = (props: Props) => {
  return (
    <div className='group relative h-72 overflow-hidden rounded-xl bg-neutral-100 text-dark shadow-lg transition-transform duration-200  hover:scale-105 dark:bg-neutral-800 dark:text-light'>
      <div className='flex flex-col items-center pt-2'>
        <h2 className='text-lg font-bold'>{props.title}</h2>
        <h4>{props.description}</h4>
      </div>
      <div className='flex items-center justify-center pb-4'>
        <div className='h-2 w-2 rounded-full bg-cyan-500'></div>
        <h4 className='ml-2'>{props.stack}</h4>
      </div>
      <div className='-mt-2 px-4'>
        <Image
          src={props.img}
          alt='placeholder'
          width={400}
          height={600}
          className='group-hover:brightness-70 h-full w-full rounded-md bg-transparent'
        />
      </div>
      <div className='absolute  inset-0 hidden flex-wrap  items-center justify-center gap-x-3  bg-opacity-75 text-light backdrop-blur-lg group-hover:flex dark:text-light'>
        <button className=' rounded-lg border-2 px-4 py-2  text-sm transition duration-300 hover:scale-105 dark:border-2'>
          <span>
            <CodeOutlinedIcon />
          </span>{' '}
          Source Code
        </button>
        <button className='rounded-lg border-2 px-4 py-2 text-sm transition duration-300 hover:scale-105'>
          <span>
            <SensorsOutlinedIcon />
          </span>{' '}
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default Card;
