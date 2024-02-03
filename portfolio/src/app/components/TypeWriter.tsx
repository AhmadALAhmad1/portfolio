'use client';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

const Typing = () => {
  const [firstTyperDone, setFirstTyperDone] = useState(false);

  return (
    <h1 aria-hidden className='max-w-max font-medium'>
      &nbsp;
      <strong className='mb-4 flex text-4xl font-extrabold sm:text-5xl md:text-7xl'>
        {firstTyperDone ? (
          <>I&apos;m Ahmad.</>
        ) : (
          <>
            <span>I&apos;m&nbsp;</span>
            <Typewriter
              options={{ delay: 80 }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(250)
                  .typeString('Ahmad.')
                  .pauseFor(250)
                  .callFunction(() => setFirstTyperDone(true))
                  .start();
              }}
            />
          </>
        )}
      </strong>
      <div className='text-2xl'>
        A developer <wbr />
        <span className='inline-block'>fueled by passion</span>
      </div>
      <div className='text-2xl'>
        {' '}
        to elevate <wbr />
        <span className='inline-block'>the web into a</span>
      </div>
      <div className='text-2xl lg:h-[50px]'>
        {firstTyperDone && (
          <Typewriter
            options={{ delay: 80, deleteSpeed: 20 }}
            onInit={(typewriter) => {
              const stringToDelete = 'unique...';
              typewriter
                .pauseFor(500)
                .typeString(stringToDelete)
                .pauseFor(1000)
                .deleteChars(stringToDelete.length)
                .pauseFor(250)
                .typeString('creative space.')
                .start();
            }}
          />
        )}
        &nbsp;
      </div>
    </h1>
  );
};

export default Typing;
