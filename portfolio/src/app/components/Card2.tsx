import React from 'react';
import Image, { StaticImageData } from 'next/image';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import Link from 'next/link';
interface props {
  title: string;
  description: string;
  sourceCode: string;
  liveDemo: string;
  stack: string;
  img: StaticImageData;
}
const Card2 = ({
  title,
  description,
  sourceCode,
  liveDemo,
  img,
  stack,
}: props) => {
  const stackItems = stack.split(',').map((item) => item.trim());
  return (
    <div className='grid grid-cols-1 gap-6 pb-24 sm:pb-20 md:grid-cols-2 md:gap-10 '>
      <Image src={img} alt={'project-image'} width={600} height={600} />
      <div className=' flex flex-col justify-evenly gap-5 text-center md:gap-2 md:text-left'>
        <h1 className='text-2xl font-bold lg:text-3xl'>{title}</h1>
        <p className='text-[#464545] dark:text-light lg:text-lg '>
          {description}
        </p>
        {/* <div className='flex items-center gap-2'>
          <div className='h-2 w-2 rounded-full bg-cyan-500'></div>
          <p className='text-[#464545] dark:text-light'>
            {stack}
          </p>
        </div> */}
        <div className='flex items-center justify-center gap-2 text-center md:justify-normal'>
          {stackItems.map((item, index) => (
            <div key={index} className='-mt-2 flex items-center gap-1 md:mt-0'>
              <div className='h-2 w-2 rounded-full bg-cyan-500'></div>
              <p className='text-[#464545] dark:text-light'>{item}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-wrap items-center justify-center gap-4 pt-3 font-medium md:justify-start md:pt-0'>
          <Link target='_blank' href={sourceCode}>
            <button className='trasnition rounded-lg bg-cyan-500 px-4 py-2.5 duration-300 hover:scale-95 '>
              <span>
                <CodeOutlinedIcon />
              </span>{' '}
              Source Code
            </button>
          </Link>
          <Link target='_blank' href={liveDemo}>
            <button className='trasnition rounded-lg bg-cyan-500  px-4 py-2.5 duration-300 hover:scale-95 '>
              <span>
                <SensorsOutlinedIcon />
              </span>{' '}
              Live Demo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card2;
