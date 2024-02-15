import React from 'react';
import weatherapp from '../../../public/images/weather_laptop.png';
import portfolio from '../../../public/images/portfolio_laptop.png';
import gym from '../../../public/images/supplements_laptop.png';
import photographer from '../../../public/images/photographer_laptop.png';
import Card2 from './Card2';

const Projects2 = () => {
  const data = [
    {
      title: 'Weather App',
      description:
        'Explore weather with elegance and ease. Enjoy a stylish UI, user-friendly design, and detailed hourly forecasting',
      stack: 'Nextjs, Ts, TailwindCss',
      image: weatherapp,
      sourceCode: 'https://github.com/AhmadALAhmad1/Weather-App',
      LiveDemo: 'https://weather-app-five-delta-59.vercel.app/',
    },
    {
      title: 'Portfolio',
      description:
        "Welcome to my Portfolio, where I showcase my best work as a developer. Explore my projects and skills in a simple, yet captivating way. Click around and see what I've been up to!",
      stack: 'Nextjs, Ts, TailwindCss',
      image: portfolio,
      sourceCode: 'https://github.com/AhmadALAhmad1/portfolio',
      LiveDemo: 'https://www.alahmad.dev/',
    },
    {
      title: 'E-commerce Gym Supplements Store',
      description:
        'An e-commerce platform offering a variety of gym supplements, complete with features like cart management, user authentication, and a dashboard.',
      stack: 'MERN',
      image: gym,
      sourceCode: 'https://github.com/AhmadALAhmad1/E-commerce-Frontend',
      LiveDemo: 'https://main--triple-a-supplements-store.netlify.app/',
    },
    {
      title: 'E-commerce Photography Studio',
      description:
        'This website serves as an e-commerce platform specializing in exhibiting photographers portfolios while facilitating the sale of prints, accessories, and related items.',
      stack: 'MERN',
      image: photographer,
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
      <div className='pt-10'>
        {data.map((project, index) => (
          <Card2
            key={index}
            title={project.title}
            description={project.description}
            stack={project.stack}
            sourceCode={project.sourceCode}
            liveDemo={project.LiveDemo}
            img={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects2;
