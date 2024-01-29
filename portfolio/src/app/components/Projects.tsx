// Projects.tsx
import React from 'react';
import Card from './Card';
const Projects = () => {
  const fakeData = [
    {
      title: 'Project 1',
      description: 'Description 1',
      image: '/../../images/portfolio_web.png',
      stack: 'MERN',
    },
    {
      title: 'Project 2',
      description: 'Description 2',
      image: '/../../images/supplements_web.png',
      stack: 'MERN',
    },
    {
      title: 'Project 3',
      description: 'Description 3',
      image: '/../../images/photographer_web.png',
      stack: 'MERN',
    },
    {
      title: 'Project 4',
      description: 'Description 4',
      image: '/../../images/portfolio_web.png',
      stack: 'MERN',
    },
    {
      title: 'Project 5',
      description: 'Description 5',
      image: '/../../images/portfolio_web.png',
      stack: 'MERN',
    },

    {
      title: 'Project 6',
      description: 'Description 6',
      image: '/../../images/portfolio_web.png',
      stack: 'MERN',
    },
  ];

  return (
    <div className='py-16'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold'>Projects</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='grid grid-cols-1 items-center justify-center gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-3'>
        {fakeData.map((project, index) => (
          <Card
            key={index}
            img={project.image}
            title={project.title}
            description={project.description}
            stack={project.stack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
