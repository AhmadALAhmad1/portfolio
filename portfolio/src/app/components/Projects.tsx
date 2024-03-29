import React from 'react';
import Card from './Card';
import gymScreen from '../../../public/images/supplements_web.png';
import photographerScreen from '../../../public/images/photographer_web.png';
import portfolioScreen from '../../../public/images/portfolio_web.png';
const Projects = () => {
  const data = [
    {
      title: 'Portfolio',
      image: portfolioScreen,
      stack: 'Nextjs, Ts, TailwindCss',
      sourceCode: 'https://github.com/AhmadALAhmad1/portfolio',
      LiveDemo: 'https://www.alahmad.dev/',
    },
    {
      title: 'E-commerce Gym Supplements Store',
      image: gymScreen,
      stack: 'MERN',
      sourceCode: 'https://github.com/AhmadALAhmad1/E-commerce-Frontend',
      LiveDemo: 'https://main--triple-a-supplements-store.netlify.app/',
    },
    {
      title: 'E-commerce Photography Studio',
      image: photographerScreen,
      stack: 'MERN',
      sourceCode: 'https://github.com/AhmadALAhmad1/New-Photographer-front',
      LiveDemo: 'https://master--jay-photographer.netlify.app/',
    },
  ];

  return (
    <div id='projects' className='py-16'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold'>Projects</h1>
        <p className='mt-2 text-center'>
          Check out my latest projects below, spanning various technologies and
          skills
        </p>
      </div>
      <div className='grid grid-cols-1 items-center justify-center gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-3'>
        {data.map((project, index) => (
          <Card
            key={index}
            img={project.image}
            title={project.title}
            stack={project.stack.split(',').map((stack) => stack.trim())} // Split stack string into an array
            hrefSourceCode={project.sourceCode}
            hrefLiveDemo={project.LiveDemo}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
